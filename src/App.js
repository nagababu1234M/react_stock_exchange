import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopHeader from './components/Layers/TopHeader';
import MainContent from './components/Layers/MainContent';
import Content from './components/Layers/Content';

function App() {
  const myStyle = {
    marginLeft: '243px', // You can adjust the value as needed
  };
  return (
    <Router>
      {/* <div className="container-fluid"> */}
        <TopHeader />
        <div className="row" style={myStyle}>
        <Content />
        {/* <div className="row mt-3"> */}
          <Routes>
            <Route index element={<MainContent />} />
          </Routes>
          </div>
    </Router>
  );
}
export default App;
