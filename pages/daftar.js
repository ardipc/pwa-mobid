import Link from 'next/link'
import Image from 'next/image'

import Heading from '../components/heading'
import Footer from '../components/footer'

export default function Cari() {
  return (
    <>

      <Heading title={`Daftar | Mobid`} />

      <div className="mobile">

        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid text-center">
            <span className="navbar-brand mb-0 h1">
              <Link href="/"><i className="bi bi-arrow-left"></i></Link>{' '}
              Daftar
            </span>
          </div>
        </nav>

        <section className="bg-white px-3 m-4">

          <h5 style={{ fontSize: '18px' }}>
            Perjalanan awalmu dimulai disini.
          </h5>

          <div className="mb-2 mt-3">
            <label htmlFor="nomor" className="form-label">Nomor atau Email</label>
            <input type="email" className="form-control form-control-sm" placeholder="Masukan nomor atau email" />
          </div>
          <div className="mb-4">
            <label htmlFor="nomor" className="form-label">Nama Lengkap</label>
            <input type="text" className="form-control form-control-sm" placeholder="Masukan nama lengkap" />
          </div>

          <div className="text-center">
            <div className="d-grid gap-2 mb-3">
              <button className="btn btn-block btn-outline-primary">Daftar</button>
            </div>

            <p>Sudah punya akun? <Link href="/login"><a className="text-decoration-none">Masuk</a></Link></p>
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
