import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../../screen/about'
import ContextApi from '../../screen/contextApi'
import Home from '../../screen/home'

function RouterApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/context' element={<ContextApi />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp