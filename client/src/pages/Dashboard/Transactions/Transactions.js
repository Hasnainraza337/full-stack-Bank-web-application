import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ArrowLeftOutlined, TransactionOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'

export default function Transactions() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
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
              <h5 className='text-center primary mt-4'><TransactionOutlined /> Transactions</h5>
              <hr />
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead className='table-dark'>
                    <tr>
                      <th scope="col">Transaction ID</th>
                      <th scope="col">Time</th>
                      <th scope="col">Date</th>
                      <th scope="col">Account ID</th>
                      <th scope="col">Type</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th  style={{ cursor: "pointer",color:"skyblue" }} onClick={showModal}>1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry the Bird</td>
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
      {/* transcetion details model */}
      <Modal
        open={open}
        onCancel={handleCancel}
        footer={null}
      >
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <h5>Account Details of: 1</h5>
        </div>
        <div style={{ width: "300px", marginTop: "30px" }}>
          <div className='d-flex justify-content-between'>
            <h6>Account ID#</h6>
            <p>1</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Account Holder Name#</h6>
            <p>19322805</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Transaction Date</h6>
            <p>Raza</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Transaction Date</h6>
            <p>24/01/2024</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Transaction type</h6>
            <p>current</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Amount</h6>
            <p>0</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h6>Description</h6>
          </div>
        </div>
      </Modal>
    </>
  )
}
