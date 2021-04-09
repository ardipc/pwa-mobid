import Link from 'next/link'
import Image from 'next/image'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

import { Modal, ListGroup } from 'react-bootstrap'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Berita from '../components/berita'
import Explore from '../components/explore'

import {
  getAllKategori,
  getAllMerchant,
  getLatestPosts,
  getPropinsi,
  getKota
} from '../configs/api'

function Home({ kategori, merchant, posts, propinsi }) {

  const [kotaList, setKotaList] = useState([]);

  const [show, setShow] = useState(false);
  const [prop, setProp] = useState('');
  const [kota, setKota] = useState('');

  const [mer, setMer] = useState(merchant);

  useEffect(() => {
    setProp(localStorage.getItem('propinsi') ? JSON.parse(localStorage.getItem('propinsi')) : '')
    setKota(localStorage.getItem('kota') ? JSON.parse(localStorage.getItem('kota')) : '')

    if(localStorage.getItem('kota')) {
      const parse = JSON.parse(localStorage.getItem('kota'))
      const filter = merchant.filter(row => row.kota === parse.nama)
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
    setMer(merchant)
    setShow(true)
  }

  const choosePropinsi = async (item) => {
    console.log(item)

    setProp(item)
    localStorage.setItem('propinsi', JSON.stringify(item))

    const list = await getKota(item.kode)
    setKotaList(list)
  }

  const chooseKota = async (item) => {
    console.log(item)

    setKota(item)
    localStorage.setItem('kota', JSON.stringify(item))

    const filter = merchant.filter(row => row.kota === item.nama)
    setMer(filter)

    setShow(false)
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
                          <ListGroup.Item className="cursor-pointer" onClick={e => choosePropinsi(item)}>{item.nama}</ListGroup.Item>
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
                          <ListGroup.Item className="cursor-pointer" onClick={e => chooseKota(item)}>{item.nama}</ListGroup.Item>
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
          <p className="h6 mb-3">
            Explore
            <a className="float-end text-decoration-none font-weight-normal cursor-pointer">Lainnya</a>
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
              <Explore item={item} key={`ex-${i}`} />
            ))
          }
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Berita Terbaru
            <a className="float-end text-decoration-none font-weight-normal cursor-pointer">Lainnya</a>
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

export async function getStaticProps() {
  const kategori      = await getAllKategori()
  const merchant      = await getAllMerchant()
  const posts         = await getLatestPosts()

  const propinsi      = await getPropinsi()
  return {
    props: { kategori, merchant, posts, propinsi },
  }
}

export default Home;
