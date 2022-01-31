

import React, { useEffect, useState } from 'react';
import './style/addCard.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteBaskitItem } from '../config/redux/basket';

const AddCard = () => {
    const baskitData = useSelector(state => state.baskit.value)
    const counter = useSelector(state => state.showCart.counter)
    const [data, setData] = useState(baskitData)
    const [total, setTotal] = useState('')
    const dispatch = useDispatch()

    const deleteItem = (id) => {
        const dataAfterDelete = data.filter((item) => item.id !== id)
        setData(dataAfterDelete)
        // dispatch(deleteBaskitItem(dataAfterDelete), { id: id })

    }

    useEffect(() => {

    }, [data])


    return (

        counter > 0 ?
            <>{
                data.map((item, ind) => {
                    return (

                        <div className='card-add' key={ind}>
                            <div className='quantity'>
                                <button className='btn btn-primary'>+</button>
                                <span className='p-1'>0</span>
                                <button className='btn btn-primary'>-</button>
                            </div>
                            <img className='img-add' src={item.image} alt='img' />

                            <div>
                                <h4 className='title-add'>{item.title.length > 10 ? item.title.substring(0, 10) : item.title}</h4>
                                <span className='price-add'>Pkr: {item.price}</span>
                                <div className='action-add'>
                                    <button className='btn btn-danger' onClick={() => { deleteItem(item.id) }}>x</button>
                                </div>
                            </div>
                        </div>


                    )
                })
            }

                <br />
                <p>Total: 3500</p>

                <button className='btn btn-primary'>Check Out</button>
            </>
            :
            <div>your card is empty</div>

    );
}

export default AddCard;
