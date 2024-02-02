import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {  useState } from 'react';
import LeftSidebar from './LeftSidebar';
import './TopHeader.css';
import image from  '../../assets/images/logo.svg';


const TopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
<div>
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
      <ul class="navbar-nav bg-light">
      <li class="nav-item" onClick={toggleMenu}>
        <a class="nav-link" href="#"> ☰ Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 3</a>
        </li>
      </ul>
      <div class="logo-container">
        <img
                src={image}
                alt="Profile Logo"
                className="profile-logo"
          />
      </div>
    </div>
  </nav>
 {isMenuOpen && <LeftSidebar />}
</div>
 );
};

export default TopHeader;
