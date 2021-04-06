import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Detail() {
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

        <section className="bg-white">
          <article>
            <div className="cover">
              <Link href="/">
                <i className="bi bi-arrow-left back-top"></i>
              </Link>
              <i className="bi bi-heart favorit-top"></i>
              <i className="bi bi-share share-top"></i>
              <div className="bg-primary" style={{width: '100%', height: '300px', marginTop: '-24px'}}></div>
            </div>

            <div className="p-3">
              <div className="preview mb-2">
                <div className="scrolling-wrapper row flex-row flex-nowrap">
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                </div>
              </div>

              <h5 style={{ fontSize: '18px' }}>
                 PT Bintraco Dharma Tbk.
              </h5>

              <div className="rating">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>

              <div className="mb-2 mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <i className="bi bi-calendar-check"></i> Senin-Jumat
                  </li>
                  <li class="list-group-item">
                    <i className="bi bi-clock"></i> 08:00 - 16:00
                  </li>
                  <li class="list-group-item">
                    <i className="bi bi-geo-alt"></i> Sunburst CBD Lot II No. 3, BSD City, Lengkong Gudang, Serpong Sub-District, South Tangerang City, Banten 15321, Indonesia
                  </li>
                  <li class="list-group-item">
                    <i className="bi bi-chat-text"></i> 24 Reviews
                  </li>
                </ul>
              </div>

              <div className="action row text-center">
                <div className="col">
                  <div class="d-grid gap-2">
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-telephone"></i> Telepon
                    </button>
                  </div>
                </div>
                <div className="col">
                  <div class="d-grid gap-2">
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-whatsapp"></i> Whatsapp
                    </button>
                  </div>
                </div>
                <div className="col">
                  <div class="d-grid gap-2">
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-box-arrow-up-right"></i> Petunjuk
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </article>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Reviews
            <a className="float-end text-decoration-none font-weight-normal">Lainnya</a>
          </p>

          <div className="scrolling-wrapper row flex-row flex-nowrap">
            <article className="col-11">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content make up the bulk of the card's.</p>

                  <div className="row my-2">
                    <div className="col-6 text-center">
                      <a href="#" className="text-decoration-none card-link col-6">Suka</a>
                    </div>
                    <div className="col-6 text-center">
                      <a href="#" className="text-decoration-none card-link col-6">Bagikan</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-11">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content make up the bulk of the card's.</p>

                  <div className="row my-2">
                    <div className="col-6 text-center">
                      <a href="#" className="text-decoration-none card-link col-6">Suka</a>
                    </div>
                    <div className="col-6 text-center">
                      <a href="#" className="text-decoration-none card-link col-6">Bagikan</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-11">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content make up the bulk of the card's.</p>

                  <div className="row my-2">
                    <div className="col-6 text-center">
                      <a href="#" className="text-decoration-none card-link col-6">Suka</a>
                    </div>
                    <div className="col-6 text-center">
                      <a href="#" className="text-decoration-none card-link col-6">Bagikan</a>
                    </div>
                  </div>
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
