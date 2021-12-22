import img1  from '../../asset/img/product2.jpg'
function Card1(){

    return(
        <>
        <div style={{backgroundColor:'white',margin:'10px',padding:'20px',height:'450px',width:'350px',border:'1px solid lightgrey' }}>
            <h2 style={{float:'left'}}>Heading</h2>
            <img src={img1} alt='product'  height='330' width='300'></img>
            <p  style={{float:'left',margin:'10px 0'}}><a href='#'>Discription Link</a></p>
        </div>
        </>
    )
}

export default Card1