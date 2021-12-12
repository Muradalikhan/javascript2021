

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SetProduct } from '../config/redux/action/productAction'
import ProductComponant from './productComponant'
import { useParams } from 'react-router-dom'






export default function ProductList() {
    const[loader,setLoader]=useState(false)

    const param=useParams();
    const dispatch=useDispatch()
    console.log(param);
    let fetchProductsFromFakeApi = async () => {
        setLoader(true)
        await fetch('https://fakestoreapi.com/products').then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(SetProduct(data))
                setLoader(false)
            })
    }

    useEffect(()=>{

        fetchProductsFromFakeApi()

    },[])



    return (
        <div className='m-auto' style={{ width: "90%" }}>
            <h1>ProductList</h1>

           {!loader?<ProductComponant />:<p>Loading...</p>} 
        </div>
    )
}
