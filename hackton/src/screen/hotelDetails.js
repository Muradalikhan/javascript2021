

import React from 'react'
import '../App.css'

import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar1 from '../componant/navbar/navbar1'
import { useLocation } from 'react-router-dom'









export default function HotelDetail() {
    const [loader, setLoader] = useState(false)

    const location=useLocation().state
    

   
   

   

    const navigate=useNavigate()
    const goToPage=()=>{
            navigate('/dashboard')
    }

    const goToBooking=(selectedHotel)=>{
            navigate('/booking',{state:selectedHotel})
            console.log(navigate)
    }


    return (
        <div>
            <Navbar1/>
            <h1 className='p-2 bg-dark text-white' style={{margin:'80px 5px 20px 5px'}}>Hotel Details</h1>

            {!loader ?
                <div className="card mb-5 p-2" style={{ maxWidth: '80%',margin:'0 auto' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={location.hotelImgUrl} className="img-fluid rounded-start" style={{height:'500px'}} alt="cardimage" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title btnColor">{location.name}</h5>
                                <p className="card-text"> {location.services}</p>
                                <p className="card-text ">Offering an outdoor pool and a spa and wellness centre, Ramada Plaza by Wyndham Karachi Airport Hotel is located in Karachi. Free WiFi access is available.</p>
                                <p className="card-text">Price per day: ${location.price}   <span className=" bg-info p-2 mx-3 rounded">Availible Room: {location.room}</span></p>
                                <p className="card-text"><button className='btn btnColor' onClick={()=>goToBooking(location)}>Booking</button><button className='btn btnColor mx-2' onClick={goToPage}>Go back</button></p>
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