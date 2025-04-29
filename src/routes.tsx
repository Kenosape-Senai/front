import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login' 
import Projects from './pages/Projects'
import Error from './pages/Error'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login/> }/>
                <Route path="/projects" element={ <Projects/> }/>

                <Route path="*" element={ <Error/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp