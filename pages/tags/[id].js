import Link from 'next/link'
import Image from 'next/image'

import Heading from '../../components/heading'
import Footer from '../../components/footer'
import NavBottom from '../../components/nav-bottom'

import { Spinner } from 'react-bootstrap'

import { useRouter } from 'next/router'
import Berita from '../../components/berita'

import withSession from '../../lib/session'
import useUser from '../../lib/useUser'

import { useState, useEffect } from 'react'

import {
  getTags,
  getPostByTags
} from '../../configs/api'

export const getServerSideProps = async ({params}) => {
  const posts = await getPostByTags(params.id)

  return {
    props: { posts }
  }
}

function Tags({ posts }) {

  const router = useRouter()
  const { asPath } = router

  const [load, setLoad] = useState(false)
  const [news, setNews] = useState(posts)

  return (
    <>

      <Heading title={`Tags | Mobid`} />

      <NavBottom isActive={asPath} />

      <div className="pb-5 mobile">

        <section className="text-center pt-4">
          <p style={{color: '#0d6efd', fontWeight: 'bold'}}>T A G S</p>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Berita terkait
            {
              /*
              <a className="float-end text-decoration-none font-weight-normal">Lainnya</a>
              */
            }
          </p>

          {
            load === true ?
              <div className="text-center">
                <Spinner animation="grow" />
              </div>
            : null
          }

          {
            load === false && news.length === 0 ?
              <div>
                <div className="update text-center m-3">
                  <Image
                    src="/img/nodata.png"
                    alt="No data"
                    width={120}
                    height={120}
                  />
                  <h5 className="mt-3">Oops</h5>
                  <p>Belum ada berita nih.</p>
                </div>
              </div>
            : null
          }

          {
            load === false && news.map((item, i) => (
              <Berita item={item} key={`ber-${i}`} />
            ))
          }

          {
            /*
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li key={0} className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li key={1} className="page-item"><a className="page-link" href="#">1</a></li>
                <li key={2} className="page-item"><a className="page-link" href="#">2</a></li>
                <li key={3} className="page-item"><a className="page-link" href="#">3</a></li>
                <li key={4} className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            */
          }

        </section>

        <div className="divider"></div>

        <Footer />

      </div>

  </>
  )
}

export default Tags;
