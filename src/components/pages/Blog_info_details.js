import React from 'react'
import '../../assets/styles/details.css'


const Blogdetails = () => {
  return (
    <div>
         <section className='Contact1'>
      <div className="contact_edit">
      <h1>Style Designed With Time</h1>
        <span className='home_edit'>Home </span>
        <span>/</span>
        <span>  News</span>
        <span> /</span>
        <span>  Style Designed With Time</span>
      </div>
    </section>

    <section>
        <div className="one_img text-center">
            <img src="https://cdn.shopify.com/s/files/1/0564/2705/3216/articles/blog-10.jpg?v=1634734754" alt="" />
            <div className="img_data">
            <h3>Style Designed With Time</h3>
            <div className="p_edit1">
            <p>1 COMMENT</p>
            <p>Cames cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            <p>“Ridiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.”</p>
            <p>Sapien faucibus et molestie ac feugiat sed lectus. Sit amet consectetur adipiscing elit. Sed cras ornare arcu dui vivamus arcu felis. A scelerisque purus semper eget duis at tellus at urna. Vitae congue mauris rhoncus aenean vel elit. Sapien faucibus et molestie ac feugiat. </p>
            <p>Id semper risus in hendrerit gravida rutrum quisque non tellus. Sed lectus vestibulum mattis ullamcorper. Amet venenatis urna cursus eget nunc. Eu augue ut lectus arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc.</p>
            <p>Massa vitae tortor condimentum lacinia quis vel eros donec ac. Enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat. Tincidunt ornare massa eget egestas purus viverra accumsan. Metus aliquam eleifend mi in nulla posuere. </p>
            </div>
            
            </div>
        </div>
    </section>

    <section className='Comment_form'>
      <div className="comment">
          <h3>1 Comment</h3>
          <div className="comment_border">
            <span>October 20, 2021    </span>
            <span> LAVANYA</span>
          <p className='p_border'></p>
          <p>Scelerisque eleifend donec pretium vulputate sapien nec sagittis. In nibh mauris cursus mattis molestie</p>        
          </div>
          <h3>Leave a comment</h3>
          <div className="form_input">
            <form action="form-control form-group">
              <input className='input_edit' type="name" placeholder='Name...'/>
              <input className='input_edit' type="email" placeholder='Email...'/>
              <div className="message">
                <input type="message" placeholder='Message'/>
              </div>
            </form>
            <div className="button_edit">
            <button className='glow-on-hover'>POST COMMENT</button>

            </div>
          </div>

        
      </div>
    </section>


    </div>
  )
}

export default Blogdetails