import Link from 'next/link'
import { useState } from 'react'

import { Modal } from 'react-bootstrap'

export default function Footer(props) {

  const [tnc, setTnc] = useState(false)

  const showTnc = (e) => {
    e.preventDefault()
    setTnc(true)
  }

  return (
    <footer className="bg-white p-3">
      <Modal show={tnc} onHide={e => setTnc(false)} centered>
        <Modal.Body className="p-0">
          <div className="ratio ratio-1x1">
            <iframe className="embed-responsive-item" src="https://after-sales.ved.carsworld.id/tnc.html" />
          </div>
        </Modal.Body>
      </Modal>
      <div className="text-center">
        <h6 className="p-3">Carsworld Digital Indonesia</h6>
        <p>Mudah, cepat, dan informatif untuk keperluan Anda mencari bengkel atau salon mobil terdekat serta review terpercaya.</p>

        {' '}<a className="text-decoration-none" href="#">Tentang</a>{' '}
        |
        {' '}<a className="text-decoration-none" onClick={e => showTnc(e)} href="#">Syarat & Ketentuan</a>{' '}
        |
        {' '}<a className="text-decoration-none" href="#">Bantuan</a>{' '}

        <div className="my-2 py-2">
          <Link href="/">
            <i className="bi bi-youtube m-3"></i>
          </Link>
          <Link href="/">
            <i className="bi bi-twitter m-3"></i>
          </Link>
          <Link href="/">
            <i className="bi bi-instagram m-3"></i>
          </Link>
          <Link href="/">
            <i className="bi bi-facebook m-3"></i>
          </Link>
        </div>

        <hr />

        <p>Copyright © 2021 Carsworld. All Right Reserved.</p>
      </div>
    </footer>
  )
}
