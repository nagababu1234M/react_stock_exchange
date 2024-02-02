import React from 'react';
import './HomePage.css';

const HomePage = (props) => {
const {limit}=props.data
  return (
  <div class="col-md-9">
    <div className="d-flex justify-content-center align-items-center h-100">
      <h2>Total Strength:  {limit} </h2>
    </div>
  </div>
  );
};
export default HomePage;