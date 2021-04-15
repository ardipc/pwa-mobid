import Link from 'next/link'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

import Explore from '../components/explore'

import { Modal, ListGroup } from 'react-bootstrap'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { toast } from 'react-toastify'

import useUser from '../lib/useUser'

import {
  getAllMerchant,
  getAllKonsultasi,
  addBookmark
} from '../configs/api'

export async function getStaticProps() {
  const konsultasi    = await getAllKonsultasi()

  const merBody = {
    page: 0,
    max: 3
  }
  const merchant      = await getAllMerchant(merBody)

  return {
    props: { konsultasi, merchant: merchant.result }
  }
}

function Konsultasi({ konsultasi, merchant }) {

  const { user } = useUser()

  const [indikasi, setIndikasi] = useState([])

  const [mer, setMer] = useState(merchant)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cek, setCek] = useState({});

  const router = useRouter()
  const { asPath } = router

  const openIndikasi = async (item) => {
    setShow(true)
    setCek(item)
    const req = await getAllKonsultasi(item.id)
    setIndikasi(req)
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

  const fetchKonsultasiDetail = async (id) => {

  }

  return (
    <>

      <Heading title={`Konsultasi | Mobid`} />

      <NavBottom isActive={asPath} />

      <div className="pb-5 mobile">

        <section className="text-center pt-4">
          <p style={{color: '#0d6efd', fontWeight: 'bold'}}>D I A G N O S A</p>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">Cek Mobil Kamu</p>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Body>
              <h6 className="mb-3">Indikasi Kerusakan {cek.nama}</h6>
              <div className="row">
                <div className="overflow-auto" style={{height: '200px'}}>
                  {
                    indikasi.map((item, i) => (
                      <div key={`bt-${i}`} className="col-12 m-1">
                        <Link href={item.id_artikel.split(':')[0] === 'tag' ? `/tags/${item.id_artikel.split(':')[1]}` : `/baca/${item.id_artikel}`}>
                          <button className="btn btn-outline-primary">{item.nama}</button>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            </Modal.Body>
          </Modal>

          <div className="row flex-row text-center">
            {
              konsultasi.map((item, i) => (
                <div key={`kons-${i}`} onClick={e => openIndikasi(item)} className="col-3 my-2 cursor-pointer">
                  <img src={item.icon} className="square-50" />
                  <span className="small d-block mt-2">{item.nama}</span>
                </div>
              ))
            }
          </div>

        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Rekomendasi
          </p>

          {
            mer.map((item, i) => (
              <Explore item={item} key={`ex-${i}`} actions={{addFav}} />
            ))
          }

        </section>

        <div className="divider"></div>

        <Footer />

      </div>

  </>
  )
}

export default Konsultasi;
