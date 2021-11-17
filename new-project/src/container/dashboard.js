import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useState } from 'react';


function DashBoard(){
let [userLogin,setUserLogin]=useState(false)
let navigate=useNavigate('')

useEffect(()=>{
    if(!userLogin){
        navigate('./login')
    }
},[userLogin])
    return(
        <h1>DashBoard</h1>
    )
}

export default DashBoard