import React from 'react'
import './product_slider.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import Slider from "react-slick";


const Product_Slider = () => {

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
        dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      };

    
  return (
   <section className='products' data-aos="zoom-in">
    <div className="container">
        <div className="top text-center">
            <h4>OUR PRODUCTS</h4>
            <h1>Our Bestsellers</h1>
        </div>
        <div className="bottom">
            <div className="row">
                <div className="col-12 edit">
                <Slider {...settings}>
          <div className='about_box col-12'>
           <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-6_600x.jpg?v=1634798681" alt="" />
           <h3 className='h3_edit text-center'>Analog For Girls</h3>
           <p className='product_p_edit text-center'>Rs.200.00</p>
           <button className='button_hover'>Add to Card</button>

           <div className="icons_edit">
           <p><AiOutlineHeart /></p>
           </div>
           <div className="icons_edit1">
           <p>< AiOutlineSearch/></p>
           </div>
          </div>
         
           
           
          <div className='about_box col-12'>
          <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-5_600x.jpg?v=1634798604" alt="" />
          <h3 className='h3_edit text-center'>Analog For Girls</h3>
           <p className='product_p_edit text-center'>Rs.200.00</p>
           <button className='button_hover'>Add to Card</button>

          <div className="icons_edit">
           <p><AiOutlineHeart /></p>
           </div>
           <div className="icons_edit1">
           <p>< AiOutlineSearch/></p>
           </div>
          </div>
          <div className='about_box col-12'>
          <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-4_600x.jpg?v=1634798681" alt="" />
          <h3 className='h3_edit text-center'>Analog For Girls</h3>
           <p className='product_p_edit text-center'>Rs.200.00</p>
           <button className='button_hover'>Add to Card</button>

          <div className="icons_edit">
           <p><AiOutlineHeart /></p>
           </div>
           <div className="icons_edit1">
           <p>< AiOutlineSearch/></p>
           </div>
          </div>
          <div className='about_box col-12'>
          <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-3_600x.jpg?v=1634798681" alt="" />
          
          <h3 className='h3_edit text-center'>Analog For Girls</h3>
           <p className='product_p_edit text-center'>Rs.200.00</p>
           <button className='button_hover'>Add to Card</button>

          <div className="icons_edit">
           <p><AiOutlineHeart /></p>
           </div>
           <div className="icons_edit1">
           <p>< AiOutlineSearch/></p>
           </div>
          </div>
          <div className='about_box col-12'>
          <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-2_600x.jpg?v=1634798681" alt="" />
          <h3 className='h3_edit text-center'>Analog For Girls</h3>
           <p className='product_p_edit text-center'>Rs.200.00</p>
           <button className='button_hover'>Add to Card</button>

          <div className="icons_edit">
           <p><AiOutlineHeart /></p>
           </div>
           <div className="icons_edit1">
           <p>< AiOutlineSearch/></p>
           </div>
          </div>
          <div className='about_box col-12'>
          <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/products/shop-1_600x.jpg?v=1634798681" alt="" />
          <h3 className='h3_edit text-center'>Analog For Girls</h3>
           <p className='product_p_edit text-center'>Rs.200.00</p>
           <button className='button_hover'>Add to Card</button>

          <div className="icons_edit">
           <p><AiOutlineHeart /></p>
           </div>
           <div className="icons_edit1">
           <p>< AiOutlineSearch/></p>
           </div>
          </div>
        </Slider>
                </div>
           
       

            </div>
        </div>
    </div>
   </section>
  )
}

export default Product_Slider