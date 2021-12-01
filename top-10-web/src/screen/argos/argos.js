import Cards from "./component/body/cards"
import QuiltedImageList from "./component/body/imageLibrary"
import Header_Argos from "./component/header/header1"
import Header2_Argos from "./component/header/header2"

function ArgosMain(){

    return (
        <div>
           <Header_Argos/>
           <Header2_Argos/>
           <QuiltedImageList/>
           <QuiltedImageList/>
           <Cards/>
           <Cards/>
        </div>
    )
}

export default ArgosMain