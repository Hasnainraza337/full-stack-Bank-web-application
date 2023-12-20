import { Button } from 'antd'
import React from 'react'

export default function Hero() {
  return (
    <>
      <div className='homebg'>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card homeCard py-4 px-3">
                <h1 className='text-white' style={{ fontWeight: 500 }}>get a $200 bonus then make it better</h1>
                <p className='text-white'>Just add savings to a new Online Checking account and maximize
                  your bonus to $250.</p>
                <Button style={{ width: 100 }}>See Offer</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
