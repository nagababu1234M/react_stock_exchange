import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';
// import HomePage from './HomePage.js';
import TableData from '../common/TableData.ts';
import  { useEffect, useState } from 'react';
import Menu from './Menu.js';
import Content from './Content.js';

// const colStyles = {
//   margin: '0',
//   padding: '0',
//   height:'60'
//   // Add any other styles you want
// };
const LeftSidebar = () => {
  // Run the effect only once on mount

      return (  
      <div className='container-fluid'>
      <div className="row">
         <Menu />
      </div>
    </div>    

    )
};

export default LeftSidebar;
