import React from 'react'
import './bloginfo.css'
import { Link } from 'react-router-dom'

const Bloginfo = () => {
  return (
   <section className='Main6'>
    <div className="container">
        <div className="top text-center">
        <h4>BLOG</h4>
        <span>Latest News</span>
       
        
       
        </div>
        
        <div className="row justify">
            <div className="col-lg-3">
                <div className="box" data-aos="fade-up"
     data-aos-duration="2500">
                    <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/articles/blog-10.jpg?v=1634734754" alt="" />
                        <p>October 20,2021</p>
                      <Link to='blog_details'> <h2>Style Designed With Time</h2></Link> 
                </div>
            </div>
            <div className="col-lg-3 mt-5">
                <div className="box" data-aos="fade-up"
     data-aos-duration="2000">
                <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/articles/blog-07.jpg?v=1634734801" alt="" />
                <p>October 20,2021</p>
                        <Link to='blog_details'><h2>Discover The Quality Watches</h2></Link>
                </div>
                
            </div>
            <div className="col-lg-3">
                <div className="box" data-aos="fade-up"
     data-aos-duration="1500">
                <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/articles/blog-04.jpg?v=1634734818" alt="" />
                <p>October 20,2021</p>
                        <Link to='blog_details'><h2>Look Unique With Watch</h2></Link>
                </div>
              
            </div>
            <div className="col-lg-3 mt-5">
                <div className="box" data-aos="fade-up"
     data-aos-duration="1000">
                            <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/articles/blog-02.jpg?v=1634734836" alt="" />
                            <p>October 20,2021</p>
                        <Link to='blog_details'><h2>Unique, Bold, And Impressive</h2></Link>
                </div>
                
            </div>
        </div>
    </div>
   </section>
  )
}

export default Bloginfo