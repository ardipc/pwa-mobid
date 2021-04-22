import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

import { Modal, ListGroup } from 'react-bootstrap'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Berita from '../components/berita'
import Explore from '../components/explore'

import { toast } from 'react-toastify'
import Countdown from 'react-countdown'

import moment from 'moment-timezone'

import {
  getAllKategori,
  getAllMerchant,
  getLatestPosts,
  getPropinsi,
  getKota,
  addBookmark
} from '../configs/api'

import useUser from '../lib/useUser'
import usePosition from '../lib/usePosition'

export async function getStaticProps() {
  const kategori      = await getAllKategori()

  const merBody       = {
    max: 5,
    page: 0
  }
  const merchant      = await getAllMerchant(merBody)

  const posts         = await getLatestPosts()

  const propinsi      = await getPropinsi()

  const cars          = [
    {
      id: 4,
      img: 'https://i.pinimg.com/originals/6b/6d/55/6b6d559168641728b25f39d1829b9262.jpg',
      name: 'Christopher Caruana Mustang',
      price: 550000000,
      time: '2021-04-22T20:15:00'
    },
    {
      id: 3,
      img: 'https://media.ed.edmunds-media.com/bmw/i8/2019/oem/2019_bmw_i8_coupe_base_fq_oem_1_1600.jpg',
      name: 'BMW Razor',
      price: 350000000,
      time: '2021-04-22T16:15:00'
    },
    {
      id: 1,
      img: 'https://imgx.gridoto.com/crop/42x28:1898x1109/700x465/photo/2019/01/14/307035676.jpg',
      name: 'Supra X 125',
      price: 160000000,
      time: '2021-04-22T17:30:00'
    },
    {
      id: 2,
      img: 'https://carsalesbase.com/wp-content/uploads/2020/02/European-sales-2019-Exotics-and-Sports-Cars.png',
      name: 'Ferrari Sumarino',
      price: 900000000,
      time: '2021-04-22T15:45:00'
    }
  ]

  return {
    props: { kategori, merchant, posts, propinsi, cars },
  }
}

function Home({ kategori, merchant, posts, propinsi, cars }) {

  const { user } = useUser()
  const {latitude, longitude, error} = usePosition();

  const [kotaList, setKotaList] = useState([]);

  const [load, setLoad] = useState(false);

  const [show, setShow] = useState(false);
  const [prop, setProp] = useState('');
  const [kota, setKota] = useState('');

  const [cari, setCari] = useState('');

  const [mer, setMer] = useState(merchant.result);

  useEffect(() => {
    if(latitude && longitude) {
      const pos = {lat: latitude, lng: longitude}
      localStorage.setItem('position', JSON.stringify(pos))
    }

    setProp(localStorage.getItem('propinsi') ? JSON.parse(localStorage.getItem('propinsi')) : '')
    setKota(localStorage.getItem('kota') ? JSON.parse(localStorage.getItem('kota')) : '')

    if(localStorage.getItem('kota')) {
      const parse = JSON.parse(localStorage.getItem('kota'))
      const filter = mer.filter(row => row.kota === parse.nama)
      setMer(filter)
    }
  }, [])

  const router = useRouter()
  const { asPath } = router

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openPosisi = () => {
    setProp('')
    setKota('')
    setKotaList([])
    localStorage.removeItem('propinsi')
    localStorage.removeItem('kota')
    setMer(merchant.result)
    setShow(true)
  }

  const choosePropinsi = async (item) => {
    setProp(item)
    localStorage.setItem('propinsi', JSON.stringify(item))

    const list = await getKota(item.kode)
    setKotaList(list)
  }

  const chooseKota = async (item) => {
    setKota(item)
    localStorage.setItem('kota', JSON.stringify(item))

    const filter = mer.filter(row => row.kota === item.nama)
    setMer(filter)

    setShow(false)
  }

  const addFav = async (id) => {
    if(user.isLoggedIn) {
      const req = await addBookmark(user.metadata, id)
      toast.info(req.message)
    }
    else {
      router.push('/login')
    }
  }

  const chooseKategori = async (id) => {
    const merBody       = {
      max: 10,
      page: 0
    }

    if(id !== "0") merBody.cat = id

    setLoad(true)
    const m = await getAllMerchant(merBody)
    setMer(m.result ? m.result : [])
    setLoad(false)
  }

  const submitCari = async (e) => {
    if (e.key === "Enter") {
      const merBody = {
        max: 10,
        page: 0,
        cari: cari
      }

      setLoad(true)
      const m = await getAllMerchant(merBody)
      let temp = []

      if(m.metadata.total > 0) {
        temp = kota ? m.result.filter(item => item.kota === kota.nama) : m.result
      }

      setMer(temp)
      setLoad(false)
    }
  }

  const MySlider = dynamic(
    () => import('../components/mySlider'),
    { ssr: false }
  )

  const pad = (number, size) => {
    var s = String(number)
    while(s.length < (size || 2)) { s = "0" + s }
    return s
  }

  const rupiah = (angka) => {
  	var rupiah = ''
  	var angkarev = angka.toString().split('').reverse().join('')
  	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.'
  	return 'Rp.'+rupiah.split('',rupiah.length-1).reverse().join('')+',-'
  }

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
            <input defaultValue={(kota) ? kota.nama : ''} onClick={e => openPosisi()} placeholder="Pilih..." type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
          </div>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Body>
              <h6>Pilih Lokasi</h6>

              {
                !prop && !kota ?
                  <div className="overflow-auto" style={{height: '200px'}}>
                    <ListGroup variant="flush">
                      {
                        propinsi.map((item, i) => (
                          <ListGroup.Item key={`lg-${i}`} className="cursor-pointer" onClick={e => choosePropinsi(item)}>{item.nama}</ListGroup.Item>
                        ))
                      }
                    </ListGroup>
                  </div>
                : null
              }

              {
                prop && !kota ?
                  <div className="overflow-auto" style={{height: '200px'}}>
                    <ListGroup variant="flush">
                      {
                        kotaList.map((item, i) => (
                          <ListGroup.Item key={`ko-${i}`} className="cursor-pointer" onClick={e => chooseKota(item)}>{item.nama}</ListGroup.Item>
                        ))
                      }
                    </ListGroup>
                  </div>
                : null
              }

            </Modal.Body>
          </Modal>

        </section>

        <div className="divider"></div>

        <section className="px-3 pt-3">
          <div className="scrolling-wrapper row flex-row flex-nowrap">
            <div onClick={e => chooseKategori("0")} className="col px-0"><span className="badge bg-primary p-2 mx-1 cursor-pointer">Semua</span></div>
            {
              kategori.map((item, i) => (
                <div key={`kat-${i}`} onClick={e => chooseKategori(item.id)} className="col px-0"><span className="badge bg-primary p-2 mx-1 cursor-pointer">{item.name}</span></div>
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
            <input onChange={e => setCari(e.target.value)} defaultValue={cari} onKeyPress={e => submitCari(e)} placeholder="Cari..." type="text" className="form-control" aria-label="Cari..." />
          </div>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Explore
            {
              /*
              <a className="float-end text-decoration-none font-weight-normal cursor-pointer">Lainnya</a>
              */
            }
          </p>

          {
            mer.length === 0 &&
            <div>
              <div className="update text-center m-3">
                <Image
                  src="/img/nodata.png"
                  alt="No data"
                  width={120}
                  height={120}
                />
                <h5 className="mt-3">Oops</h5>
                <p>Data yang Anda cari tidak ada.</p>
              </div>
            </div>
          }

          {
            mer.map((item, i) => (
              <Explore item={item} key={`ex-${i}`} actions={{addFav}} />
            ))
          }
        </section>

        <div className="divider"></div>

        {
          mer.length > 0 ?
          <>
            <section className="bg-white px-3 py-3">
              <p className="h6 mb-3">
                Mobil Terbaru
              </p>

              <MySlider sliders={cars} />

              <div className="row mt-3">
                {
                  cars.map((item, key) => (
                    <article className="col-12 mb-3" key={`caa-${key}`}>
                      <div className="card">
                        <div className="bg-info square-160 responsive rounded" style={{backgroundImage: `url(${item.img})`}}></div>
                        <div className="card-body pb-0">
                          <h6 className="card-title mb-3">{item.name}</h6>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '82%'}} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p className="mt-2">
                            {rupiah(item.price)}
                            <span className="float-end badge bg-dark">
                              <Countdown
                                renderer={({ hours, minutes, seconds, completed }) => {
                                  if (completed) {
                                    return <>Selesai</>;
                                  } else {
                                    return <>{pad(hours)}:{pad(minutes)}:{pad(seconds)}</>;
                                  }
                                }}
                                date={Date.now() + (moment(item.time).format('x') - Date.now())} />
                            </span>
                          </p>
                        </div>
                      </div>
                    </article>
                  ))
                }
              </div>
            </section>
            <div className="divider"></div>
          </>
          : null
        }

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Berita Terbaru
            {
              /*
              <a className="float-end text-decoration-none font-weight-normal cursor-pointer">Lainnya</a>
              */
            }
          </p>

          {
            posts.map((item, i) => (
              <Berita item={item} key={`ber-${i}`} />
            ))
          }
        </section>

        <div className="divider"></div>

        <Footer />

      </div>

  </>
  )
}

export default Home;
