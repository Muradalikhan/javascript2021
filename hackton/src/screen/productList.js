

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProductsFromFakeApi } from '../config/redux/action/productAction'
import ProductComponant from './productComp'
import '../App.css'
import Navbar1 from '../componant/navbar/navbar1'






export default function ProductList() {
    const [loader, setLoader] = useState(false)

   
    const dispatch = useDispatch()
   
    
    useEffect(() => {
       
     
            dispatch( fetchProductsFromFakeApi())
        
       
    }, [])



    return (
        <>
            <Navbar1/>
            <div className='m-auto' style={{ width: "90%" }}>
                <h1 className='m-3'>ProductList</h1>

                {!loader ? <ProductComponant /> :
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

                }
            </div>
        </>
    )
}