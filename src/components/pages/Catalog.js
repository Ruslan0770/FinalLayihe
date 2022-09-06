import React from 'react'


const Catalog = () => {
  return (
    <div>
       <section className='Contact1'>
      <div className="contact_edit">
      <h1>Collection</h1>
        <span className='home_edit'>Home </span>
        <span>/</span>
        <span> Products</span>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="catalog_left"></div>
          </div>
          <div className="col-lg-8">
            <div className="catalog_right">
              <div className="catalog_top">
                <div className="row">
                  <div className="col-lg-4"></div>
                  <div className="col-lg-4"></div>
                  <div className="col-lg-4"></div>
                </div>
              </div>
              <div className="catalog_bottom">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="catalog_box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Catalog