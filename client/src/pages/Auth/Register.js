import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import signpic from "../../assets/images/signup-png.svg"
import Title from 'antd/es/typography/Title'
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidUserPlus, BiSolidLock } from "react-icons/bi"
import { MdEmail, MdSlideshow } from "react-icons/md"
import { BsTelephonePlusFill } from "react-icons/bs"

const initialState = { fullName: '', email: '', phone: '', password: '' }

export default function Register() {
 

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className='card-left'>
                  <Title level={2} className='m-0 mb-4'>Sign up</Title>

                  <Form layout="vertical" autoComplete='off'
                    method='POST'
                  // onFinish={createUser}

                  >
                    <Form.Item name='fullName'
                    >
                      <Input
                        prefix={<BiSolidUserPlus style={{ fontSize: "20px", marginRight: "6px" }} />}
                        placeholder='Enter Name' name='fullName' className='all-input'
                      />
                    </Form.Item>
                    <Form.Item name='email'
                    >
                      <Input
                        prefix={<MdEmail style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Enter Email' name='email' className='all-input'
                      />
                    </Form.Item>
                    <Form.Item name='phone'
                    >
                      <Input
                        prefix={<BsTelephonePlusFill style={{ fontSize: "16px", marginRight: "6px" }} />}
                        placeholder='Enter Phone' name='phone' className='all-input'
                      />
                    </Form.Item>
                    <Form.Item name='password'
                      
                    >
                      <Input.Password
                        prefix={<BiSolidLock style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Enter Password' name='password' className='all-input'
                      />
                    </Form.Item>
                     

                    <Button className='mt-1' type='primary' htmlType='submit'>Register</Button>

                  </Form>
                </div>

                <div className="card-right">
                  <img src={signpic} alt="Signup image" style={{ width: "350px" }} />
                  <p className='text-center mt-3'><Link to="/auth/login" className='reglink'>I am already register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
