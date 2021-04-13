import Link from 'next/link'
import Head from 'next/head'

import { Modal, Button, Spinner } from 'react-bootstrap'

import { useState, useEffect } from 'react'

import { API_GET_PROFILE } from '../configs/rest'
import axios from 'axios'

import Router, { useRouter } from 'next/router'

import Heading from '../components/heading'
import Footer from '../components/footer'
import NavBottom from '../components/nav-bottom'

import fetchJson from '../lib/fetchJson'
import withSession from '../lib/session'
import useUser from '../lib/useUser'

import { getMyFavorit } from '../configs/api'

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

  const favorit = await getMyFavorit(user.metadata)

  return {
    props: { user, favorit }
  }
})

export default function Akun({ user, favorit }) {

  const { mutateUser } = useUser({ redirectTo: '/login' })

  const router = useRouter()
  const { asPath } = router

  const [info, setInfo] = useState({});
  const [load, setLoad] = useState(true)

  const fetchUser = (token) => {
    const configs = {
      headers: {
        'X-ACCESS-TOKEN': token
      }
    };

    axios.get(API_GET_PROFILE, configs).then(res => {
      if(res.status === 200) {
        const { result } = res.data
        setInfo(result);
        setLoad(false);
      }
    });
  }

  useEffect(() => {
    fetchUser(user.metadata)
  }, [])

  const btnLogout = async (e) => {
    await mutateUser(fetchJson('/api/logout'))
  }

  const handleClose = () => setLoad(false);

  return (
    <>

      <Heading title={`Profil | Mobid`} />

      <NavBottom isActive={asPath} />

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
                  load ?
                    <div style={{width: '72px', height: '72px'}} className="text-center">
                      <Spinner style={{position: 'relative', top: '30%'}} animation="grow" />
                    </div>
                  :
                    <img alt={info.fullname} src={info.image_url} className="twPc-avatarImg" />
                }
          		</a>

          		<div className="twPc-divUser">
          			<div className="twPc-divName">
          				<a className="text-decoration-none" href="#">{info.fullname}</a>
          			</div>
          			<span>
          				<a className="text-decoration-none fc-success" href="#"><span>{info.phone}</span></a>
          			</span>
          		</div>

          		<div className="twPc-divStats text-center mb-1">
          			<ul className="twPc-Arrange">
          				<li className="twPc-ArrangeSizeFit">
          					<a className="text-decoration-none" href="#" title="9.840 Tweet">
          						<span className="twPc-StatLabel twPc-block">Favorit</span>
          						<span className="twPc-StatValue">{favorit.length}</span>
          					</a>
          				</li>
          				<li className="twPc-ArrangeSizeFit">
          					<a className="text-decoration-none" href="#" title="885 Following">
          						<span className="twPc-StatLabel twPc-block">Verified</span>
          						<span className="twPc-StatValue">
                        <i className="bi bi-check" style={{color: 'green'}}></i>
                      </span>
          					</a>
          				</li>
          				<li className="twPc-ArrangeSizeFit">
          					<a className="text-decoration-none" href="#" title="1.810 Followers">
          						<span className="twPc-StatLabel twPc-block">Online</span>
          						<span className="twPc-StatValue">
                        <i className="bi bi-check" style={{color: 'green'}}></i>
                      </span>
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
                <input defaultValue={info.fullname} type="text" className="form-control" placeholder="Nama" aria-label="Nama" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Nama kamu siapa nih.</div>
            </div>
            <div className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                <input defaultValue={info.phone} type="number" className="form-control" placeholder="Telepon" aria-label="Telepon" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Nomor telepon kamu.</div>
            </div>
            <div className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                <input defaultValue={info.email} type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Alamat email kamu.</div>
            </div>
            <div className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text"><i className="bi bi-geo-alt"></i></span>
                <input defaultValue={info.address} type="text" className="form-control" placeholder="Alamat" aria-label="Alamat" aria-describedby="basic-addon1" />
              </div>
              <div className="form-text">Kamu tinggal dimana.</div>
            </div>

            <div className="d-grid gap-2 mb-2">
              <button type="button" className="btn btn-outline-primary">Simpan Akun</button>
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
              <button type="button" className="btn btn-outline-primary">Simpan Password</button>
            </div>
          </form>

        </section>

        <div className="divider"></div>

        <section className="bg-white p-2">
          <ul className="list-group list-group-flush">
            <li className="list-group-item p-3 cursor-pointer">
              <i className="bi bi-question-square"></i> Bantuan
            </li>
            <li className="list-group-item p-3 cursor-pointer">
              <i className="bi bi-building"></i> Tentang Kami
            </li>
            <li className="list-group-item p-3 cursor-pointer">
              <i className="bi bi-shield-check"></i> Syarat dan Ketentuan
            </li>
            <li className="list-group-item p-3 cursor-pointer">
              <i className="bi bi-chat-dots"></i> Tanya Jawab
            </li>
            <li onClick={btnLogout} className="list-group-item p-3 cursor-pointer">
              <i className="bi bi-box-arrow-right"></i> Keluar
            </li>
          </ul>
        </section>

        <div className="divider"></div>

        <Footer />

      </div>

  </>
  )
}
