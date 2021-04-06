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

      <nav className="p-0 mobile navbar navbar-dark bg-primary navbar-expand fixed-bottom">
        <ul className="navbar-nav nav-justified w-100">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link text-center">
                <i className="bi bi-house" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Beranda</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/konsultasi">
              <a className="nav-link text-center">
                <i className="bi bi-gear" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Konsultasi</span>
              </a>
          </Link>
          </li>
          <li className="nav-item">
            <Link href="/berita">
              <a className="nav-link text-center">
                <i className="bi bi-newspaper" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Berita</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/favorit">
              <a className="nav-link text-center active">
                <i className="bi bi-heart" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Favorit</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/akun">
              <a className="nav-link text-center">
                <i className="bi bi-person" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Profil</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="pb-5 mobile">

        <section className="text-center pt-4">
          <p style={{color: '#0d6efd', fontWeight: 'bold'}}>F A V O R I T</p>
        </section>

        <section className="bg-white p-3">

          <div className="update text-center m-3">
            <Image
              src="/img/nodata.png"
              alt="No data"
              width={120}
              height={120}
            />

          <h5 className="mt-3">Oops</h5>
            <p>Untuk dapat mengakses menu ini, Kamu harus masuk ke Carsworld ini !</p>

            <div className="d-grid gap-2">
              <Link href="/login">
                <button className="btn btn-block btn-outline-primary">MASUK</button>
              </Link>
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
