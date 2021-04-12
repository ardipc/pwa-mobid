import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../components/heading'
import Footer from '../../components/footer'

import { useState } from 'react'
import moment from 'moment-timezone'

import {
  getLatestPosts,
  getOnePosts,
  getAllTags
} from '../../configs/api'

function Baca({ detail, tags }) {

  return (
    <>

      <Heading title={`Baca | Mobid`} />

      <div className="mobile">

        <section className="bg-white">

          {
            detail ?
              <article>
                <div className="cover">
                  <Link href="/">
                    <i style={{color: 'white'}} className="bi bi-arrow-left back-top cursor-pointer"></i>
                  </Link>
                  <i style={{color: 'white'}} className="bi bi-heart favorit-top cursor-pointer"></i>
                  <i style={{color: 'white'}} className="bi bi-share share-top cursor-pointer"></i>

                  <div className={`bg-info responsive`} style={{width: '100%', height: '300px', marginTop: '-24px', backgroundImage: `url('${detail.jetpack_featured_media_url}')`}}></div>

                </div>

                <div className="p-3">
                  <h2>
                     {detail.title.rendered}
                  </h2>

                  <div className="rating">
                    <p className="mt-2">
                      <span>{moment(detail.date_gmt).format('LLL')}</span>
                    </p>
                  </div>

                  <div className="mb-2 mt-3">
                    <div dangerouslySetInnerHTML={{ __html: detail.content.rendered }} />
                  </div>

                  <div className="tags mb-4">
                    {
                      tags.map((item, key) => (
                        <Link key={`tt-${key}`} href={`/tags?id=${item.term_id}`}><span className="badge bg-secondary p-2 m-1">{item.name}</span></Link>
                      ))
                    }
                  </div>

                  <div className="action row text-center">
                    <div className="col">
                      <div className="d-grid gap-2">
                        <button className="btn btn-outline-primary">
                          <i className="bi bi-heart"></i> Suka
                        </button>
                      </div>
                    </div>

                    <div className="col">
                      <div className="d-grid gap-2">
                        <a href={`whatsapp://send?text=${detail.link}`} className="btn btn-outline-primary">
                          <i className="bi bi-share"></i> Share
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            : null
          }

        </section>

        <div className="divider"></div>

        <Footer />

      </div>

  </>
  )
}

export async function getStaticPaths() {

  const res = await getLatestPosts()

  const paths = res.map((row) => ({
    params: { id: row.id.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}) {

  const tags = await getAllTags(params.id)

  const res = await getOnePosts(params.id)
  const detail = res;

  if(!detail) {
    return {
      norFound: true
    }
  }

  return {
    props: {
      detail,
      tags
    }
  }
}

export default Baca;
