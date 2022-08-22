import React from 'react'
import './collectionslider.css'
import Carousel from 'react-bootstrap/Carousel';

const Collectionslider = () => {
  return (
    <div className='slider_header'>

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/slider-1.jpg?v=1633414416"
          alt="First slide"
        />
        <Carousel.Caption>
            <div className="slider_edit">
            <h3>NEW ARRIVALS</h3>
          <p className='p_edit'>Our Best Collections</p>
          <button>Explore</button>
            </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/slider02.jpg?v=1636958266"
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="slider_edit">
            <h3>LATEST DESIGNS</h3>
          <p className='p_edit'>Trending Collections</p>
          <button>Explore</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/slider03.jpg?v=1636958266"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="slider_edit3">
            <h3>NEW ARRIVALS</h3>
            <p className='p_edit3'>Our Best Collections</p>
            
            
          
          <button>Explore</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Collectionslider