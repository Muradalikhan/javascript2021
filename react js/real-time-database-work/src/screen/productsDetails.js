

import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { SelectedProduct } from '../config/redux/action/productAction'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductsDetails() {
    const [loader, setLoader] = useState(false)

    const products = useSelector(state => state.selectedProdcut)
    const { image, price, title,description } = products
    const param = useParams()
    const { id } = param

    const dispatch = useDispatch()
    let fetchProductsFromFakeApi = async () => {
        setLoader(true)
        await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(SelectedProduct(data))
                setLoader(false)
            })
    }


    useEffect(() => {

        if (id && id !== "") {
            fetchProductsFromFakeApi()
        }

    }, [id])

    const navigate=useNavigate()
    const goToPage=()=>{
            navigate('/products')
    }


    return (
        <div>
            <h1>ProductsDetails</h1>

            {!loader ?
                <div className="card mb-3 p-3" style={{ maxWidth: '80%',margin:'0 auto' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={image} className="img-fluid rounded-start" alt="cardimage" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <p className="card-text">${price}</p>
                                <p className="card-text"><button className='btn btn-primary'>Add to card</button><button className='btn btn-primary mx-2' onClick={goToPage}>Go back</button></p>
                            </div>
                        </div>
                    </div>
                </div>

                :
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

            }



        </div>
    )
}
