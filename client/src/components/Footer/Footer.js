import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className='bg-primary py-2'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='text-center text-white mb-0'>&copy; {year} ABC Bank.Developed by Hasnain Raza</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
