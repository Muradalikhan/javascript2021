import './main.css'

function MainPageOFGridWebsite(){

    return(
        <>
        <h1>Grid Website</h1>
        
        <div className='container'>
            <div className='items item1'>item1</div>
            <div className='items item2'>item2</div>
            <div className='items item3'>item3</div>
            <div className='items item4'>
                <div className='subItem1'>One</div>
                <div className='subItem2'>two</div>
                <div className='subItem3'>three</div>
                <div className='subItem4'>four</div>

            </div>
            <div className='items item5'>item5</div>
            <div className='items item6'>item6</div>
        </div>
        
        </>
    )
}

export default MainPageOFGridWebsite