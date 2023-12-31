import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import signpic from "../../assets/images/signup-png.svg"
import Title from 'antd/es/typography/Title'
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidUserPlus, BiSolidLock } from "react-icons/bi"
import { MdEmail, MdSlideshow } from "react-icons/md"
import { BsTelephonePlusFill } from "react-icons/bs"

const initialState = { fullName: '', email: '', phone: '', password: '', confirmPassword: '' }

export default function Register() {

  // const [state, setState] = useState(initialState)
  // const navigate = useNavigate()
  // const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  // const createUser = async () => {

  //   const { fullName, email, phone, work, password, confirmPassword } = state;

  //   const res = await fetch('/signup', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       fullName, email, phone, work, password, confirmPassword
  //     })
  //   });

  //   const data = await res.json();

  //   if (data.status === 422 || !data) {
  //     console.log("invalid data")
  //   } else {
  //     console.log("Registration successfully")
  //     navigate("/auth/login")

  //   }

  // }

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
                      rules={[
                        {
                          required: true,
                          message: "Please type your name."
                        },
                        { whitespace: true },
                        { min: 3 }
                      ]}
                      hasFeedback
                    >
                      <Input
                        prefix={<BiSolidUserPlus style={{ fontSize: "20px", marginRight: "6px" }} />}
                        placeholder='Your Name' name='fullName' className='all-input'
                      />
                    </Form.Item>
                    <Form.Item name='email'
                      rules={[
                        {
                          required: true,
                          message: 'Please type your email correctly.'
                        },
                        { type: 'email', message: 'Please enter a valid email.' }

                      ]}
                      hasFeedback
                    >
                      <Input
                        prefix={<MdEmail style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Your Email' name='email' className='all-input'
                      />
                    </Form.Item>
                    <Form.Item name='phone'
                      rules={[
                        {
                          required: true,
                          message: 'Please type your phone correctly.'
                        },

                      ]}
                      hasFeedback
                    >
                      <Input
                        prefix={<BsTelephonePlusFill style={{ fontSize: "16px", marginRight: "6px" }} />}
                        placeholder='Your Phone' name='phone' className='all-input'
                      />
                    </Form.Item>
                    <Form.Item name='password'
                      rules={[
                        {
                          required: true,
                        },
                        { min: 6 }
                      ]}
                      hasFeedback
                    >
                      <Input.Password
                        prefix={<BiSolidLock style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Your Password' name='password' className='all-input'
                      />
                    </Form.Item>
                    <Form.Item name='confirmPassword'
                      dependencies={['password']}
                      rules={[
                        {
                          required: true,
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve()
                            }
                            return Promise.reject("Passwod does not match with confirm Password.")
                          }
                        })
                      ]}
                      hasFeedback
                    >
                      <Input.Password
                        prefix={<BiSolidLock style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Confirm Your Password' name='confirmPassword' className='all-input'
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
