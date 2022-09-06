import React from 'react'
import './collectioninfo.css'

const Shopinfo = () => {
  return (
 <section className='Main2'>
    <div className="container">
        <div className="col-12">
            <div className="collection">
              <h3>NATO STRAPS</h3>
              <h1>A New Look for your Watch</h1>
              <p>Your watch and strap should go together perfectly, but that doesn't mean you can't experiment with different combinations.</p>
              <button className='glow-on-hover'>SHOP THE COLLECTIONS</button>
              <div className="img_edit" data-aos="zoom-out-right" >
              <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/deal-bg.png?v=1633432139" alt="" />
              <button className='glow-on-hover'>View More</button>
              </div>
              
            </div>
        </div>
    </div>
 </section>
  )
}

export default Shopinfo