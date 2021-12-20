import React from 'react'
import img from "../../asset/bgImg.jpg"




export default function Card() {

    let arr = ['card 1', 'card 2', 'card 3']

    return (
        <div className='my-4 col-sm-12'>

            {arr.map((card, index) => {

                return (
                    <div class="card m-3 p-3 col-sm-3 shadow-lg d-inline-block" style={{ maxWidth: "500px" }} key={index}>
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src={img} class="img-fluid rounded-start" alt="img" style={{ width: '300', height: '300' }} />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title">{card}</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in </p>
                                    <button class="btn btn-primary">Add to card</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}

        </div>

    )
}
