import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import signpic from "../../assets/images/signup-png.svg"
import Title from 'antd/es/typography/Title'
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidUserPlus, BiSolidLock } from "react-icons/bi"
import { MdEmail, MdSlideshow } from "react-icons/md"
import { BsTelephonePlusFill } from "react-icons/bs"
import { useAuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify';

const initialState = { userName: '', email: '', phone: '', password: '' }

export default function Register() {
  const [state, setState] = useState(initialState)
  const navigate = useNavigate();
  const { storeTokenInLs, API } = useAuthContext();
  const [form] = Form.useForm();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(s => ({ ...s, [name]: value }))
  }

  const URL = `${API}/api/auth/register`

  const handleRegister = async () => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state)

      })
      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLs(res_data.token)
        form.resetFields();
        toast.success("Registeration Successfull")
        navigate("/")
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
    } catch (error) {
      console.log(error)
    }
  };


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
                    // method='POST'
                    form={form}
                    onFinish={handleRegister}

                  >
                    <Form.Item name='userName'
                    >
                      <Input
                        prefix={<BiSolidUserPlus style={{ fontSize: "20px", marginRight: "6px" }} />}
                        placeholder='Enter Name' name='userName' className='all-input'
                        onChange={handleChange}
                      />
                    </Form.Item>
                    <Form.Item name='email'
                    >
                      <Input
                        prefix={<MdEmail style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Enter Email' name='email' className='all-input'
                        onChange={handleChange}
                      />
                    </Form.Item>
                    <Form.Item name='phone'
                    >
                      <Input
                        prefix={<BsTelephonePlusFill style={{ fontSize: "16px", marginRight: "6px" }} />}
                        placeholder='Enter Phone' name='phone' className='all-input'
                        onChange={handleChange}
                      />
                    </Form.Item>
                    <Form.Item name='password'

                    >
                      <Input.Password
                        prefix={<BiSolidLock style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Enter Password' name='password' className='all-input'
                        onChange={handleChange}
                      />
                    </Form.Item>


                    <Button className='mt-1  ' type='primary' htmlType='submit'>Register</Button>

                  </Form>
                </div>

                <div className="card-right mt-4 mt-lg-0">
                  <img src={signpic} alt="Signup image" style={{ width: "330px" }} />
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
