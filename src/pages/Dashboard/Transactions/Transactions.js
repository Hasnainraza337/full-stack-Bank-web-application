import { Button } from 'antd'
import React from 'react'
import { ArrowLeftOutlined, TransactionOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'

export default function Transactions() {
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
                      <th scope="row">1</th>
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
    </>
  )
}
