import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";


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
                        <ul className='d-flex align-items-center flex-wrap' style={{ listStyle: "none" }}>
                            <li className='me-2'>
                                <IoLogoFacebook style={{ color: "white", cursor: "pointer" }} />
                            </li>
                            <li className='me-2'>
                                <IoLogoGithub style={{ color: "white", cursor: "pointer" }} />
                            </li>
                            <li>
                                <RiTwitterXFill style={{ color: "white", cursor: "pointer" }} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}
