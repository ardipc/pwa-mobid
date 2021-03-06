import Link from 'next/link'
import Image from 'next/image'

import Heading from '../components/heading'
import Footer from '../components/footer'

import Router from 'next/router'
import { useState } from 'react'
import Countdown from 'react-countdown'

import { Modal } from 'react-bootstrap'

import { userOTPRequest } from '../configs/api'
import { toast } from 'react-toastify'

import useUser from '../lib/useUser'
import fetchJson from '../lib/fetchJson'

export async function getServerSideProps({ params }) {
  const timeToken = Date.now() + 60000 * 5

  return {
    props: { timeToken }
  }
}

export default function Login({ timeToken }) {

  const { mutateUser } = useUser({
    redirectTo: '/akun',
    redirectIfFound: true
  })

  const [show, setShow] = useState(false);
  const [via, setVia] = useState(false);

  const handleClose = () => { setShow(false); setVia(false); }
  const handleShow = () => setShow(true);

  const [user, setUser] = useState('')
  const [otp, setOtp] = useState('')
  const [msg, setMsg] = useState('')

  const btnLogin = async (via) => {
    if(user) {
      setVia(false)
      setShow(true)
      userOTPRequest(user, via)
    }
    else {
      toast.info('Nomor kamu masih kosong')
    }
  }

  const kirimUlang = () => {
    setVia(true)
    setShow(false)
  }

  const btnValidasi = async (e) => {
    if(otp) {
      const req = await fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nohp: user, otp: otp })
      })

      if(req.success) {
        await mutateUser(req)
      }
      else {
        setMsg(req.message)
        setOtp('')
      }
    }
    else {
      console.log('OTP kosong')
    }
  }

  const Completionist = () => <span onClick={kirimUlang}>Kirim ulang</span>;

  const pad = (number, size) => {
    var s = String(number)
    while(s.length < (size || 2)) { s = "0" + s }
    return s
  }

  return (
    <>

      <Heading title={`Masuk | Mobid`} />

      <div className="mobile">

        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid text-center">
            <span className="navbar-brand mb-0 h1">
              <Link href="/"><i className="bi bi-arrow-left cursor-pointer"></i></Link>{' '}
              Masuk
            </span>
          </div>
        </nav>

        <section className="bg-white px-3 m-4">

          <h5 style={{ fontSize: '18px' }}>
            Masuk untuk nikmati kemudahan explore dan akses fitur lainnya
          </h5>

          <div className="my-4">
            <label htmlFor="nomor" className="form-label">Nomor HP Kamu</label>
            <input onChange={e => setUser(e.target.value)} value={user} type="text" className="form-control" placeholder="Masukan nomor atau email" />
          </div>

          <div className="text-center">
            <div className="d-grid gap-2 mb-3">
              <button onClick={e => user ? setVia(true) : toast.info('Nomor kamu masih kosong')} className="btn btn-block btn-outline-primary">Lanjutkan</button>
            </div>

            <p>Belum punya akun? <Link href="/daftar"><a className="text-decoration-none">Daftar</a></Link></p>
          </div>

          <Modal show={via} onHide={handleClose} centered>
            <Modal.Body>
              <h5 className="mt-2 mb-4">Pilih Metode Verifikasi</h5>
              <p>Pilih salah satu metode dibawah ini untuk mendapatkan kode verifikasi</p>

              <div className="d-grid gap-2">
                <button onClick={e => btnLogin('wa')} className="btn btn-block btn-outline-primary"><i className="bi bi-whatsapp"></i> Whatsapp</button>
                <button onClick={e => btnLogin('sms')} className="btn btn-block btn-outline-primary"><i className="bi bi-envelope"></i> SMS</button>
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false}>
            <Modal.Body>
              <h6>Masukkan kodenya, ya!</h6>
              <p>Masukkan kode verifikasi yang kami kirimkan ke nomor Kamu.</p>

              {
                msg ? <div className="text-center mt-4"><p className="text-danger">{msg}</p></div> : null
              }

              <div className="input-group">
                <input onChange={e => setOtp(e.target.value)} value={otp} placeholder="xxxx" type="text" className="form-control" aria-label="OTP" />
              </div>

              <div className="my-3 text-center">
                <Countdown
                  renderer={({ hours, minutes, seconds, completed }) => {
                    if (completed) {
                      return <Completionist />;
                    } else {
                      return <span>{pad(minutes)}:{pad(seconds)}</span>;
                    }
                  }}
                  date={timeToken} />
              </div>

              <div className="d-grid gap-2 mt-4">
                <button onClick={btnValidasi} className="btn btn-primary">Verifikasi</button>
              </div>

              <div className="mt-3 text-center cursor-pointer">
                <span onClick={handleClose}>Close</span>
              </div>
            </Modal.Body>
          </Modal>

        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">

          <div className="update text-center m-3">

            <h5 className="mt-2 mb-4">Atau lebih cepat</h5>

            <div className="d-grid gap-2">
              <button className="btn btn-block btn-outline-primary"><i className="bi bi-google"></i> Google</button>
              <button className="btn btn-block btn-outline-primary"><i className="bi bi-facebook"></i> Facebook</button>
              <button className="btn btn-block btn-outline-primary"><i className="bi bi-twitter"></i> Twitter</button>
              <button className="btn btn-block btn-outline-primary"><i className="bi bi-github"></i> Github</button>
            </div>
          </div>

        </section>

        <div className="divider"></div>

        <Footer />

      </div>

  </>
  )
}
