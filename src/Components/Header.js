import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../img/JB-logo3.png";
import Menu from './Menu/Menu';

function Header() {
  return (
    <div className='navContainer'>
        <Link to='/'><img src={logo} alt="door logo" /></Link>
        <nav className="navbar">
            <ul id="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/discipleship">Disciple</a></li>
            </ul>
        </nav>
        <div className='menu'>
            <Menu />
        </div>
    </div>
  )
}

export default Header