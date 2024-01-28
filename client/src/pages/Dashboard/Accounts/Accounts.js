import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ArrowLeftOutlined, DeleteOutlined, CreditCardOutlined, ArrowDownOutlined } from "@ant-design/icons"
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useDataContext } from '../../../contexts/DataContext';

export default function Accounts() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const { accounts, deleteAccount } = useDataContext()

  const showModal = (accountId) => {
    const selectedAccount = accounts.find(account => account._id === accountId);
    setSelectedAccount(selectedAccount);
    setOpen(true);
  };
  const showModal1 = () => {
    setOpen(false)
    setOpen1(true);
  };
  const showModal2 = () => {
    setOpen(false)
    setOpen2(true);
  };

  const handleCancel = () => {
    setOpen(false);
    setSelectedAccount(null)
  };
  const handleCancel1 = () => {
    setOpen1(false);
  };
  const handleCancel2 = () => {
    setOpen2(false);
  };


  const handleDeleteAccount = async (accountId) => {
    try {
      await deleteAccount(accountId);
      setOpen(false);
      setSelectedAccount(null);
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };


  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <div className="card px-3 py-3">
              <Link to="/dashboard" className='text-decoration-none'>
                <Button className='bg-primary text-white d-flex justify-content-center align-items-center'><ArrowLeftOutlined /> Dashboard</Button>
              </Link>
              <h5 className='text-center primary d-flex justify-content-center align-items-center mt-4'><FaUser className='me-1' /> Accounts</h5>
              <hr />
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead className='table-dark'>
                    <tr>
                      <th>Branch Code</th>
                      <th>Account#</th>
                      <th>Name</th>
                      <th>CNIC</th>
                      <th>Phone</th>
                      <th>Date of Opening</th>
                      <th>Type</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accounts.map((account) => {
                      const { _id, branchCode, fullName, formattedDate, idCard, phone, accountNumber, accountType, deposit } = account;
                      return (
                        <tr key={_id}>
                          <td>{branchCode}</td>
                          <td style={{ cursor: "pointer", color: "blue" }} onClick={() => { showModal(_id) }}>{accountNumber}</td>
                          <td>{fullName}</td>
                          <td>{idCard}</td>
                          <td>{phone}</td>
                          <td>{formattedDate}</td>
                          <td>{accountType}</td>
                          <td>{deposit}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* model accounts detailst*/}
      <Modal
        open={open}
        onCancel={handleCancel}

        footer={[

          <div key="modal-footer" className='d-flex justify-content-end align-items-center'>
            <Button key="deposite-button" className='bg-success text-white d-flex justify-content-center align-items-center' onClick={showModal1}>
              <CreditCardOutlined />Deposite
            </Button>

            <Button key="withdraw-button" type="primary" className='d-flex justify-content-center align-items-center' onClick={showModal2} >
              <ArrowDownOutlined />Withdraw
            </Button>
          </div>

        ]}
      >
        <div className='d-flex justify-content-between align-items-center mt-5'>
          <h4>Account Details</h4>
          <button className='bg-danger border-0 rounded-2 text-white py-1 px-2 d-flex align-items-center justify-content-center' onClick={() => { handleDeleteAccount(selectedAccount._id) }} ><DeleteOutlined className='me-2' /> Delete Account</button>
        </div>
        {selectedAccount && (
          <div style={{ width: "320px", marginTop: "30px" }}>
            <div className='d-flex justify-content-between'>
              <h6>Branch Code</h6>
              <p>{selectedAccount.branchCode}</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h6>Account#</h6>
              <p>{selectedAccount.accountNumber}</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h6>Full Name</h6>
              <p>{selectedAccount.fullName}</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h6>Date of opening</h6>
              <p>{selectedAccount.formattedDate}</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h6>Type</h6>
              <p>{selectedAccount.accountType}</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h6>Balance</h6>
              <p>{selectedAccount.deposit}</p>
            </div>
          </div>
        )}

      </Modal>
      {/* Deposit model */}
      <Modal
        open={open1}
        onCancel={handleCancel1}

        footer={[
          <div className='d-flex justify-content-end align-items-center'>
            <Button className='bg-success text-white d-flex justify-content-center align-items-center'>
              <CreditCardOutlined /> Deposite
            </Button>
          </div>
        ]}
      >
        <div>
          <h4>Deposite Amount</h4>
        </div>
        <div className='mt-4'>
          <input type="number" placeholder='Enter Amount (Min: 500)' size="large" className='form-control mb-3' />
          <textarea rows="1" placeholder='Description' className='form-control'></textarea>
        </div>
      </Modal>
      {/* withdraw model */}
      <Modal
        open={open2}
        onCancel={handleCancel2}

        footer={[
          <div className='d-flex justify-content-end align-items-center'>
            <Button type='primary' className='d-flex justify-content-center align-items-center'>
              <ArrowDownOutlined /> Withdraw
            </Button>
          </div>
        ]}
      >

        <div>
          <h4>Withdraw Amount</h4>
        </div>
        <div className='mt-4'>
          <input type="number" placeholder='Withdraw Amount (Min: 500)' size="large" className='form-control mb-3' />
          <textarea rows="1" placeholder='Description' className='form-control'></textarea>
        </div>

      </Modal>


    </>
  )
}
