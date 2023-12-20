import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { GithubOutlined, TwitterOutlined } from "@ant-design/icons"
import { BsFacebook } from "react-icons/bs";


export default function Topbar() {
    const [today, setToday] = useState(dayjs().format('DD/MM/YYYY, hh:mm:ss A'))

    useEffect(() => {
        setInterval(() => {
            setToday(dayjs().format('DD/MM/YYYY, hh:mm:ss A'))
        }, 1000)
    }, [])
    return (
        <>
            <div className="container-fluid bg-primary topbar">
                <div className="container d-flex justify-content-between">
                    <div className='d-flex flex-wrap'>
                        <p className='text-white mb-0'>{today}</p>
                    </div>
                    <div>
                        <ul className='d-flex flex-wrap' style={{ listStyle: "none" }}>
                            <li className='me-2'>
                                <BsFacebook style={{ color: "white" }} />
                            </li>
                            <li className='me-2'>
                                <GithubOutlined style={{ color: "white" }} />
                            </li>
                            <li>
                                <TwitterOutlined style={{ color: "white" }} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}
