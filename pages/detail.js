import Link from 'next/link'
import Image from 'next/image'

import Heading from '../components/heading'
import Footer from '../components/footer'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { API_MERCHANT } from '../configs/rest'
import axios from 'axios'

export default function Detail() {

  const router = useRouter()
  const { id } = router.query

  const [img, setImg] = useState('info')
  const [detail, setDetail] = useState({})

  const fetchDetailMerchant = (id) => {
    axios.post(`${API_MERCHANT}/${id}`).then(res => {
      if(res.status === 200) {
        const { result } = res.data
        setDetail(result)
        setImg(result.imageUrl)
      }
    })
  }

  useEffect(() => {
    if(id) {
      fetchDetailMerchant(id)
    }
  }, [id])

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
              <div className={`bg-info responsive`} style={{width: '100%', height: '300px', marginTop: '-24px', backgroundImage: `url('${img}')`}}></div>
            </div>

            <div className="p-3">
              <div className="preview mb-2">
                <div className="scrolling-wrapper row flex-row flex-nowrap">
                  <div className="col">
                    <div
                      className="bg-info rounded responsive cursor-pointer"
                      onClick={e => setImg(detail.imageUrl)}
                      style={{width: '80px', height: '80px', backgroundImage: `url('${detail.imageUrl}')`}}
                      ></div>
                  </div>
                  {
                    detail.hasOwnProperty('images') && detail.images.map((item, i) => (
                      <div className="col" key={`img-${i}`}>
                        <div
                          className="bg-info rounded responsive"
                          onClick={e => setImg(item)}
                          style={{width: '80px', height: '80px', backgroundImage: `url('${item}')`}}
                          ></div>
                      </div>
                    ))
                  }
                </div>
              </div>

              <h5 style={{ fontSize: '18px' }}>
                 {detail.name}
              </h5>

              <div className="rating">
                {
                  [1,2,3,4,5].map((row, key) => (
                    <i style={{color: '#ffc107'}} className={`mx-1 bi bi-star${key < Math.floor(detail.rating) ? '-fill' : ''}`}></i>
                  ))
                }
              </div>

              <div className="mb-2 mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-geo"></i> {detail.kota}
                  </li>
                  {
                    detail.hasOwnProperty('openOperation') && detail.hasOwnProperty('closeOperation') &&
                    <li className="list-group-item">
                      <i className="bi bi-clock"></i> {detail.openOperation.substring(0,5)} - {detail.closeOperation.substring(0,5)}
                    </li>
                  }
                  <li className="list-group-item">
                    <i className="bi bi-geo-alt"></i> {detail.alamatLengkap}
                  </li>
                  <li className="list-group-item">
                    <div dangerouslySetInnerHTML={{ __html: detail.deskripsi }} />
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
                    <a href={`https://maps.google.com/?q=${detail.latitude},${detail.longitude}`} target="_blank">
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
