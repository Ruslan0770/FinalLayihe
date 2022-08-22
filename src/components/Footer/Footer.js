import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="top_footer">
                <div className="row">
                    <div className="col-lg-4 d-flex">
                        <div className="left_footer">
                            <h3>Help</h3>
                            <h5>Search</h5>
                            <h5>Advance Search</h5>
                            <h5>Information</h5>
                            <h5>Shipping Details</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="center_footer">
                        <h3>Follow us</h3>
                            <h5>Facebook</h5>
                            <h5>Instagram Search</h5>
                            <h5>Twitter</h5>
                            <h5>Youtube</h5>
                        </div>
                    </div>
                        <div className="col-lg-4">
                            <div className="right_footer">
                                <h3>Subscribe to our newsletter</h3>
                                <p>Be the first to hear about new <br /> arrivals, by invitation only sales <br /> and special events</p>
                                <input className='input_edit' type="email" placeholder='Your Email Address...'/>
                                <button>SIGN UP</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
            <div className="bottom_footer">
                <div className="bottom_line">
                <p className='text-center'>© 2022 dialz-theme Design Themes</p>
                </div>
               
            </div>
            
    </footer>
  )
}

export default Footer