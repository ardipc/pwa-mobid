import Link from 'next/link'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

import { useRouter } from 'next/router'

export default function Home() {

  const nearMe = [
    {id: 1, title: 'PT Bintraco Dharma Tbk', address: 'Sunburst CBD Lot II No. 3, BSD City, Lengkong Gudang.', rating: 4, distance: '3.0 KM'},
    {id: 2, title: 'PT MPM Rental Motor', address: 'Sunburst, CBD Lot II, Jl. Kapten Soebijanto Djojohadikusumo No.10, Lengkong Gudang.', rating: 3, distance: '4.0 KM'},
    {id: 3, title: 'Sewa Mobil BSD', address: 'Ruko Malibu, Jl Pahlawan Seribu, BSD Tangerang Selatan, Lengkong Gudang.', rating: 3, distance: '10.0 KM'}
  ]

  const router = useRouter()
  const { asPath } = router

  return (
    <>

      <Heading title={`Beranda | Mobid`} />

      <NavBottom isActive={asPath} />

      <div className="pb-5 mobile">

        <section className="text-center pt-4">
          <img src="/icons/cw.png" className="img-fluid" style={{width: '32%'}} />
        </section>

        <section className="p-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" style={{borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}><i className="bi bi-geo-alt"></i></span>
            </div>
            <input placeholder="Jakarta" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
            <div className="input-group-append">
              <span className="input-group-text" style={{borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}}><i className="bi bi-chevron-right"></i></span>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="px-3 pt-3">
          <div className="scrolling-wrapper row flex-row flex-nowrap">
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Semua</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Bengkel Mobil</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Cuci Mobil</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Pom Bensin</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Cutting</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Dealer</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Velg</span></div>
          </div>
        </section>

        <section className="p-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" style={{borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}>
                <i className="bi bi-search"></i>
              </span>
            </div>
            <input placeholder="Cari..." type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
          </div>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">

          {
            nearMe.map((item, i) => (
              <article className="card mb-3" key={`art-${i}`}>
                <div className="row g-0">
                  <div className="col-sm-5">
                    <div className="card card-block card-1"></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <Link href="/detail">
                        <h5 className="card-title cursor-pointer">{item.title}</h5>
                      </Link>
                      <p className="card-text">{item.address}</p>
                      <div className="rating">
                        {
                          [1,2,3,4,5].map((row, key) => (
                            <i className={`bi bi-star${key < item.rating ? '-fill' : ''}`}></i>
                          ))
                        }
                      </div>
                      <p className="card-text">
                        <strong>{item.distance}</strong>
                        <i className="bi bi-heart float-end cursor-pointer"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))
          }

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

        <Footer />

      </div>

  </>
  )
}
