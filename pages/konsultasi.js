import Link from 'next/link'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

import Explore from '../components/explore'

import { useRouter } from 'next/router'
import { useState } from 'react'

import {
  getAllMerchant,
  getAllKonsultasi
} from '../configs/api'

function Konsultasi({ konsultasi, merchant }) {

  const [mer, setMer] = useState(merchant.slice(0,2))

  const router = useRouter()
  const { asPath } = router

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

          <div className="row flex-row text-center">
            {
              konsultasi.map((item, i) => (
                <div className="col-3 my-2">
                  <Link href="/">
                    <a className="text-center text-decoration-none">
                      <img src={item.icon} className="square-50" />
                      <span className="small d-block mt-2">{item.nama}</span>
                    </a>
                  </Link>
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
