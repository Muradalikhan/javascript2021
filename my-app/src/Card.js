import './card.css'
function Card(props){
    return(
        <div>
            <div className='card-main-div'>
                <div className='card-Ttitle'>{props.title}</div>
                <div className='card-discription'>{props.discription}</div>
                <div className='card-price'>price : {props.price}</div>
                <div className='card-btn'> Add to cart</div>

            </div>
        </div>
    )
}

export default Card