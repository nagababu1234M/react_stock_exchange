import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2.tsx';
import Page3 from '../pages/Page3';
import HomePage from '../pages/HomePage';
import  {  useState , useEffect} from 'react';
import TableData from '../common/TableData.ts';
const apiUrl='https://dummyjson.com/products';
const Content = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
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
          loading ? (
            <div>Loading...</div>
          ) : (
            <Routes>
              <Route path="/home" element={<HomePage data={data} />} />
              <Route path="/page1" element={<Page1 data={data} />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
            </Routes>
          )}
        </div>
      );
};

export default Content;
