import { BrowserRouter, Routes,Route} from "react-router-dom";
import AmazonMain from "../../screen/amazon/amazon";
import Dashboard from "../../screen/dashborad";

function RouterApp(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/amazon' element={<AmazonMain/>}></Route>
        </Routes>
        
        </BrowserRouter>
    )
}

export default RouterApp
