import Link from 'next/link'
import { useRouter } from 'next/router'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

export const getServerSideProps = async ({req, res}) => {

  const questions = [
    {
      id: 1,
      ask: 'Bagaimana cara daftar akun atau login di aplikasi Carsworld?',
      answer: '<p>Dengan melakukan login maka Kamu juga akan secara otomatis terdaftar dan memiliki akun Carsworld, yaitu dengan cara masuk dengan menggunakan nomor handphone, kemudian tinggal masukkan kode OTP yang dikirimkan ke nomor handphone Kamu.</p>'
    },
    {
      id: 2,
      ask: 'Bagaimana cara booking servis melalui aplikasi Carsworld?',
      answer: "<ol><li>Pilih area atau lokasi bengkel yang Kamu inginkan</li><li>Pilih atau masukkan data kendaraan Kamu</li><li>Pilih bengkel yang tersedia sesuai dengan lokasi yang Kamu pilih</li><li>Masukan jadwal rencana kamu servis</li><li>Memilih jenis dan paket servis jika tersedia</li><li>Klik button “Pesan”</li></ol>"
    },
    {
      id: 3,
      ask: 'Kenapa saya harus melengkapi data diri dan data kendaraan saya sebelum booking servis?',
      answer: "<p>Hal ini dimaksudkan supaya petugas bengkel dapat mengidentifikasi bahwa itu mobil Kamu dan mereka dapat melakukan pencatatan dan analisa dengan akurat.</p>"
    },
    {
      id: 4,
      ask: 'Jenis servis apa saja yang bisa di booking melalui aplikasi Carsworld?',
      answer: "<p>Mesin, Transmisi & Kopling, AC, Rem, Suspensi & Steering, Ban, Oli , Baterai, Umum.</p>"
    }
  ]

  return {
    props: { questions }
  }
}

export default function Faq({ questions }) {
  const router = useRouter()
  const { asPath } = router

  return (
    <>
      <Heading title={`Profil | Mobid`} />

      <NavBottom isActive={asPath} />

      <div className="pb-5 mobile">

        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid text-center">
            <span className="navbar-brand mb-0 h1">
              <Link href="/akun"><i className="bi bi-arrow-left cursor-pointer"></i></Link>{' '}
              Tanya Jawab
            </span>
          </div>
        </nav>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <div className="accordion accordion-flush" id="accordionFlush">
            {
              questions.map((item, key) => (
                <div className="accordion-item" key={`accor-${key}`}>
                  <h2 className="accordion-header" id={`flush-heading${key}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${key}`} aria-expanded="false" aria-controls={`flush-collapse${key}`}>
                      {item.ask}
                    </button>
                  </h2>
                  <div id={`flush-collapse${key}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${key}`} data-bs-parent="#accordionFlush">
                    <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        <div className="divider"></div>

        <Footer />

      </div>
    </>
  )
}
