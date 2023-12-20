import { Button } from 'antd'
import React from 'react'
import { HomeOutlined, HomeFilled } from "@ant-design/icons"
import { Link } from 'react-router-dom'

export default function DashboardNavbar() {


    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand" ><HomeFilled /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3 text-white">
                                <Link to="/dashboard" className='nav-link active'>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item me-3 text-white">
                                <Link to="/dashboard/accounts" className='nav-link'>
                                    Acounts
                                </Link>
                            </li>
                            <li className="nav-item text-white">
                                <Link to="/dashboard/transactions" className='nav-link'>
                                    Transactions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
