import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import Loginpic from "../../assets/images/login.svg"
import Title from 'antd/es/typography/Title'
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidLock } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
// import { useAuthContext } from '../../contexts/AuthContext'

const initialState = { email: '', password: '' }

export default function Login() {

  


  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">

                <div className="card-left">
                  <img src={Loginpic} alt="Signin image" style={{ width: "300px" }} />
                  <p className='text-center mt-3'><Link to="/auth/register" className='reglink'>Create an Account</Link></p>
                </div>

                <div className='card-right'>
                  <Title level={2} className='m-0 mb-4'>Sign in</Title>

                  <Form layout="vertical" autoComplete='off'
                    method='POST'
                    // onFinish={handleLogin}

                  >
                    <Form.Item name='email'
                     
                    >
                      <Input
                        prefix={<MdEmail style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Your Email' name='email' className='allinput'  
                      />
                    </Form.Item>
                    <Form.Item name='password'
                      
                    >
                      <Input.Password
                        prefix={<BiSolidLock style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Your Password' name='password' className='allinput'  
                      />
                    </Form.Item>

                    <Button className='mt-1' type='primary' htmlType='submit' >Log In</Button>

                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
