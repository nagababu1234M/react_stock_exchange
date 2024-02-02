import React from 'react';
import Menu from './Menu.js';

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
