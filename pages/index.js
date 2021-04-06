import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>

      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />

        <link href="/_manifest.json" rel="manifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0b53be" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        <script src="/js/app.js"></script>
      </Head>

      <nav className="p-0 mobile navbar navbar-dark bg-primary navbar-expand fixed-bottom">
        <ul className="navbar-nav nav-justified w-100">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link text-center active">
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
          <p style={{color: '#0d6efd', fontWeight: 'bold'}}>C A R S W O R L D</p>
        </section>

        <section className="p-3">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" style={{borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}><i className="bi bi-geo-alt"></i></span>
            </div>
            <input placeHolder="Jakarta" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
            <div class="input-group-append">
              <span class="input-group-text" style={{borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}}><i className="bi bi-chevron-right"></i></span>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="px-3 pt-3">
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

        <section className="p-3">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" style={{borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}>
                <i className="bi bi-search"></i>
              </span>
            </div>
            <input placeHolder="Cari..." type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
          </div>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">

          <article class="card mb-3">
            <div class="row g-0">
              <div class="col-sm-5">
                <div className="card card-block card-1"></div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <Link href="/detail">
                    <h5 className="card-title">PT Bintraco Dharma Tbk</h5>
                  </Link>
                  <p class="card-text">Sunburst CBD Lot II No. 3, BSD City, Lengkong Gudang.</p>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <p class="card-text">
                    <strong>3.0 KM</strong>
                    <i className="bi bi-heart float-end"></i>
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article class="card mb-3">
            <div class="row g-0">
              <div class="col-sm-5">
                <div className="card card-block card-1"></div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <Link href="/detail">
                    <h5 className="card-title">PT Bintraco Dharma Tbk</h5>
                  </Link>
                  <p class="card-text">Sunburst CBD Lot II No. 3, BSD City, Lengkong Gudang.</p>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <p class="card-text">
                    <strong>3.0 KM</strong>
                    <i className="bi bi-heart float-end"></i>
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article class="card mb-3">
            <div class="row g-0">
              <div class="col-sm-5">
                <div className="card card-block card-1"></div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <Link href="/detail">
                    <h5 className="card-title">PT Bintraco Dharma Tbk</h5>
                  </Link>
                  <p class="card-text">Sunburst CBD Lot II No. 3, BSD City, Lengkong Gudang.</p>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <p class="card-text">
                    <strong>3.0 KM</strong>
                    <i className="bi bi-heart float-end"></i>
                  </p>
                </div>
              </div>
            </div>
          </article>

        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{borderRadius: '12px'}}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" style={{borderRadius: '12px'}}>
              <div className="carousel-item active" style={{borderRadius: '12px'}}>
                <div className="card card-carousel card-1"></div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item" style={{borderRadius: '12px'}}>
                <div className="card card-carousel card-1"></div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item" style={{borderRadius: '12px'}}>
                <div className="card card-carousel card-1"></div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <div className="scrolling-wrapper row flex-row flex-nowrap">
      			<div className="col-12">
      				<div className="card card-block card-1"></div>
      			</div>
      			<div className="col-12">
      				<div className="card card-block card-1"></div>
      			</div>
      			<div className="col-12">
      				<div className="card card-block card-1"></div>
      			</div>
      			<div className="col-12">
      				<div className="card card-block card-1"></div>
      			</div>
      			<div className="col-12">
      				<div className="card card-block card-1"></div>
      			</div>
    			</div>

          <nav className="p-0 mobile navbar navbar-light navbar-expand mt-2 mb-2">
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
                    <i className="bi bi-briefcase" style={{fontSize: '1.2em'}}></i>
                    <span className="small d-block">Cari</span>
                  </a>
              </Link>
              </li>
              <li className="nav-item">
                <Link href="/galang">
                  <a className="nav-link text-center">
                    <i className="bi bi-award" style={{fontSize: '1.2em'}}></i>
                    <span className="small d-block">Berita</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pesan">
                  <a className="nav-link text-center">
                    <i className="bi bi-basket" style={{fontSize: '1.2em'}}></i>
                    <span className="small d-block">Pesan</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">Sedang Berlangsung</p>

          <div className="scrolling-wrapper row flex-row flex-nowrap">
            <article className="col-11">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <Link href="/detail">
                    <h6 className="card-title mb-3">Card title</h6>
                  </Link>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-2">
                    Rp 121.500.000
                    <span className="float-end">4 hari lagi</span>
                  </p>
                </div>
              </div>
            </article>
            <article className="col-11">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <h6 className="card-title mb-3">Card title</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-2">
                    Rp 1.500.000
                    <span className="float-end">20 hari lagi</span>
                  </p>
                </div>
              </div>
            </article>
            <article className="col-11">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <h6 className="card-title mb-3">Card title</h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-2">
                    Rp 121.500.000
                    <span className="float-end">4 hari lagi</span>
                  </p>
                </div>
              </div>
            </article>
          </div>

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

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Review Terbaru
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
