import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import Loginpic from "../../assets/images/login.svg"
import Title from 'antd/es/typography/Title'
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidLock } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import { toast } from "react-toastify"
import { useAuthContext } from "../../contexts/AuthContext"

const initialState = { email: '', password: '' }

export default function Login() {
  const [state, setState] = useState(initialState)
  const navigate = useNavigate();
  const { storeTokenInLs, API } = useAuthContext();
  const [form] = Form.useForm();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(s => ({ ...s, [name]: value }))
  }

  const URL = `${API}/api/auth/login`

  const handleLogin = async () => {
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
        // console.log(res_data)
        storeTokenInLs(res_data.token)
        form.resetFields();
        toast.success("Login Successfull")
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

                <div className="card-left">
                  <img src={Loginpic} alt="Signin image" style={{ width: "300px" }} />
                  <p className='text-center mt-3'><Link to="/auth/register" className='reglink'>Create an Account</Link></p>
                </div>

                <div className='card-right'>
                  <Title level={2} className='m-0 mb-4'>Sign in</Title>

                  <Form layout="vertical" autoComplete='off'
                    form={form}
                    onFinish={handleLogin}

                  >
                    <Form.Item name='email'

                    >
                      <Input
                        prefix={<MdEmail style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Your Email' name='email' className='allinput'
                        onChange={handleChange}
                      />
                    </Form.Item>
                    <Form.Item name='password'

                    >
                      <Input.Password
                        prefix={<BiSolidLock style={{ fontSize: "18px", marginRight: "6px" }} />}
                        placeholder='Your Password' name='password' className='allinput'
                        onChange={handleChange}
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
