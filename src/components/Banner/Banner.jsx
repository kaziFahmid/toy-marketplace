import React from 'react'

export default function Banner() {
  return (
    <div  id="carouselExampleControls" className="carousel slide mt-2" data-bs-ride="carousel">
    <div className="carousel-inner rounded"  >
      <div className="carousel-item active" >
        <img src="https://wallpapers.com/images/featured/plzcoaffexgf4h81.jpg" className="d-block w-100 " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://media.wired.com/photos/5955ceabcbd9b77a41915cf6/master/w_2560%2Cc_limit/marvel-characters.jpg" className="d-block w-100 " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://images2.alphacoders.com/424/thumb-1920-42470.jpg" className="d-block w-100 " alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
