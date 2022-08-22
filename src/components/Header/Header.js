import React from 'react'
import './Header.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';


import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='Header py-3'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="left">
              <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/dialz-logo_300x300.png?v=1635328437" alt="" />
            </div>
          </div>
          <div className="col-lg-8 text-center">
            <div className="center">
              <Link className='span_header_edit' to="/"><span className='span_home_edit1'>Home</span></Link>
              <Link className='span_header_edit' to="/catalog"><span>Catalog</span></Link>
              <Link className='span_header_edit' to="/about"><span>About</span></Link>
              <Link className='span_header_edit' to="/services"><span>Services</span></Link>
              <Link className='span_header_edit' to="/news"><span>News</span></Link>
              <Link className='span_header_edit' to="/contact"><span>Contact</span></Link>
            </div>
          </div>
          <div className="col-lg-2 text-end">
            <div className="right">
              <span><AiOutlineHeart /></span>
              <span><AiOutlineSearch /></span>
              <span className='span_edit'><HiOutlineShoppingBag /></span>
              <span className='span_count'>0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header