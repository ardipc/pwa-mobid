import Link from 'next/link'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

import { useRouter } from 'next/router'
import Berita from '../components/berita'

import {
  getAllKategoriPost,
  getLatestPosts
} from '../configs/api'

function Beritas({ posts, kategori }) {

  const router = useRouter()
  const { asPath } = router

  return (
    <>

      <Heading title={`Berita | Mobid`} />

      <NavBottom isActive={asPath} />

      <div className="pb-5 mobile">

        <section className="text-center pt-4">
          <p style={{color: '#0d6efd', fontWeight: 'bold'}}>B E R I T A</p>
        </section>

        <section className="px-3 pt-3 pb-2">
          <div className="scrolling-wrapper row flex-row flex-nowrap">
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Semua</span></div>
            {
              kategori.map((item, i) => (
                <div key={`ka-${i}`} className="col px-0"><span className="badge bg-primary p-2 mx-1">{item.name}</span></div>
              ))
            }
          </div>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Terbaru
            <a className="float-end text-decoration-none font-weight-normal">Lainnya</a>
          </p>

          {
            posts.map((item, i) => (
              <Berita item={item} key={`ber-${i}`} />
            ))
          }

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

        </section>

        <div className="divider"></div>

        <Footer />

      </div>

  </>
  )
}

export async function getStaticProps({params}) {

  const kategori      = await getAllKategoriPost()
  const posts         = await getLatestPosts()

  return {
    props: { kategori, posts }
  }
}

export default Beritas;
