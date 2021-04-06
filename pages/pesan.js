import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

const tabs = ['update', 'notifikasi'];

export default function Cari() {
  const [tab, setTab] = useState('notifikasi');

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

      <nav className="p-0 mobile navbar navbar-dark bg-success navbar-expand fixed-bottom">
        <ul className="navbar-nav nav-justified w-100">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link text-center">
                <i className="bi bi-house" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Home</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/cari">
              <a className="nav-link text-center">
                <i className="bi bi-search" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Cari</span>
              </a>
          </Link>
          </li>
          <li className="nav-item">
            <Link href="/galang">
              <a className="nav-link text-center">
                <i className="bi bi-plus-square" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Galang</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/pesan">
              <a className="nav-link text-center">
                <i className="bi bi-bell" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Pesan</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/akun">
              <a className="nav-link text-center">
                <i className="bi bi-person" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Akun</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="pb-5 mobile">

        <nav className="navbar navbar-dark bg-success">
          <div className="container-fluid text-center">
            <span className="navbar-brand mb-0 h1">Pesan</span>
          </div>
        </nav>

        <section className="bg-white p-2">
          <ul className="nav nav-pills nav-fill border-bottom">
            {
              tabs.map((item) => (
                <li className={`nav-item t-capitalize ${item === tab ? 'border-b' : ''}`}>
                  <a className="nav-link" onClick={e => setTab(item)}>{item}</a>
                </li>
              ))
            }
          </ul>
        </section>

        <section className="bg-white p-3">

          {
            tab === 'update' ?
            <div className="update text-center m-3">
              <Image
                src="/img/nodata.png"
                alt="No data"
                width={120}
                height={120}
              />

              <h5 className="mt-3">Belum ada update</h5>
              <p>Untuk melihat update dari penggalanan dana, masuk ke akun kamu dulu yuk!</p>

              <div className="d-grid gap-2">
                <Link href="/login">
                  <button className="btn btn-sm btn-block btn-outline-success">MASUK</button>
                </Link>
              </div>
            </div>
            : null
          }

          {
            tab === 'notifikasi' ?
            <div className="notifikasi">
              <article className="col-12 mb-4">
                <h6>Ada kesempatan spesial!⏰</h6>
                <p><small>Kenalan sama Mbah Jumiyo (70), penjual es jadul yang suka berbagi kepada anak yatim.</small></p>
                <div className="card card-block card-1"></div>
              </article>

              <article className="col-12 mb-4">
                <h6>Ada kesempatan spesial!⏰</h6>
                <p><small>Kenalan sama Mbah Jumiyo (70), penjual es jadul yang suka berbagi kepada anak yatim.</small></p>
                <div className="card card-block card-1"></div>
              </article>

              <article className="col-12 mb-4">
                <h6>Ada kesempatan spesial!⏰</h6>
                <p><small>Kenalan sama Mbah Jumiyo (70), penjual es jadul yang suka berbagi kepada anak yatim.</small></p>
                <div className="card card-block card-1"></div>
              </article>
            </div>
            : null
          }

        </section>

        <div className="divider"></div>

        <footer className="bg-white p-3">
          <div className="text-center">
            <h6 className="p-3">Download Aplikasi Template</h6>
            <p>Mudah, cepat, dan bisa donasi mulai dari Rp1.000,- dan tidak perlu install aplikasi Template.</p>

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

            <p>Copyright © 2021 Template. All Right Reserved.</p>
          </div>
        </footer>

      </div>

  </>
  )
}
