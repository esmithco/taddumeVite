import React from 'react';
import { NavLink } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { FaUserAstronaut } from "react-icons/fa6";
import './Header.css';

function Header(props) {
  return (
    <header>
      <TiThMenu className='header-menu--mobile'/>

      <div className='header-logo'>
        <NavLink to='/' className='header-logo--navlink'>
          <img className='header-logo--img' src={props.img1} alt='' />
          <img className='header-logo--imgMobile' src={props.img2} alt='' />
        </NavLink>
      </div>
      {props.children}
      <FaUserAstronaut className='header-user--mobile'/>
    </header>
  );
}

export { Header };