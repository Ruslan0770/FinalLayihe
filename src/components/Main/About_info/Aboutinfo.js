import './aboutinfo.css'
import React from 'react'

const Aboutinfo = () => {
  return (
    <section className='Main3'>
        <div  className="container">
            <div className="top">
                <div className="row align-items-center">
                    <div className="col-lg-6 a">
                        <div className="top_left"data-aos="flip-left">
                            <h4>ABOUT US</h4>
                            <h1>A Unique watch that fits <br /> Your Style</h1>
                            <p>The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.</p>
                            <button className='glow-on-hover'>EXPLORE</button>
                        </div>
                    </div>
                    <div className="col-lg-6 b">
                    <div className="top_right" data-aos="flip-right">
                            <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/img-1.jpg?v=1633497682" alt="" />
                        </div>
                    </div>
                        
                </div>
            </div>
            <div className="bottom">
                <div className="row all">
                    <div className="col-lg-5 c">
                        <div className="bottom_left ms-5" data-aos="flip-left">
                            <img src="https://media.istockphoto.com/photos/smiling-businessman-holding-phone-and-looking-away-picture-id691910421?b=1&k=20&m=691910421&s=170667a&w=0&h=vtUf5eDLywSjSTkQByMfVywXxIzWnmlIXNkP_46Aes0=" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 d">
                        <div className="bottom_right" data-aos="flip-right">
                            <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/img-3.jpg?v=1633499021" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutinfo