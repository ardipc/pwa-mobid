import Link from 'next/link'
import Image from 'next/image'

import Heading from '../components/heading'
import Footer from '../components/footer'

import Router from 'next/router'
import { useState } from 'react'

import { Modal } from 'react-bootstrap'

import { userOTPRequest } from '../configs/api'

import useUser from '../lib/useUser'
import fetchJson from '../lib/fetchJson'

export default function Login() {

  const { mutateUser } = useUser({
    redirectTo: '/akun',
    redirectIfFound: true
  })

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState('')
  const [otp, setOtp] = useState('')
  const [msg, setMsg] = useState('')

  const btnLogin = async (e) => {
    if(user) {
      const req = await userOTPRequest(user)
      setShow(true)
    }
    else {
      console.log('Nomor kosong')
    }
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
              <button onClick={btnLogin} className="btn btn-block btn-outline-primary">Lanjutkan</button>
            </div>

            <p>Belum punya akun? <Link href="/daftar"><a className="text-decoration-none">Daftar</a></Link></p>
          </div>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Body>
              <h6>Masukkan kodenya, ya!</h6>
              <p>Masukkan kode verifikasi yang kami kirimkan ke nomor Kamu.</p>

              <div className="input-group">
                <input onChange={e => setOtp(e.target.value)} value={otp} placeholder="xxxx" type="text" className="form-control" aria-label="OTP" />
              </div>

              <div className="d-grid gap-2 mt-4">
                <button onClick={btnValidasi} className="btn btn-primary">Verifikasi</button>
              </div>

              {
                msg ? <div className="text-center mt-4"><p className="text-danger">{msg}</p></div> : null
              }
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
