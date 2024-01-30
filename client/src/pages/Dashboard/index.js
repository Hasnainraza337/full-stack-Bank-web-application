import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import DashboardNavbar from "../../components/Header/DashboaedeNavbar"
import Home from "./Home"
import Accounts from "./Accounts"
import Transactions from "./Transactions"
import AddAccount from './AddAccount'
import { useAuthContext } from '../../contexts/AuthContext'

export default function Index() {
    const { user} = useAuthContext();
    const navigate = useNavigate();


    if (!user.isAdmin) {
        return navigate("/");
    }


    return (
        <>
            <DashboardNavbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/accounts' element={<Accounts />} />
                    <Route path='/transactions' element={<Transactions />} />
                    <Route path='/addaccount' element={<AddAccount />} />
                </Routes>
            </main>
        </>
    )
}
