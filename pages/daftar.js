import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Cari() {
  return (
    <>

      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />

        <link href="/_manifest.json" rel="manifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/app/icons/icon-192x192.png" />

        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        <script src="/js/app.js"></script>
      </Head>

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

        <footer className="bg-white p-3">
          <div className="text-center">
            <h6 className="p-3">PT Carsworld Digital Indonesia</h6>
            <p>Mudah, cepat, dan informatif untuk keperluan Anda mencari bengkel atau salon mobil terdekat serta review terpercaya.</p>

            {' '}<a className="text-decoration-none" href="#">Tentang</a>{' '}
            |
            {' '}<a className="text-decoration-none" href="#">Syarat & Ketentuan</a>{' '}
            |
            {' '}<a className="text-decoration-none" href="#">Bantuan</a>{' '}

            <div className="my-2 py-2">
              <Link href="/">
                <i className="bi bi-youtube m-3"></i>
              </Link>
              <Link href="/">
                <i className="bi bi-twitter m-3"></i>
              </Link>
              <Link href="/">
                <i className="bi bi-instagram m-3"></i>
              </Link>
              <Link href="/">
                <i className="bi bi-facebook m-3"></i>
              </Link>
            </div>

            <hr />

            <p>Copyright © 2021 Carsworld. All Right Reserved.</p>
          </div>
        </footer>

      </div>

  </>
  )
}
