import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const Authenticated = false
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">BANK-APP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {!Authenticated
                                    ? <Link to="/auth/login"><Button >Login</Button></Link>
                                    : <>
                                        <Link to="/dashboard">
                                            <Button className='me-2'>Dashboard</Button>
                                        </Link>
                                        <Button type="primary" danger >Logout</Button>
                                    </>
                                }

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
