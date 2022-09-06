import React from 'react'

const Sidebar = ({sidebar}) => {
  return (
    <div className="side">

<div className={sidebar?"sidebar sidebar-open":"sidebar"}>

<li>Your Card</li>
<li className='li_edit'>Your cart is currently empty</li>
<button className='glow-on-hover'>Continue Shopping</button>
</div>
    </div>
   
  )
}

export default Sidebar