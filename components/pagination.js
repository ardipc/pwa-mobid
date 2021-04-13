
function Pagination({ metadata }) {
  const { total, count, page, max } = metadata
  const totPage = Math.ceil(total/max)

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {
          for(let i=0; i<totPage; i++) {
            return (
              <li key={`pag-${i}`} className="page-item"><a className="page-link" href="#">{i+1}</a></li>
            )
          }
        }
      </ul>
    </nav>
  )
}

export default Pagination;
