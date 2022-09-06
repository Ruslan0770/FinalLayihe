import React from 'react'
import Collectionslider from '../Main/Collection_slider/Collectionslider';
import Shopinfo from '../Main/Shop_Collection/Shopinfo';
import Aboutinfo from '../Main/About_info/Aboutinfo';
import ProductSlider from '../Main/Product_Slick_Slider/Product_Slider';
import Bloginfo from '../Main/Blog_info/Bloginfo';
import Spring from '../Main/Spring_collection/spring';


const Home = () => {
  return (
    <div>
      <Collectionslider />
      <Shopinfo />
      <Aboutinfo />
      <ProductSlider />
      <Spring />
      <Bloginfo />
    </div>
  )
}

export default Home