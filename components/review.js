import Link from 'next/link'

function Review() {
  return (
    <article className="col-11">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content make up the bulk of the card's.</p>

          <div className="row my-2">
            <div className="col-6 text-center">
              <a href="#" className="text-decoration-none card-link col-6">Suka</a>
            </div>
            <div className="col-6 text-center">
              <a href="#" className="text-decoration-none card-link col-6">Bagikan</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Review;
