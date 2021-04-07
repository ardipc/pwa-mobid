import Link from 'next/link'
import Image from 'next/image'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

export default function Cari() {

  return (
    <>

      <Heading title={`Oops | Mobid`} />

      <NavBottom isActive="/404" />

      <div className="pb-5 mobile">

        <section className="text-center pt-4">
          <p style={{color: '#0d6efd', fontWeight: 'bold'}}>UNDER CONSTRUCTION</p>
        </section>

        <section className="bg-white p-3">

          <div className="update text-center m-3">
            <Image
              src="/img/nodata.png"
              alt="No data"
              width={120}
              height={120}
            />

          <h5 className="mt-3">Oops</h5>
            <p>Sabar yaa, fitur ini sedang dikerjakan.</p>

            <div className="d-grid gap-2">
              <Link href="/">
                <button className="btn btn-block btn-outline-primary">Beranda</button>
              </Link>
            </div>
          </div>

        </section>

        <div className="divider"></div>

        <Footer />

      </div>

  </>
  )
}
