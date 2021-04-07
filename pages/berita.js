import Link from 'next/link'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

import { useRouter } from 'next/router'

export default function Berita() {

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
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Bengkel Mobil</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Cuci Mobil</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Pom Bensin</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Cutting</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Dealer</span></div>
            <div className="col px-0"><span className="badge bg-primary p-2 mx-1">Velg</span></div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Hasil pencarian
            <a className="float-end text-decoration-none font-weight-normal">Lainnya</a>
          </p>

          <div className="row mb-3">
            <article className="col-12 mb-3">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <Link href="/baca"><h6 className="card-title mb-3">Perhatikan Waktu Ideal untuk Servis AC Mobil</h6></Link>
                  <p className="mt-2">
                    <span className="badge bg-primary p-2 mx-1">Tips</span>
                    <span className="float-end">12 Maret 2021 08:15 AM</span>
                  </p>
                </div>
              </div>
            </article>

            <article className="col-12 mb-3">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <Link href="/baca"><h6 className="card-title mb-3">Ada Waktu Ideal, Berapa Sebenarnya Kilometer Yang Pas Untuk Service AC?</h6></Link>
                  <p className="mt-2">
                    <span className="badge bg-primary p-2 mx-1">Service</span>
                    <span className="float-end">12 Maret 2021 08:15 AM</span>
                  </p>
                </div>
              </div>
            </article>

            <article className="col-12 mb-3">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <Link href="/baca"><h6 className="card-title mb-3">Ada Waktu Ideal, Berapa Sebenarnya Kilometer Yang Pas Untuk Service AC?</h6></Link>
                  <p className="mt-2">
                    <span className="badge bg-primary p-2 mx-1">Service</span>
                    <span className="float-end">12 Maret 2021 08:15 AM</span>
                  </p>
                </div>
              </div>
            </article>

          </div>

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

        <Footer />

      </div>

  </>
  )
}
