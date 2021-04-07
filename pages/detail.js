import Link from 'next/link'
import Image from 'next/image'

import Heading from '../components/heading'
import Footer from '../components/footer'

import { useState } from 'react'

export default function Detail() {

  const [img, setImg] = useState('primary')

  return (
    <>

      <Heading title={`Detail | Mobid`} />

      <div className="mobile">

        <section className="bg-white">
          <article>
            <div className="cover">
              <Link href="/">
                <i className="bi bi-arrow-left back-top cursor-pointer"></i>
              </Link>
              <i className="bi bi-heart favorit-top cursor-pointer"></i>
              <i className="bi bi-share share-top cursor-pointer"></i>
              <div className={`bg-${img}`} style={{width: '100%', height: '300px', marginTop: '-24px'}}></div>
            </div>

            <div className="p-3">
              <div className="preview mb-2">
                <div className="scrolling-wrapper row flex-row flex-nowrap">
                  <div className="col"><div onClick={e => setImg('primary')} className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div onClick={e => setImg('secondary')} className="bg-secondary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div onClick={e => setImg('success')} className="bg-success rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div onClick={e => setImg('warning')} className="bg-warning rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div onClick={e => setImg('info')} className="bg-info rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div onClick={e => setImg('dark')} className="bg-dark rounded" style={{width: '80px', height: '80px'}}></div></div>
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
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-calendar-check"></i> Senin-Jumat
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-clock"></i> 08:00 - 16:00
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-geo-alt"></i> Sunburst CBD Lot II No. 3, BSD City, Lengkong Gudang, Serpong Sub-District, South Tangerang City, Banten 15321, Indonesia
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-chat-text"></i> 24 Reviews
                  </li>
                </ul>
              </div>

              <div className="action row text-center">
                <div className="col">
                  <div className="d-grid gap-2">
                    <a href="tel:+6282334093822" target="_blank">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-telephone"></i> Telepon
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="d-grid gap-2">
                    <a href="https://wa.me/6282334093822/?text=Tanya%20Dong." target="_blank">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-whatsapp"></i> Whatsapp
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="d-grid gap-2">
                    <a href="https://goo.gl/maps/Y25pbHX3sKFtLqEm8" target="_blank">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-box-arrow-up-right"></i> Petunjuk
                      </button>
                    </a>
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
            <a className="float-end text-decoration-none font-weight-normal cursor-pointer">Lainnya</a>
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
