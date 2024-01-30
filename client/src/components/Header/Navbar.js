import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';

export default function Navbar() {

    const { isLoggedIn, user, } = useAuthContext();
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">ABC-BANK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar">
                            <li className="nav-item">
                                {user.isAdmin &&
                                    <Link to="/dashboard">
                                        <Button className='me-2'>Dashboard</Button>
                                    </Link>
                                }
                            </li>
                            <li>
                                {isLoggedIn ? (
                                    <>
                                        <Link to="/auth/logout">
                                            <Button Button type="primary" danger >Logout</Button>
                                        </Link>
                                    </>
                                ) : (
                                    <Link to="/auth/login"><Button >Login</Button></Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}
