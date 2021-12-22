import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import {incNum, decNum} from '../config/redux/action'

function Home() {
    const myState = useSelector((state) => state)
    const dispatch = useDispatch()

    // const [val, setVal] = useState('')

    const update = () => {
        dispatch(
            {
                type: 'UPDATE',
                value: myState + 1,
            }
        )
    }
    const decrese = () => {
        dispatch(
            {
                type: 'DECRESE',
                value: myState - 1,
            }
        )
    }
    return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',height:'100vh'}}>
            <button onClick={decrese}>Decrement</button>
            <h1 style={{margin:'20px',border:'1px solid balck'}}>{myState}</h1>
            <button onClick={update}>Increment</button>

            <button><Link to='/about'>Go to About</Link></button>
            <button><Link to='/context'>Go to Context Api </Link></button>
        </div>
    )
}

export default Home