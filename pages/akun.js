import Link from 'next/link'
import Head from 'next/head'

import { Modal, Button, Spinner } from 'react-bootstrap'

import { useState, useEffect } from 'react'
import axios from 'axios'

import Router from 'next/router'

export default function Akun() {

  const [user, setUser] = useState({});
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const session = localStorage.getItem('session');
    if(session) {
      const author = JSON.parse(session).token;
      const configs = {
        headers: {
          Authorization: author
        }
      };

      axios.get(`https://api.github.com/orgs/axios`, configs).then(res => {
        if(res.status === 200) {
          setUser(res.data);
          setLoad(false);
        }
      });
    }
    else {
      Router.push('/login');
    }

  })

  const btnLogout = (e) => {
    localStorage.removeItem('session');
    Router.push('/');
  }

  const handleClose = () => setLoad(false);

  return (
    <>

      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />

        <link href="/_manifest.json" rel="manifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/app/icons/icon-192x192.png" />

        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        <script src="/js/app.js"></script>
      </Head>

      <nav className="p-0 mobile navbar navbar-dark bg-primary navbar-expand fixed-bottom">
        <ul className="navbar-nav nav-justified w-100">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link text-center">
                <i className="bi bi-house" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Beranda</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/konsultasi">
              <a className="nav-link text-center">
                <i className="bi bi-gear" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Konsultasi</span>
              </a>
          </Link>
          </li>
          <li className="nav-item">
            <Link href="/berita">
              <a className="nav-link text-center">
                <i className="bi bi-newspaper" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Berita</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/favorit">
              <a className="nav-link text-center">
                <i className="bi bi-heart" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Favorit</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/akun">
              <a className="nav-link text-center active">
                <i className="bi bi-person" style={{fontSize: '1.2em'}}></i>
                <span className="small d-block">Profil</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="pb-5 mobile">

        <section className="text-center pt-4">
          <p style={{color: '#0d6efd', fontWeight: 'bold'}}>P R O F I L</p>
        </section>

        <section className="bg-white p-3">

          <div className="twPc-div">
            <a className="twPc-bg twPc-block"></a>

          	<div>
          		<div className="twPc-button">
                <a href="#" className="btn btn-sm btn-outline-light">
                  <i className="bi bi-pencil-square"></i>{'  '}
                  Edit
                </a>
          		</div>

          		<a title="Mert S. Kaplan" href="#" className="twPc-avatarLink">
                {
                  load ? <div style={{width: '72px', height: '72px'}} className="text-center"><Spinner style={{position: 'relative', top: '30%'}} animation="grow" /></div> : <img alt="Ahmad Ardiansyah" src={user.avatar_url} className="twPc-avatarImg" />
                }
          		</a>

          		<div className="twPc-divUser">
          			<div className="twPc-divName">
          				<a className="text-decoration-none" href="#">Ahmad Ardiansyah</a>
          			</div>
          			<span>
          				<a className="text-decoration-none fc-success" href="#">@<span>ardipc</span></a>
          			</span>
          		</div>

          		<div className="twPc-divStats text-center mb-1">
          			<ul className="twPc-Arrange">
          				<li className="twPc-ArrangeSizeFit">
          					<a className="text-decoration-none" href="https://twitter.com/mertskaplan" title="9.840 Tweet">
          						<span className="twPc-StatLabel twPc-block">Tweets</span>
          						<span className="twPc-StatValue">9.840</span>
          					</a>
          				</li>
          				<li className="twPc-ArrangeSizeFit">
          					<a className="text-decoration-none" href="https://twitter.com/mertskaplan/following" title="885 Following">
          						<span className="twPc-StatLabel twPc-block">Following</span>
          						<span className="twPc-StatValue">885</span>
          					</a>
          				</li>
          				<li className="twPc-ArrangeSizeFit">
          					<a className="text-decoration-none" href="https://twitter.com/mertskaplan/followers" title="1.810 Followers">
          						<span className="twPc-StatLabel twPc-block">Followers</span>
          						<span className="twPc-StatValue">1.810</span>
          					</a>
          				</li>
          			</ul>
          		</div>
          	</div>
          </div>

        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h5 mb-3">Akun</p>

          <form>
            <div className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text"><i className="bi bi-person"></i></span>
                <input type="text" className="form-control" placeholder="Nama" aria-label="Nama" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Nama kamu siapa nih.</div>
            </div>
            <div className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Alamat email kamu.</div>
            </div>
            <div className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text"><i className="bi bi-geo-alt"></i></span>
                <input type="text" className="form-control" placeholder="Alamat" aria-label="Alamat" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Kamu tinggal dimana.</div>
            </div>
            <div className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                <input type="number" className="form-control" placeholder="Telepon" aria-label="Telepon" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Nomor telepon kamu.</div>
            </div>

            <div className="d-grid gap-2 mb-2">
              <button type="button" className="btn btn-outline-primary btn-sm">Simpan Akun</button>
            </div>
          </form>

        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h5 mb-3">Kemanan</p>

          <form>
            <div className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text"><i className="bi bi-key"></i></span>
                <input type="password" className="form-control" placeholder="Password lama" aria-label="Password lama" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Password lama kamu</div>
            </div>
            <div className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text"><i className="bi bi-shield-check"></i></span>
                <input type="password" className="form-control" placeholder="Password baru" aria-label="Password baru" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Password baru kamu</div>
            </div>
            <div className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text"><i className="bi bi-shield-lock"></i></span>
                <input type="password" className="form-control" placeholder="Konfirmasi password" aria-label="Konfirmasi password" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Konfirmasi password baru</div>
            </div>

            <div className="d-grid gap-2 mb-2">
              <button type="button" className="btn btn-outline-primary btn-sm">Simpan Password</button>
            </div>
          </form>

        </section>

        <div className="divider"></div>

        <section className="bg-white p-2">
          <ul className="list-group list-group-flush">
            <li className="list-group-item p-3">
              <i className="bi bi-question-square"></i> Bantuan
            </li>
            <li className="list-group-item p-3">
              <i className="bi bi-building"></i> Tentang Kami
            </li>
            <li className="list-group-item p-3">
              <i className="bi bi-shield-check"></i> Syarat dan Ketentuan
            </li>
            <li className="list-group-item p-3">
              <i className="bi bi-chat-dots"></i> Tanya Jawab
            </li>
            <li onClick={btnLogout} className="list-group-item p-3">
              <i className="bi bi-box-arrow-right"></i> Keluar
            </li>
          </ul>
        </section>

        <div className="divider"></div>

        <footer className="bg-white p-3">
          <div className="text-center">
            <h6 className="p-3">PT Carsworld Digital Indonesia</h6>
            <p>Mudah, cepat, dan informatif untuk keperluan Anda mencari bengkel atau salon mobil terdekat serta review terpercaya.</p>

            {' '}<a className="text-decoration-none" href="#">Tentang</a>{' '}
            |
            {' '}<a className="text-decoration-none" href="#">Syarat & Ketentuan</a>{' '}
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

      </div>

  </>
  )
}
