import Link from 'next/link'
import Head from 'next/head'

export default function Berita() {
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
              <a className="nav-link text-center active">
                <i className="bi bi-newspaper" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Berita</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/favorit">
              <a className="nav-link text-center">
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
          <p style={{color: '#0d6efd', fontWeight: 'bold'}}>B E R I T A</p>
        </section>

        <section className="px-3 pt-3 pb-2">
          <div className="scrolling-wrapper row flex-row flex-nowrap">
            <div className="col px-0"><span class="badge bg-primary p-2 mx-1">Semua</span></div>
            <div className="col px-0"><span class="badge bg-primary p-2 mx-1">Bengkel Mobil</span></div>
            <div className="col px-0"><span class="badge bg-primary p-2 mx-1">Cuci Mobil</span></div>
            <div className="col px-0"><span class="badge bg-primary p-2 mx-1">Pom Bensin</span></div>
            <div className="col px-0"><span class="badge bg-primary p-2 mx-1">Cutting</span></div>
            <div className="col px-0"><span class="badge bg-primary p-2 mx-1">Dealer</span></div>
            <div className="col px-0"><span class="badge bg-primary p-2 mx-1">Velg</span></div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Hasil pencarian
            <a className="float-end text-decoration-none font-weight-normal">Lainnya</a>
          </p>

          <div className="row mb-3">
            <article className="col-12 mb-3">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <Link href="/baca"><h6 className="card-title mb-3">Perhatikan Waktu Ideal untuk Servis AC Mobil</h6></Link>
                  <p className="mt-2">
                    <span class="badge bg-primary p-2 mx-1">Tips</span>
                    <span className="float-end">12 Maret 2021 08:15 AM</span>
                  </p>
                </div>
              </div>
            </article>

            <article className="col-12 mb-3">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <Link href="/baca"><h6 className="card-title mb-3">Ada Waktu Ideal, Berapa Sebenarnya Kilometer Yang Pas Untuk Service AC?</h6></Link>
                  <p className="mt-2">
                    <span class="badge bg-primary p-2 mx-1">Service</span>
                    <span className="float-end">12 Maret 2021 08:15 AM</span>
                  </p>
                </div>
              </div>
            </article>

            <article className="col-12 mb-3">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <Link href="/baca"><h6 className="card-title mb-3">Ada Waktu Ideal, Berapa Sebenarnya Kilometer Yang Pas Untuk Service AC?</h6></Link>
                  <p className="mt-2">
                    <span class="badge bg-primary p-2 mx-1">Service</span>
                    <span className="float-end">12 Maret 2021 08:15 AM</span>
                  </p>
                </div>
              </div>
            </article>

          </div>

          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li key={0} className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li key={1} className="page-item"><a className="page-link" href="#">1</a></li>
              <li key={2} className="page-item"><a className="page-link" href="#">2</a></li>
              <li key={3} className="page-item"><a className="page-link" href="#">3</a></li>
              <li key={4} className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>

        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Paling Terbaru
            <a className="float-end text-decoration-none font-weight-normal">Lainnya</a>
          </p>

          <div className="scrolling-wrapper row flex-row flex-nowrap">
            <article className="col-7">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <h6 className="card-title mb-3">Card title</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-2">
                    Rp 121.500.000
                  </p>
                </div>
              </div>
            </article>
            <article className="col-7">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <h6 className="card-title mb-3">Card title</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-2">
                    Rp 1.500.000
                  </p>
                </div>
              </div>
            </article>
            <article className="col-7">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <h6 className="card-title mb-3">Card title</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-2">
                    Rp 121.500.000
                  </p>
                </div>
              </div>
            </article>
            <article className="col-7">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <h6 className="card-title mb-3">Card title</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-2">
                    Rp 121.500.000
                  </p>
                </div>
              </div>
            </article>
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
