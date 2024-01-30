import { Button } from 'antd'
import React from 'react'

export default function Hero() {
  return (
    <>
      <div className='homebg'>
        <div className="container py-2">
          <div className="row">
            <div className="col">
              <h1 className='text-center text-white'>Welcome to ABC Bank</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-6 col-lg-6 mb-3">
              <div className="card homeCard py-4 px-3">
                <h1 className='text-white' style={{ fontWeight: 500 }}>Your Trusted Financial Partner</h1>
                <p className='text-white'> At ABC Bank, we are committed to providing exceptional banking services to our customers.
                  With a legacy of trust and integrity, we strive to meet your financial needs and help you achieve
                  your goals.</p>
                <Button style={{ width: 100 }}>See Offer</Button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card homeCard py-4 px-3" style={{ minHeight: "270px" }}>
                <h1 className='text-white' style={{ fontWeight: 500 }}>Our Services</h1>
                <p className='text-white'> Explore a wide range of financial services tailored to meet your individual and business needs.
                  From savings accounts to loans, we have you covered. Our cutting-edge online banking platform
                  ensures convenient access to your accounts anytime, anywhere.</p>
                <Button style={{ width: 100 }}>See Offer</Button>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-6 col-lg-6 mb-3">
              <div className="card homeCard py-4 px-3">
                <h1 className='text-white' style={{ fontWeight: 500 }}>Why Choose ABC Bank?</h1>
                <ul className='text-white'>
                  <li>Secure and reliable banking solutions</li>
                  <li>Competitive interest rates</li>
                  <li>Personalized customer service</li>
                  <li>Innovative online and mobile banking</li>
                </ul>
                <Button style={{ width: 100 }}>See Offer</Button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card homeCard py-4 px-3" style={{ minHeight: "250px" }}>
                <h1 className='text-white' style={{ fontWeight: 500 }}>Contact Us</h1>
                <p className='text-white'> Have questions or need assistance? Our dedicated customer support team is here to help.
                  Contact us via phone, email, or visit one of our branches for in-person assistance.</p>
                <Button style={{ width: 100 }}>See Offer</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
