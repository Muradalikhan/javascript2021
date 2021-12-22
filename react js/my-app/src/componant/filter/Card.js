import './card.css'
function Card(props){
   
    return(
        <div class='card'>
            <div className='card-main-div' key={props.ind}>
                <div className='card-Ttitle'>{props.name}</div>
                <div className='card-img'> <img className='card-img' src={props.img} alt='images '></img></div>
                <div className='card-discription'>{props.discription}</div>
                <div className='card-price'>price : {props.type}</div>
                <div className='card-btn'> Add to cart</div>

            </div>
        </div>
    )
}

export default Card