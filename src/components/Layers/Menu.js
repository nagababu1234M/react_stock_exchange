import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  return (
 
    <div className="col-md-3">
      <div className="list-group">
        <Link to="/home" className="list-group-item list-group-item-action">
          Home Page
        </Link>
        <Link to="/page1" className="list-group-item list-group-item-action">
          Products List
        </Link>
        <Link to="/page2" className="list-group-item list-group-item-action">
          Creae New
        </Link>
        <Link to="/page3" className="list-group-item list-group-item-action">
          Pending
        </Link>
        <Link to="/page4" className="list-group-item list-group-item-action">
          Todo List
        </Link>
        <Link to="/timer" className="list-group-item list-group-item-action">
        Timer
        </Link>
        
      </div>
    </div>
  );
};

export default Menu;
