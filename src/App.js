import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import News from './components/pages/News';
import Catalog from './components/pages/Catalog';
import Blogdetails from './components/pages/Blog_info_details';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';
import {useState} from 'react'
import Sidebar from 'components/Header/Sidebar';
import Backdrop from 'components/Header/Backdrop';






function App() {
  const [sidebar,setSidebar]=useState(false)
  const toggleSidebar = () =>{
    setSidebar((prevState) => !prevState)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header openSidebar={toggleSidebar} />
      <Backdrop  sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <Sidebar sidebar={sidebar} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog_details' element={<Blogdetails />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
