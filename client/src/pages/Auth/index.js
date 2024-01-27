import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./Login"
import Register from "./Register"
import Logout from "./Logout"

export default function Index() {
    return (
        <>
            <main className='auth bg-light'>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path="*" element={<h1 className='text-center'>404 Page Not Found</h1>} />
                </Routes>
            </main>
        </>
    )
}
