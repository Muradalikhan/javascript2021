import { Component } from "react";
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img8 from './images/8.png'
import img9 from './images/9.jpg'
import img11 from './images/11.jpg'
import './card.css'


class Card extends Component {

    constructor(props) {
        super(props)
        this.arr = [
            {
                title: 'Men latest shirt',
                img: img1,
                discription: 'The new Full Sleeves shirt is so soft, the fabric is the epitome of comfort. ',
                price: '999 pkr'
            },
            {
                title: 'Men latest shirt',
                img: img5,
                discription: 'The new Full Sleeves shirt is so soft, the fabric is the epitome of comfort. ',
                price: '899 pkr'
            },
            {
                title: 'Men latest shirt',
                img: img3,
                discription: 'The new Full Sleeves shirt is so soft, the fabric is the epitome of comfort. ',
                price: '999 pkr'
            },
            {
                title: 'Men latest shirt',
                img: img4,
                discription: 'The new Full Sleeves shirt is so soft, the fabric is the epitome of comfort. ',
                price: '799 pkr'
            },
            {
                title: 'Girls Fashion',
                img: img8,
                discription: 'The new Full Sleeves shirt is so soft, the fabric is the epitome of comfort. ',
                price: '499 pkr'
            },
            {
                title: 'Girls Fashion',
                img: img9,
                discription: 'The new Full Sleeves shirt is so soft, the fabric is the epitome of comfort. ',
                price: '999 pkr'
            },
            {
                title: 'Girls Fashion',
                img: img2,
                discription: 'The new Full Sleeves shirt is so soft, the fabric is the epitome of comfort. ',
                price: '499 pkr'
            },
            {
                title: 'Girls Fashion',
                img: img11,
                discription: 'The new Full Sleeves shirt is so soft, the fabric is the epitome of comfort. ',
                price: '499 pkr'
            }
        ]

        // console.log(arr[0].name);
    }

    render() {
        return (
            <div>
                <div className='card-header'><h2>Shopping cards</h2></div>
                {
                    this.arr.map((item) => {
                        let { title, img, discription, price } = item
                        return <div className='card-main-div'>
                            <img className='card-img' src={img} ></img>
                            <div className='card-text'>
                                <div className='title'><b>{title}</b></div>
                                <figcaption className='card-discription'>{discription}</figcaption>
                                <div className='card-price'>{price} <button className='card-add-btn'>Add to cart</button></div>
                            </div>
                        </div>

                    })
                }
            </div>
        )
    }
}

export default Card