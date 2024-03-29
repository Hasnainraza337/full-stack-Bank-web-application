import React, { useEffect, useState } from 'react'
import { PlusOutlined, EyeOutlined, TransactionOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { useDataContext } from "../../../contexts/DataContext"
import { format } from 'date-fns';

export default function Hero() {
  const { accounts, transactions } = useDataContext()
  const [dailyCredit, setDailyCredit] = useState(0);
  const [dailyDebit, setDailyDebit] = useState(0);



  useEffect(() => {
    const currentDate = format(new Date(), "EEEE, dd/MM/yyyy");

    const dailyCreditTransactions = transactions.filter(
      transaction => transaction.transactionType === "Credit" && transaction.transactionDate === currentDate
    );

    const dailyDebitTransactions = transactions.filter(
      transaction => transaction.transactionType === "Debit" && transaction.transactionDate === currentDate
    );

    const totalDailyCredit = dailyCreditTransactions.reduce((total, transaction) => total + transaction.balance, 0);
    const totalDailyDebit = dailyDebitTransactions.reduce((total, transaction) => total + transaction.balance, 0);

    setDailyCredit(totalDailyCredit);
    setDailyDebit(totalDailyDebit);

  }, [transactions]);


  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card dasCard px-3 py-3 mb-4">
              <h5 className='text-center primary d-flex justify-content-center align-items-center'><FaUser className='me-1' /> Accounts</h5>
              <hr className='mt-2' />
              <div className='cardButton py-3 d-flex justify-content-center'>
                <Link to="/dashboard/addaccount" className='text-decoration-none'>
                  <button className='btn btn-primary text-white me-2 mb-2  mb-lg-0 d-flex justify-content-center align-items-center'><PlusOutlined className='me-1' /> Open New Account</button>
                </Link>
                <Link to="/dashboard/accounts" className='text-decoration-none'>
                  <button className='btn btn-info text-white d-flex justify-content-center align-items-center'><EyeOutlined className='me-1' /> View All Acoutns</button>
                </Link>
              </div>
              <hr className='mt-2' />
              <span className='text-center'>{accounts.length}</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card dasCard px-3 py-3">
              <h5 className='text-center primary'><TransactionOutlined /> Transactions</h5>
              <hr className='mt-2' />
              <div className='cardButton d-flex justify-content-center py-3'>
                <Link to="/dashboard/transactions" className='text-decoration-none'>
                  <button className='btn btn-info text-white d-flex justify-content-center align-items-center'><EyeOutlined className='me-1' />View All Transactions</button>
                </Link>
              </div>
              <hr className='mt-2' />
              <span className='text-center'>{transactions.length}</span>
              <div className='creditDebit d-flex justify-content-between'>
                <p className='px-2 py-1' style={{ fontSize: 12, backgroundColor: "#5976", borderRadius: 4 }}>Total Credits Rs: <span style={{ color: "green" }}>{dailyCredit}</span></p>
                <p className='px-2 py-1' style={{ fontSize: 12, backgroundColor: "#5976", borderRadius: 4 }}  >Total Debits Rs: <span style={{ color: "red" }}>{dailyDebit}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
