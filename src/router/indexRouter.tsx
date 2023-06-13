import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../view/Home'
import About from '../view/About'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
    )
}