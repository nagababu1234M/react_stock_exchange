import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2.tsx';
import Page3 from '../pages/Page3';
import HomePage from '../pages/HomePage';
import  {  useState , useEffect, useContext} from 'react';
import TableData from '../common/TableData.ts';
import Counter from '../pages/Counter.js';
import store from '../common/store.ts';
import { Provider } from 'react-redux';
import Page4 from '../pages/Page4.tsx';
import Stopwatch from '../pages/stopWatch.tsx';
import Login from '../pages/Login.tsx';
import {useAuth}  from '../common/AuthContext.js';




const apiUrl='https://dummyjson.com/products';
const Content = ({ element, ...props }) => {
  console.log({...props, ...element})
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [isLoggedInUser, setLoggedInUser] = useState(null);
  const { updateToken } = useAuth();

  
  
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await TableData( { postUrl:apiUrl,method: "GET", data: "" } );
        setData(result);
      } catch (error) {
        // Handle error (e.g., display an error message)
        console.error('Error in App component:', error);
      } finally {
          setLoading(false); // Set loading to false when data fetching is complete 
      }
    };
    fetchDataFromApi();
  }, []);

    return(
        <div className="col-md-6">
          {
          updateToken ? (
          loading ? (
            <div>Loading...</div>
          ) : (
            <Routes>
              <Route path="/home" element={<HomePage data={data} />} />
              <Route path="/page1" element={<Page1 data={data} />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={
              <Provider store={store}>
              <div>
                  <h1>Redux Example</h1>
                  <Page4 />
              </div>
            </Provider>}/>
              <Route path="/timer" element={ 
              <Provider store={store}>
              <div>
                  <h1>Redux Example</h1>
                  <Counter />
              </div>
            </Provider>} />
            <Route path="/stopWatch" element={ 
              <Provider store={store}>
              <div>
                  <h1>Redux Example</h1>
                  <Stopwatch />
              </div>
            </Provider>} />
            </Routes>
          )
        )
          : (<Login  />)
      }
        </div>
      );
            
};

export default Content;
