import Link from 'next/link'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

import Explore from '../components/explore'

import { Modal, ListGroup } from 'react-bootstrap'

import { useRouter } from 'next/router'
import { useState } from 'react'

import {
  getAllMerchant,
  getAllKonsultasi
} from '../configs/api'

function Konsultasi({ konsultasi, merchant }) {

  const indikasies = ["Mesin mati total", "Mesin bunyi kretek-kretek", "Mesin keluar asap", "Mesin keluar oli"]

  const [mer, setMer] = useState(merchant.slice(0,2))

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cek, setCek] = useState({});

  const router = useRouter()
  const { asPath } = router

  const openIndikasi = (item) => {
    setShow(true)
    setCek(item)
  }

  return (
    <>

      <Heading title={`Konsultasi | Mobid`} />

      <NavBottom isActive={asPath} />

      <div className="pb-5 mobile">

        <section className="text-center pt-4">
          <p style={{color: '#0d6efd', fontWeight: 'bold'}}>K O N S U L T A S I</p>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">Cek Mobil Kamu</p>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Body>
              <h6 className="mb-3">Indikasi Kerusakan {cek.nama}</h6>
              <div className="row">
                {
                  indikasies.map((item, i) => (
                    <div key={`bt-${i}`} className="col-12 m-1">
                      <Link href='/baca/9837'>
                        <button className="btn btn-outline-dark">{item}</button>
                      </Link>
                    </div>
                  ))
                }
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
            <a className="float-end text-decoration-none font-weight-normal">Lainnya</a>
          </p>

          {
            mer.map((item, i) => (
              <Explore item={item} key={`ex-${i}`} />
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
  const konsultasi    = await getAllKonsultasi()
  const merchant      = await getAllMerchant()

  return {
    props: { konsultasi, merchant }
  }
}


export default Konsultasi;
