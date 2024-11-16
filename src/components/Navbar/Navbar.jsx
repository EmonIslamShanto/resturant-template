import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images';

const Navbar = () =>{ 
  const [ toggleMenu, setToggleMenu ] = useState(false);
  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt='app logo' />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#awards'>Awards</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a className='p__opensans' href="#login">Login / Register</a>
      <div></div>
      <a className='p__opensans' href="/">Book Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={24} onClick={()=> setToggleMenu(true)}/>
        {
          toggleMenu && (
            <div className='app__navbar-samllscreen_overlay flex_center slide-bottom'>
        <MdOutlineRestaurantMenu color='#fff' fontSize={24} className='overlay_close' onClick={()=> setToggleMenu(false)}/>
        <ul className='app__navbar-smallscren-links'>
          <li className='p__opensans' onClick={()=> setToggleMenu(false)}><a href='#home'>Home</a></li>
          <li className='p__opensans' onClick={()=> setToggleMenu(false)}><a href='#about'>About</a></li>
          <li className='p__opensans' onClick={()=> setToggleMenu(false)}><a href='#menu'>Menu</a></li>
          <li className='p__opensans' onClick={()=> setToggleMenu(false)}><a href='#awards'>Awards</a></li>
          <li className='p__opensans' onClick={()=> setToggleMenu(false)}><a href='#contact'>Contact</a></li>
        </ul>
      </div>
          )
        }
      
      
    </div>
  </nav>
);
}
export default Navbar;
