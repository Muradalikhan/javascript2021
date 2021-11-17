import 'bootstrap-4-react'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ErrorPage from './error';
import Details from './openDetail';
import Covid19 from './Covid19';

export default function CovidApp() {
  return (
    <Router>
      <div>
         <nav className='p-3 bg-primary'> 

           <Link className='btn btn-primary' to="/">Covid-19</Link> 

           {/* <Link className='btn btn-primary' to="/details">Detail</Link>  */}

         </nav> 

        <Routes>
          <Route index path="/" element={<Covid19 />} />
          <Route path="/openDetail" element={<Details />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

