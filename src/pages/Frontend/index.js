import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import NoPage from "./NoPage"

export default function index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
