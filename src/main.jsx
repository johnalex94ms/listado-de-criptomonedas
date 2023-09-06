import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./css/main.css"
import Cuadricula from "./components/Cuadricula"
import Pagina404 from "./components/404"
import Home from './components/Home'
import CriptoPage from './components/CriptoPage'
import Menu from './components/menu/menu'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route>
                <Route index element={<Home />} />
            </Route>
            <Route path='/criptomonedas'>
                <Route index element={<Cuadricula />} />
                <Route path=':id' element={<CriptoPage />}/>
            </Route>
            <Route path="*" element={<Pagina404 />} />
        </Routes>
    </BrowserRouter>
)