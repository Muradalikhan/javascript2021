

import React from 'react';
import './style/card.css'

const Card = () => {
    return (
        <div className='card'>
           
                <img className='img' src='https://cdn.vox-cdn.com/thumbor/pjcUw1kyqVQA8sbGFd1mz2g9pog=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg' alt='img' />
            
            <div>
                <h3 className='title'>title</h3>
                <p className='dis'>discription dsadsa dsa dsa dsa dsa as dsa d asd as das dsa d asd as da sdasd ad as dd asdsd as d sadsa dsa d sa dsa d asdas das dasdas d </p>
                <div className='action'>
                    <span className='price'>Pkr: 1250</span>
                    <button className='btn btn-primary'>Add to card</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
