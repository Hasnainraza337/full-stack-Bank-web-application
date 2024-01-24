import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ArrowLeftOutlined, DeleteOutlined, CreditCardOutlined, ArrowDownOutlined } from "@ant-design/icons"
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Accounts() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const showModal = () => {
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
  };
  const handleCancel1 = () => {
    setOpen1(false);
  };
  const handleCancel2 = () => {
    setOpen2(false);
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
                      <th scope="col">Branch Code</th>
                      <th scope="col">Account#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Registered</th>
                      <th scope="col">Type</th>
                      <th scope="col">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td style={{ cursor: "pointer",color:"skyblue" }} onClick={showModal}>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td><Link className='text-decoration-none' style={{ color: "skyblue", fontWeight: "500" }}>Mark</Link></td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td><Link className='text-decoration-none' style={{ color: "skyblue", fontWeight: "500" }}>Jacob</Link></td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                    </tr>
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

          <div className='d-flex justify-content-end align-items-center'>
            <Button className='bg-success text-white d-flex justify-content-center align-items-center' onClick={showModal1}>
              <CreditCardOutlined />Deposite
            </Button>

            <Button type="primary" className='d-flex justify-content-center align-items-center' onClick={showModal2} >
              <ArrowDownOutlined />Withdraw
            </Button>
          </div>

        ]}
      >
        <div className='d-flex justify-content-between align-items-center mt-5'>
          <h4>Account Details</h4>
          <button className='bg-danger border-0 rounded-2 text-white py-1 px-2 d-flex align-items-center justify-content-center'><DeleteOutlined className='me-2' /> Delete Account</button>
        </div>
        <div style={{ width: "300px", marginTop: "30px" }}>
          <div className='d-flex justify-content-between'>
            <h6>Branch Code</h6>
            <p>1</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Account#</h6>
            <p>19322805</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Full Name</h6>
            <p>Raza</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Registered</h6>
            <p>24/01/2024</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Type</h6>
            <p>current</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Balance</h6>
            <p>0</p>
          </div>
        </div>
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
