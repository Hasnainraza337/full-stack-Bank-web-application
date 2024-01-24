import React from 'react'
import { Link } from 'react-router-dom'

export default function Nopage() {
    return (
        <>
            <div id='notfound'>
                <div className="notfound">
                    <div className='notfound-404'>
                        <h1>404</h1>
                    </div>
                    <h2>we are sory,page not found!</h2>
                    <p className='mb-5'>
                        The page you are looking for might have been removed
                        had its name changed or its temporarily unavailable.
                    </p>

                    <Link to="/">Back To HomePage</Link>
                </div>
            </div>
        </>
    )
}
