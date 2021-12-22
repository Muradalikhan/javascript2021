import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




export default function ProductComponant() {
    const products = useSelector(state => state.allproduct.products)

    const renderList = products.map((products) => {
            const {id,title,price,image}=products
        return (
            
            <div className="card p-3" style={{ width: "18rem",boxShadow:'2px 2px 2px #6c757dba',margin:'10px',display:'inline-block' }} key={id}>
                <img src={image} className="card-img-top" alt="img" style={{ height: '300px' }} />
                <div className="card-body">
                    <h5 className="card-title" style={{height:'80px'}}>{title}</h5>
                    <p className="card-text">${price}</p>
                    <Link to={`/products/${id}`} className="btn btnColor">View Details</Link>
                </div>
            </div>
            
        )
    })

    return (
        <div className='col-sm-12'>
            {renderList}
        </div>
    )
}