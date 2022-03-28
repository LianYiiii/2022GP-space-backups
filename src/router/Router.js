import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Register from '../register/Register'
import Login from '../login/Login'
import Person from '../person/Person'
import IndexSpace from '../indexSpace/IndexSpace'
import NotFound from '../notfound/NotFound'
import Mine from '../Components/Mine.js'

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path='register' element={<Register />} />
                <Route path='/login' element={<Login />} >
                    {/* <Route path='/' element={<IndexSpace />} /> */}
                </Route>
                <Route path='/' element={<IndexSpace />} >
                    <Route path='mine' element={<Mine />} />
                </Route>
                <Route path='*' element={<NotFound />} />
                <Route path='person' element={<Person />} />
            </Routes>
        </HashRouter>
    )
}
