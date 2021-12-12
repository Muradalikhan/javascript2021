
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";

import React from 'react'
import Login from "../screen/login";
import Signup from "../screen/signup";
import Dashboard from "../screen/dashboard";
import ProductList from "../screen/productList";

export default function RouterApp() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/products' element={<ProductList/>} />
                </Routes>
            </Router>
            
        </div>
    )
}
