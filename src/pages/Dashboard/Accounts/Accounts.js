import { Button } from 'antd'
import React from 'react'
import { ArrowLeftOutlined } from "@ant-design/icons"
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Accounts() {
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
                      <td><Link className='text-decoration-none' style={{ color: "blue", fontWeight: "500" }}>Mark</Link></td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td><Link className='text-decoration-none' style={{ color: "blue", fontWeight: "500" }}>Mark</Link></td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td><Link className='text-decoration-none' style={{ color: "blue", fontWeight: "500" }}>Jacob</Link></td>
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
