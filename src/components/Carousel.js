// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id='carousel'>

        <div className="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>

        <form className="d-flex" >
      <input  className ="form-control me-2 bg-dark" type="search" placeholder="Search"  aria-label="Search"  />
      <button className="btn btn-outline-success text-white bg-success " type="submit">Search</button>
    </form>
        </div>

          <div className="carousel-item active">
            <img src="https://jontotheworld.com/wp-content/uploads/2015/03/larsian-cebu.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}} />
          </div>
          <div className="carousel-item">
            <img src="https://www.ytravelblog.com/wp-content/uploads/2013/03/Thai-street-food-1-of-11.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}} />
          </div>
          <div className="carousel-item">
            <img src="https://tse4.mm.bing.net/th?id=OIP.bq0Us_DbewJ9nIviuSI4SAHaEo&pid=Api&P=0&h=180" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      );
}






