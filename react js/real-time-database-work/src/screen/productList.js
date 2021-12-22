

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProductsFromFakeApi } from '../config/redux/action/productAction'
import ProductComponant from './productComponant'
import Header from './header'
import '../App.css'






export default function ProductList() {
    const [loader, setLoader] = useState(false)
   

   
    const dispatch = useDispatch()
   
    
    useEffect(() => {
        setLoader(true)
       dispatch( fetchProductsFromFakeApi())
       setLoader(false)

    }, [])



    return (
        <>
            <Header/>
            <div className='m-auto' style={{ width: "90%" }}>
                <h1 className='m-3'>ProductList</h1>

                {!loader ? <ProductComponant /> :
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

                }
            </div>
        </>
    )
}
