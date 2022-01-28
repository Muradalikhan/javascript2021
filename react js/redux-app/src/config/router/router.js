import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../../screen/about'
import Home from '../../screen/home'
import ReduxPractice from '../../screen/reduxPractice'

function RouterApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/practice' element={<ReduxPractice />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp