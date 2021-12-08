
import 'bootstrap'
import { useState } from 'react'
import './main.css'


function MainPageOFGridWebsite() {
    const data = [
        {
            item:'one',
            price:30,
        },
        {
            item:'two',
            price:40,
        },
        {
            item:'three',
            price:50,
        },
        {
            item:'four',
            price:50,
        }
    ]
    const [qty, setQty] = useState(1)
    const [fav, setFav] = useState([])

    const addToFavorite = (item,price) => {
        // fav.push(item)
        setFav({ item:item,price:price})
        console.log(fav)
    }


    const increament = () => {
        setQty(qty + 1)
    }
    const decreament = () => {
        setQty(qty - 1)
    }
    return (
        <>
            <h1>Grid Website</h1>

            <div className='container'>
                <div className='items item1'>item1</div>
                <div className='items item2'>item2</div>
                <div className='items item3'>Favorite
                   

                </div>
                <div className='items item4'>
                    {data.map((el, index) => {
                        return (
                            <div className='subItem1' key={index} >
                                
                                <p>{el.item}</p>
                                <p>{el.price}</p>
                                <button className='btn btn-primary' onClick={() => addToFavorite(el.item,el.price)}>Add to Favorite</button>
                            </div>
                        )

                    })}


                </div>
                <div className='items item5'>item5</div>
                <div className='items item6'>item6
                {fav.map((favItem, index) => {
                        return (
                            <div className='subItem1 m-2' key={index} ><i className='btn btn-primary' onClick={increament}>+</i><b>{}</b> {favItem} ({qty}) <i className='btn btn-primary' onClick={decreament}>-</i></div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default MainPageOFGridWebsite