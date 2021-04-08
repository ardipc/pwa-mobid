import Link from 'next/link'
import moment from 'moment-timezone'

function Berita({ item }) {
  return (
    <article className="row flex-row my-3">
      <div className="col-4">
        <div className="bg-info news-img responsive rounded" style={{backgroundImage: `url(${item.jetpack_featured_media_url})`}}></div>
      </div>
      <div className="col-8">
        <Link href={`/baca/${item.id}`}>
          <h6 className="card-title two-line cursor-pointer mt-1">{item.title.rendered}</h6>
        </Link>
        <p>{moment(item.date_gmt).format('LLL')}</p>
      </div>
    </article>
  )
}

export default Berita;
