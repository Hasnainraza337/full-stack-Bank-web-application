import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardNavbar from "../../components/Header/DashboaedeNavbar"
import Home from "./Home"
import Accounts from "./Accounts"
import Transactions from "./Transactions"
import AddAccount from './AddAccount'

export default function index() {
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
