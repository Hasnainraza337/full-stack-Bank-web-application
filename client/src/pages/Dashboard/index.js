import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import DashboardNavbar from "../../components/Header/DashboaedeNavbar"
import Home from "./Home"
import Accounts from "./Accounts"
import Transactions from "./Transactions"
import AddAccount from './AddAccount'
import { useAuthContext } from '../../contexts/AuthContext'
import { Spin } from 'antd'

export default function Index() {
    const { user,isLoading} = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.isAdmin) {
            navigate("/");
        }
    }, [user.isAdmin, navigate]);

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh", background: "rgba(0, 0, 0, 0.05)" }}>
                <Spin tip="Loading" size="large">
                    <div className="content" style={{
                        padding: "50px",
                        background: "rgba(0, 0, 0, 0.05)",
                        borderRadius: "4px",
                    }} />
                </Spin>
            </div>
        )
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
