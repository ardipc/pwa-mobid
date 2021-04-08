import Link from 'next/link'

function Explore({ item }) {
  return (
    <article className="row flex-row my-3">
      <div className="col-4">
        <div className="bg-info square-120 responsive rounded" style={{backgroundImage: `url(${item.imageUrl})`}}></div>
      </div>
      <div className="col-8">
        <Link href={`/details/${item.id}`}>
          <h6 className="card-title cursor-pointer mt-1">{item.name}</h6>
        </Link>
        <p className="card-text two-line mb-1">{item.alamatLengkap}</p>
        <div className="rating">
          {
            [1,2,3,4,5].map((row, key) => (
              <i key={`rat-${key}`} style={{color: '#ffc107'}} className={`mx-1 bi bi-star${key < Math.floor(item.rating) ? '-fill' : ''}`}></i>
            ))
          }
        </div>
      </div>
    </article>
  )
}

export default Explore;
