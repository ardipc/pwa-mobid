import Link from 'next/link'
import Image from 'next/image'

import Heading from '../../components/heading'
import Footer from '../../components/footer'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import useUser from '../../lib/useUser'

import {
  getAllMerchant,
  getOneMerchant,
  addBookmark
} from '../../configs/api'

function changeToWA(number) {
  const nol = number.charAt(0)
  return nol === "0" ? `62${number.substring(1)}` : number
}

function distance(lat1, lon1, lat2, lon2, unit = "K") {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return `${dist.toFixed(2)} KM`;
  }
}

function Detail({ detail }) {

  const { user } = useUser()

  const [dis, setDis] = useState(0)
  const [img, setImg] = useState(detail ? detail.imageUrl : '')

  useEffect(() => {
    const position = localStorage.getItem('position')
    if(position) {
      const { lat, lng } = JSON.parse(position)
      const dis = distance(lat, lng, detail.latitude, detail.longitude)
      setDis(dis)
    }
  }, [])

  const addFav = async (id) => {
    if(user.isLoggedIn) {
      const req = await addBookmark(user.metadata, id)
      toast.info(req.message)
    }
    else {
      router.push('/login')
    }
  }

  return (
    <>

      <Heading title={`Detail | Mobid`} />

      {
        detail ?
          <div className="mobile">
            <section className="bg-white">
              <article>
                <div className="cover">
                  <Link href="/">
                    <i style={{color: 'white'}} className="bi bi-arrow-left back-top cursor-pointer"></i>
                  </Link>
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
                              className="rounded responsive cursor-pointer"
                              onClick={e => setImg(item)}
                              style={{width: '80px', height: '80px', backgroundImage: `url('${item}')`}}
                              ></div>
                          </div>
                        ))
                      }
                    </div>
                  </div>

                  <i onClick={e => addFav(detail.id)} className={`bi bi-heart float-end cursor-pointer`} style={{color: '#ff6961'}}></i>

                  <h5 style={{ fontSize: '18px' }}>
                     {detail ? detail.name : null}
                  </h5>

                  <div className="rating">
                    {
                      detail && [1,2,3,4,5].map((row, key) => (
                        <i key={`ratt-${key}`} style={{color: '#ffc107'}} className={`mx-1 bi bi-star${key < Math.floor(detail.rating) ? '-fill' : ''}`}></i>
                      ))
                    }

                    {' '}<span>({detail.rating})</span>
                  </div>

                  <div className="mb-2 mt-3">
                    <ul className="list-group list-group-flush">
                      {
                        dis !== 0 ?
                          <li className="list-group-item">
                            <i className="bi bi-map"></i> {dis}
                          </li>
                        : null
                      }
                      <li className="list-group-item">
                        <i className="bi bi-geo"></i> {detail ? detail.kota : null}
                      </li>
                      {
                        detail && detail.hasOwnProperty('openOperation') && detail.hasOwnProperty('closeOperation') &&
                        <li className="list-group-item">
                          <i className="bi bi-clock"></i> {detail.openOperation.substring(0,5)} - {detail.closeOperation.substring(0,5)}
                        </li>
                      }
                      <li className="list-group-item">
                        <i className="bi bi-geo-alt"></i> {detail ? detail.alamatLengkap : null}
                      </li>
                      <li className="list-group-item">
                        <div dangerouslySetInnerHTML={{ __html: detail ? detail.deskripsi : null }} />
                      </li>
                    </ul>
                  </div>

                  <div className="action row text-center">
                    {
                      detail.phone ?
                        <div className="col">
                          <div className="d-grid gap-2">
                            <a href={`tel:${detail.phone}`} target="_blank">
                              <button className="btn btn-outline-primary">
                                <i className="bi bi-telephone"></i> Telepon
                              </button>
                            </a>
                          </div>
                        </div>
                      : null
                    }

                    {
                      detail.whatsapp ?
                        <div className="col">
                          <div className="d-grid gap-2">
                            <a href={`https://wa.me/${changeToWA(detail.whatsapp)}/?text=Tanya%20Dong`} target="_blank">
                              <button className="btn btn-outline-primary">
                                <i className="bi bi-whatsapp"></i> Whatsapp
                              </button>
                            </a>
                          </div>
                        </div>
                      : null
                    }

                    {
                      detail.latitude && detail.longitude ?
                        <div className="col">
                          <div className="d-grid gap-2">
                            {
                              detail ?
                              <a href={`https://maps.google.com/?q=${detail.latitude},${detail.longitude}`} target="_blank">
                                <button className="btn btn-outline-primary">
                                  <i className="bi bi-box-arrow-up-right"></i> Petunjuk
                                  </button>
                              </a>
                              : null
                            }
                          </div>
                        </div>
                      : null
                    }
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

        : null
      }

    </>
  )
}

export async function getServerSideProps({params}) {

  const request = await getOneMerchant(params.id)
  const detail = request;

  return {
    props: {
      detail
    }
  }
}

export default Detail;
