import Link from 'next/link'

function Explore({ item, actions, dari }) {

  const addFav = async (id) => {
    actions.addFav(id)
  }

  const delFav = async (id) => {
    actions.delFav(id)
  }

  return (
    <article className="row flex-row my-4">
      <div className="col-4">
        <div className="bg-info square-120 responsive rounded" style={{backgroundImage: `url(${item.imageUrl})`}}></div>
      </div>
      <div className="col-8 pl-4">
        <i onClick={e => dari ? delFav(item.id) : addFav(item.id)} className={`bi bi-heart${dari ? '-fill' : ''} float-end cursor-pointer`} style={{color: '#ff6961'}}></i>
        <Link href={`/details/${item.id}`}>
          <h6 className="card-title cursor-pointer">{item.name}</h6>
        </Link>
        <p className="card-text two-line mb-1">{item.alamatLengkap}</p>
        <div className="rating">
          {
            [1,2,3,4,5].map((row, key) => (
              <i key={`rat-${key}`} style={{color: '#ffc107'}} className={`mx-1 bi bi-star${key < Math.floor(item.rating) ? '-fill' : ''}`}></i>
            ))
          }

          {' '}<span>({item.rating})</span>
        </div>
      </div>
    </article>
  )
}

export default Explore;
