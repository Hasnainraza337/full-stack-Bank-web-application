import { Button } from 'antd';
import React from 'react'
import { FaUser, FaIdCard, FaInfoCircle, FaMoneyBillAlt } from "react-icons/fa";
import { HiMiniBuildingLibrary } from "react-icons/hi2";

export default function AddAccount() {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <div className="card px-3 py-2">
                            <div className='bg-primary rounded-2'>
                                <h1 className='text-center text-white'>Enter Account Details Below</h1>
                                <p className=' text-center text-white'>All Field Are Required*</p>
                            </div>
                            <form>
                                <div className='accountInput px-4 py-3'>
                                    <div className="row mb-4">
                                        <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FaUser style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <input type="text" placeholder='Full Name' className='input form-control' required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FaIdCard style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <input type="number" placeholder='CNIC Number(length should be 13)' className='input form-control' required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <HiMiniBuildingLibrary style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <input type="number" placeholder='Branch code(1 - 99)' className='input form-control' required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FaUser style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <input type="number" placeholder='Account Number(length should be 9)' className='input form-control' required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FaInfoCircle style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <div className="form-floating form-control floating-text">
                                                    <select className="form-select select" id="floatingSelect">
                                                        <option  value="1">Saving</option>
                                                        <option value="2">Current</option>
                                                    </select>
                                                    <label  form="floatingSelect">Choose Account Type</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FaMoneyBillAlt style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <input type="number" placeholder='Initial Deposit(Minimum 500 Rs.)' className='input form-control  requiredmt-2' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <Button type='primary'>Create Account</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
