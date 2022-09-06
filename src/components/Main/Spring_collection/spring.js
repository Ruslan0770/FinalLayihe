
import React from 'react'
import Slider from "react-slick";
import './spring.css'


const spring = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }


const settings = {
    dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
  };

  return (
    <section className='spring mx-4' data-aos="zoom-in">
    <div className="container">
       
        <div className="bottom">
            <div className="row">
                <div className="col-12 edit">
                <Slider {...settings}>
          <div className='spring_box'>
           <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/collections/home-01_770x.jpg?v=1634804124" alt="" />
          
           
           
           
          </div>
          <div className='spring_box'>
          <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-5_600x.jpg?v=1634798604" alt="" />
          
          </div>
          <div className='spring_box'>
          <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-4_600x.jpg?v=1634798681" alt="" />
          
          </div>
          <div className='spring_box'>
          <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-3_600x.jpg?v=1634798681" alt="" />
          
          </div>
          <div className='spring_box'>
          <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-2_600x.jpg?v=1634798681" alt="" />
         
          </div>
          <div className='spring_box'>
          <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-1_600x.jpg?v=1634798681" alt="" />
          
          </div>
        </Slider>
                </div>
           
       

            </div>
        </div>
    </div>
   </section>
);

  }
export default spring
