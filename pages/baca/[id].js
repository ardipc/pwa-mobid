import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import Heading from '../../components/heading'
import Footer from '../../components/footer'

import Berita from '../../components/berita'

import { useState } from 'react'
import moment from 'moment-timezone'

import {
  getLatestPosts,
  getOnePosts,
  getAllTags,
  getKategoriById,
  getPostTerkait
} from '../../configs/api'

export async function getServerSideProps({params}) {

  const detail    = await getOnePosts(params.id)
  const tags      = await getAllTags(params.id)
  const catIds    = await getKategoriById(detail.categories)
  const otherPost = await getPostTerkait(detail.categories[0])

  if(!detail) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      detail,
      tags,
      categories: catIds,
      otherPost
    }
  }
}

function Baca({ detail, tags, categories, otherPost }) {

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

                  <div className={`bg-info responsive`} style={{width: '100%', height: '300px', marginTop: '-24px', backgroundImage: `url('${detail.jetpack_featured_media_url}')`}}></div>

                </div>

                <div className="p-3">
                  <h2>
                     {detail.title.rendered}
                  </h2>

                  <div className="rating">
                    <p className="mt-2">
                      {categories.map((item,key) => (
                        <span key={`catt-${key}`} className="badge bg-primary mx-1">{item}</span>
                      ))}
                      <span>
                        {'  '}{moment(detail.date_gmt).format('LLL')}
                      </span>
                    </p>
                  </div>

                  <div className="mb-2 mt-3">
                    <div dangerouslySetInnerHTML={{ __html: detail.content.rendered }} />
                  </div>

                  <div className="tags mb-4">
                    {
                      tags.map((item, key) => (
                        <Link key={`tt-${key}`} href={`/tags/${item.term_id}`}><span className="badge bg-secondary p-2 m-1 cursor-pointer">{item.name}</span></Link>
                      ))
                    }
                  </div>

                  <div className="action row text-center">

                    {
                      /*
                      <div className="col">
                        <div className="d-grid gap-2">
                          <button className="btn btn-outline-primary">
                            <i className="bi bi-heart"></i> Suka
                          </button>
                        </div>
                      </div>
                      */
                    }

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

        <section className="bg-white p-3">
          <p className="h6 mb-3">
            Berita Terkait
          </p>

          {
            otherPost.map((item, i) => (
              <Berita item={item} key={`ber-${i}`} />
            ))
          }
        </section>

        <div className="divider"></div>

        <Footer />

      </div>

  </>
  )
}

export default Baca;
