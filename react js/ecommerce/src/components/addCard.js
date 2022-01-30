

import React from 'react';
import './style/addCard.css'

const AddCard = () => {
    return (
        <div className='card-add'>
            <div className='quantity'>
                <button className='btn btn-primary'>+</button>
                <span className='p-1'>0</span>
                <button className='btn btn-primary'>-</button>
            </div>
            <img className='img-add' src='https://cdn.vox-cdn.com/thumbor/pjcUw1kyqVQA8sbGFd1mz2g9pog=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg' alt='img' />

            <div>
                <h3 className='title-add'>title</h3>
                <span className='price-add'>Pkr: 1260</span>
                <div className='action-add'>
                    <button className='btn btn-danger'>x</button>
                </div>
            </div>
        </div>
    );
}

export default AddCard;
