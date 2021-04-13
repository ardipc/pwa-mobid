import Link from 'next/link'
import Image from 'next/image'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'
import Explore from '../components/explore'

import Router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import withSession from '../lib/session'

import {
  getMyFavorit,
  delBookmark
} from '../configs/api'

export const getServerSideProps = withSession(async ({req, res}) => {

  const user = req.session.get('user')

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { user }
  }
})

export default function Favorit({ user, posts }) {

  const router = useRouter()
  const { asPath } = router

  const [info, setInfo] = useState({})
  const [load, setLoad] = useState(true)
  const [merchant, setMerchant] = useState([])

  const fetchMerchant = async (token) => {
    const rows = await getMyFavorit(token)
    setMerchant(rows)
  }

  useEffect(async () => {
    fetchMerchant(user.metadata)
  }, [])

  const delFav = async (id) => {
    const req = await delBookmark(user.metadata, id)
    if(req.success) {
      const rows = await getMyFavorit(user.metadata)
      setMerchant(rows)
      toast.info(req.message)
    }
  }

  return (
    <>

      <Heading title={`Favorit | Mobid`} />

      <NavBottom isActive={asPath} />

      <div className="pb-5 mobile">

        <section className="text-center pt-4">
          <p style={{color: '#0d6efd', fontWeight: 'bold'}}>F A V O R I T</p>
        </section>

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
            merchant.map((item, i) => (
              <Explore item={item} key={`exp-${i}`} actions={{delFav}} dari="favorit" />
            ))
          }
        </section>

        <div className="divider"></div>

        <Footer />

      </div>

  </>
  )
}
