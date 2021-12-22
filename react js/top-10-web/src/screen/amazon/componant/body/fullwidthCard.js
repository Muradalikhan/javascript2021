import laptop from '../../asset/img/laptop.jpg'

function FullWidthCard() {

    return (
        <>
            <div class="d-flex align-items-center bg-white m-3 p-4">
                <div className=' m-2'> <button> Left</button> </div>
                <div className=' m-2'> <img src={laptop} alt='img' width='200px' height='200px' className='rounded-circle'></img> </div>
                <div className=' m-2'> <img src={laptop} alt='img' width='200px' height='200px' className='rounded-circle'></img> </div>
                <div className=' m-2'> <img src={laptop} alt='img' width='200px' height='200px' className='rounded-circle'></img> </div>
                <div className=' m-2'> <img src={laptop} alt='img' width='200px' height='200px' className='rounded-circle'></img> </div>
                <div className=' m-2'> <img src={laptop} alt='img' width='200px' height='200px' className='rounded-circle'></img> </div>
                <div className=' m-2'> <img src={laptop} alt='img' width='200px' height='200px' className='rounded-circle'></img> </div>
                <div className=' m-2'> <button>Right</button> </div>
            </div>

        </>
    )
}

export default FullWidthCard