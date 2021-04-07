import Link from 'next/link'
import Image from 'next/image'

import Heading from '../components/heading'
import Footer from '../components/footer'

import Router from 'next/router'
import { useState } from 'react'

export default function Cari() {
  const [user, setUser] = useState('')

  const btnLogin = (e) => {
    localStorage.setItem('session', JSON.stringify({token: user}))
    Router.push('/')
  }

  return (
    <>

      <Heading title={`Masuk | Mobid`} />

      <div className="mobile">

        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid text-center">
            <span className="navbar-brand mb-0 h1">
              <Link href="/"><i className="bi bi-arrow-left"></i></Link>{' '}
              Masuk
            </span>
          </div>
        </nav>

        <section className="bg-white px-3 m-4">

          <h5 style={{ fontSize: '18px' }}>
            Masuk untuk nikmati kemudahan explore dan akses fitur lainnya
          </h5>

          <div className="my-4">
            <label htmlFor="nomor" className="form-label">Nomor atau Email</label>
            <input onChange={e => setUser(e.target.value)} value={user} type="text" className="form-control form-control-sm" placeholder="Masukan nomor atau email" />
          </div>

          <div className="text-center">
            <div className="d-grid gap-2 mb-3">
              <button onClick={btnLogin} className="btn btn-block btn-outline-primary">Lanjutkan</button>
            </div>

            <p>Belum punya akun? <Link href="/daftar"><a className="text-decoration-none">Daftar</a></Link></p>
          </div>

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
