import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ArrowLeftOutlined, DeleteOutlined, CreditCardOutlined, ArrowDownOutlined } from "@ant-design/icons"
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useDataContext } from '../../../contexts/DataContext';
import { toast } from 'react-toastify';

export default function Accounts() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const { accounts, deleteAccount, updateAccount, updateWithdrawBalance, isPrecessing } = useDataContext()
  const [state, setState] = useState({ deposit: 0 });
  const [withdraw, setWithdraw] = useState({ deposit: 0 });


  const handleChangeDeposit = (e) => {
    const { name, value } = e.target;
    const convertedValue = name === 'deposit'
      ? parseInt(value, 10) || 0
      : value;
    setState(s => ({ ...s, [name]: convertedValue }))
  }
  const handleChangeWithdraw = (e) => {
    const { name, value } = e.target;
    const convertedValue = name === 'deposit'
      ? parseInt(value, 10) || 0
      : value;
    setWithdraw(s => ({ ...s, [name]: convertedValue }))
  }


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


  const handleDeposite = async () => {
    try {
      if (state.deposit === 0) {
        return toast.error("Please Enter Amount Greater than 0 for Deposit")
      }
      const updateBalance = {
        ...selectedAccount,
        deposit: state.deposit
      }
      await updateAccount(updateBalance)
      setOpen1(false)
      setState({ deposit: 0 })
    } catch (error) {
      console.log(error)
    }
  };
  const handleWithdraw = async () => {
    try {
      if (withdraw.deposit === 0) {
        return toast.error("Please Enter Amount Greater than 0 For Withdraw")
      }
      if (withdraw.deposit > selectedAccount.deposit) {
        return toast.error("Insufficient Balance");
      }
      const updateWithdraw = {
        ...selectedAccount,
        deposit: withdraw.deposit
      }
      await updateWithdrawBalance(updateWithdraw)
      setOpen2(false)
      setWithdraw({ deposit: 0 })
    } catch (error) {
      console.log(error)
    }
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
          <button className='bg-danger border-0 rounded-2 text-white py-1 px-2 d-flex align-items-center justify-content-center' onClick={() => { handleDeleteAccount(selectedAccount._id) }} disabled={isPrecessing} ><DeleteOutlined className='me-2' />
            {isPrecessing ? (
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            ) : (
              'Delete Account'
            )}
          </button>
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
              <h6>Account Title</h6>
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
          <div key="model-footer" className='d-flex justify-content-end align-items-center'>
            <Button key="update-deposit" className='bg-success text-white d-flex justify-content-center align-items-center' onClick={handleDeposite} loading={isPrecessing}>
              <CreditCardOutlined /> Deposite
            </Button>
          </div>
        ]}
      >
        <div>
          <h4>Deposite Amount</h4>
        </div>
        <div className='mt-4'>
          <input type="number" name='deposit' placeholder='Enter Amount' onChange={handleChangeDeposit} size="large" className='form-control mb-3' />
          {/* <textarea rows="1" placeholder='Description' className='form-control'></textarea> */}
        </div>
      </Modal>
      {/* withdraw model */}
      <Modal
        open={open2}
        onCancel={handleCancel2}

        footer={[
          <div key="model-footer" className='d-flex justify-content-end align-items-center'>
            <Button key="withdraw-button" type='primary' onClick={handleWithdraw} loading={isPrecessing} className='d-flex justify-content-center align-items-center'>
              <ArrowDownOutlined /> Withdraw
            </Button>
          </div>
        ]}
      >

        <div>
          <h4>Withdraw Amount</h4>
        </div>
        <div className='mt-4'>
          <input type="number" name='deposit' placeholder='Withdraw Amount' onChange={handleChangeWithdraw} size="large" className='form-control mb-3' />
          {/* <textarea rows="1" placeholder='Description' className='form-control'></textarea> */}
        </div>

      </Modal>


    </>
  )
}
