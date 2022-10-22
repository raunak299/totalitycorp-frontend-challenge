
import './App.css';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Trending from './components/Trending/Trending';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';

function App() {

  const [isMenuOpen, setMenu] = useState(false);
  const [cartTrigger,setCartTrigger] = useState(false);
 

  return (
    <React.Fragment>
    {(isMenuOpen || cartTrigger ) && <div className='app-overlay'></div> }
    <Navbar isMenuOpen={isMenuOpen} setCartTrigger={setCartTrigger} cartTrigger={cartTrigger} setMenu={setMenu}/>
    <div className={`App ${ (isMenuOpen || cartTrigger) ? 'menu-active' : ''}`}>
      <Hero isMenuOpen={isMenuOpen}/>
      <Trending />
      <Categories/>
      <Footer/>
    </div>
    {cartTrigger && <Cart setCartTrigger={setCartTrigger} cartTrigger={cartTrigger}/> }
    </React.Fragment>
  );
}

export default App;
