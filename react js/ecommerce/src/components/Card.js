

import React, { useState, useEffect } from 'react';
import './style/card.css'
import { useSelector, useDispatch } from 'react-redux'
import { showCartCounter } from '../config/redux/showCart';
import { baskitItem } from '../config/redux/basket';


const Card = () => {
    const [arr, setArr] = useState([])
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const basketItem = useSelector(state => state.baskit.value)


    console.log(basketItem)

    const fetchData = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }


    const addtoCart = (item) => {
        setArr([...arr, item])
        dispatch(showCartCounter())
        dispatch(baskitItem(arr))
    }

    useEffect(() => {

        fetchData()

    }, []);



    return (


        products.map((item, ind) => {

            return (
                <div className='card' key={ind}>

                    <img className='img' src={item.image} alt='img' />

                    <div>
                        <h3 className='title'>{item.title.length > 10 ? item.title.substring(0, 10) : item.title}</h3>
                        <p className='dis'>{item.description.length > 60 ? item.description.substring(0, 60)+'...' : item.description}</p>
                        <div className='action'>
                            <span className='price'>Pkr: {item.price}</span>
                            <button className='btn btn-primary' onClick={() => { addtoCart(item) }}>Add to card</button>
                        </div>
                    </div>
                </div>
            )
        })



    );
}

export default Card;
