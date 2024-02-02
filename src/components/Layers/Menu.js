import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = ({menuItems}) => {
  return (
 
    <div className="col-md-3">
      <div className="list-group">
        <Link to="/home" className="list-group-item list-group-item-action">
          Home Page
        </Link>
        <Link to="/page1" className="list-group-item list-group-item-action">
          Menu Item 1
        </Link>
        <Link to="/page2" className="list-group-item list-group-item-action">
          Menu Item 2
        </Link>
        <Link to="/page3" className="list-group-item list-group-item-action">
          Menu Item 3
        </Link>
      </div>
    </div>
  );
};

export default Menu;
