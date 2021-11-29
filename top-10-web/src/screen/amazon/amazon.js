import Card1 from './componant/body/card1'
import FullWidthCard from './componant/body/fullwidthCard'
import Footer1 from './componant/footer/footer1'
import Footer2 from './componant/footer/footer2'
import CustomeCarousel from './componant/header/carousel'
import Navbar1 from "./componant/header/navbar1"
import Navbar2 from "./componant/header/navbar2"


let AmazonMain = () => {

    return (
        <div>
            <Navbar1 />
            <Navbar2 />
            <CustomeCarousel />
            <div className='d-flex flex-direction-row'>
                <div> <Card1 /></div>
                <div> <Card1 /></div>
                <div> <Card1 /></div>
                <div> <Card1 /></div>
            </div>
            <FullWidthCard />
            <FullWidthCard />
            <div className='d-flex flex-direction-row'>
                <div> <Card1 /></div>
                <div> <Card1 /></div>
                <div> <Card1 /></div>
                <div> <Card1 /></div>
            </div>

            <Footer1/>
            <Footer2/>



        </div>
    )
}

export default AmazonMain