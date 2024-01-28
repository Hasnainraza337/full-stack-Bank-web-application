import React, { useState } from 'react'
import { FaUser, FaIdCard, FaInfoCircle, FaMoneyBillAlt, FaPhoneAlt } from "react-icons/fa";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { useAuthContext } from '../../../contexts/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import { useDataContext } from '../../../contexts/DataContext';

const initialState = { fullName: "", idCard: "", phone: "", branchCode: 0, accountType: "", deposit: 0 }

export default function AddAccount() {
    const { API } = useAuthContext()
    const { getAllAccounts } = useDataContext()
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const convertedValue = name === 'branchCode' || name === 'deposit'
            ? parseInt(value, 10)
            : value;
        setState(s => ({ ...s, [name]: convertedValue }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API}/api/form/account`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state)
            })
            const accounts_data = await response.json()
            if (response.ok) {
                setState(initialState)
                toast.success("Account Added Successfully")
                navigate("/dashboard/accounts")
                getAllAccounts()
            } else {
                toast.error(accounts_data.extraDetails ? accounts_data.extraDetails : accounts_data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <div className="card px-3 py-2">
                            <div className='bg-primary rounded-2'>
                                <h1 className='text-center text-white'>Enter Account Details Below</h1>
                                <p className=' text-center text-white'>All Field Are  Required*</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='accountInput px-4 py-3'>
                                    <div className="row mb-4">
                                        <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FaUser style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <input type="text" name='fullName' placeholder='Full Name' className='input form-control' onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FaIdCard style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <input type="number" name='idCard' placeholder='CNIC Number(length should be 13)' className='input form-control' onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FaPhoneAlt style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <input type="number" name='phone' placeholder='Mobile Number' className='input form-control' onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <HiMiniBuildingLibrary style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <input type="number" name='branchCode' placeholder='Branch Code' className='input form-control' onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FaInfoCircle style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <div className="form-floating form-control floating-text">
                                                    <select className="form-select select" name='accountType' id="floatingSelect" onChange={handleChange}>
                                                        <option></option>
                                                        <option value="Saving">Saving</option>
                                                        <option value="Current">Current</option>
                                                    </select>
                                                    <label form="floatingSelect">Choose Account Type</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FaMoneyBillAlt style={{ fontSize: "40px", marginRight: "20px" }} />
                                                <input type="number" name='deposit' placeholder='Initial Deposit(Minimum 500 Rs.)' className='input form-control   mt-2' onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='bg-primary text-white border-0 px-3 py-2 rounded-2'>Create Account</button>
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
