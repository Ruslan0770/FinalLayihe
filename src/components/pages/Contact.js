import React from 'react'
import '../../assets/styles/contact.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MDBInput ,MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';




const Contact = () => {
  return (
    <div className="allofthem">
        <section className='Contact1'>
      <div className="contact_edit">
      <h1>Contact</h1>
        <span className='home_edit'>Home </span>
        <span>/</span>
        <span> Contact</span>
      </div>
    </section>



    <section className='connection'>
      <div className="container">
        <div className="row all align-items-center justify center">
         
          <div className="col-lg-4  cnc_edit">
            <div className="box">
            <span className='icon_edit'><BsFillTelephoneFill /></span>
            <h3>Phone</h3>
            <h5>Toll-Free:+994-50-501-39-39</h5>
            <h5>Fax:+994-50-501-39-39</h5>
            </div>
           

          </div>
          <div className="col-lg-4 cnc_edit">
          <div className="box">
            <span className='icon_edit'><BsFillTelephoneFill /></span>
            <h3>Email</h3>
            <h5>mail@example.com</h5>
            <h5>support@example.com</h5>
            </div>
          </div>
          <div className="col-lg-4 cnc_edit">
          <div className="box">
            <span className='icon_edit'><BsFillTelephoneFill /></span>
            <h3>Address</h3>
            <h5>No: 58 A, East Madison Street,</h5>
            <h5>Baltimore, MD, USA 4508</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section className='contact_form'>
      <div className="container">
        <div className="row">
          <div className="form_edit">
          <form  className=''>
      <MDBInput className='name_edit d-flex' id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email' />
      <MDBInput label='Phone' id='typePhone' type='tel' />
      <MDBInput className='message_edit' wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

      <MDBCheckbox
        wrapperClass='d-flex  mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4 py-3 px-5' block>
        Sign in
      </MDBBtn>
    </form>
          </div>
        </div>
      </div>
    </section>
     */}



    </div>


    
   
        
      
    
  )
}

export default Contact