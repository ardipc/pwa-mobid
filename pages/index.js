import Link from 'next/link'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { API_KATEGORI, API_MERCHANT, API_KONSULTASI } from '../configs/rest'
import axios from 'axios'


export default function Home() {

  const [kategori, setKategori] = useState([])
  const [merchant, setMerchant] = useState([])
  const [konsultasi, setKonsultasi] = useState([])

  const router = useRouter()
  const { asPath } = router

  const fetchKategori = () => {
    axios.get(API_KATEGORI).then(res => {
      if(res.status === 200) {
        const { result } = res.data
        setKategori(result)
      }
    })
  }

  const fetchMerchant = () => {
    axios.post(API_MERCHANT).then(res => {
      if(res.status === 200) {
        const { result } = res.data
        setMerchant(result)
      }
    })
  }

  const fetchKonsultasi = () => {
    axios.post(API_KONSULTASI).then(res => {
      if(res.status === 200) {
        const { result } = res.data
        setKonsultasi(result)
      }
    })
  }

  useEffect(() => {
    fetchKategori()
    fetchMerchant()
    fetchKonsultasi()
  }, [])

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
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1 cursor-pointer">Semua</span></div>
            {
              kategori.map((item, i) => (
                <div key={`kat-${i}`} className="col px-0"><span className="badge bg-primary p-2 mx-1 cursor-pointer">{item.name}</span></div>
              ))
            }
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
            merchant.map((item, i) => (
              <article className="card mb-3" key={`art-${i}`}>
                <div className="row g-0">
                  <div className="col-sm-5">
                    <div className="card card-block card-1 responsive" style={{backgroundImage: `url('${item.imageUrl}')`}}></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <Link href={`/details/${item.id}`}>
                        <h5 className="card-title cursor-pointer">{item.name}</h5>
                      </Link>
                      <p className="card-text">{item.alamatLengkap}</p>
                      <div className="rating mb-1">
                        {
                          [1,2,3,4,5].map((row, key) => (
                            <i key={`rat-${key}`} style={{color: '#ffc107'}} className={`mx-1 bi bi-star${key < Math.floor(item.rating) ? '-fill' : ''}`}></i>
                          ))
                        }
                      </div>
                      <p className="card-text">
                        <strong>{item.kota}</strong>
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
          <p className="h6 mb-3">Cek Mobil Kamu</p>

          <div className="row text-center">
            {
              konsultasi.map((item, i) => (
                <div className="my-2 square-80">
                  <Link href="/">
                    <a className="text-center text-decoration-none">
                      <img src={item.icon} className="square-50" />
                      <span className="small d-block">{item.nama}</span>
                    </a>
                  </Link>
                </div>
              ))
            }
          </div>

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
