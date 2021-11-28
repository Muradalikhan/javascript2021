import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../../screen/about'
import Home from '../../screen/home'

function RouterApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp