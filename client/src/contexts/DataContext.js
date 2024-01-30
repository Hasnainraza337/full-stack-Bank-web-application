import React, { createContext, useEffect, useState } from "react"
import { useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { toast } from "react-toastify"

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const { API, authorizationToken } = useAuthContext();
    const [accounts, setAccounts] = useState([])
    const [transactions, setTransactions] = useState([])
    const [isPrecessing, setIsProcessing] = useState(false)

    const getAllAccounts = async () => {
        try {
            const response = await fetch(`${API}/api/admin/accounts`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            })
            // console.log(response)
            if (response.ok) {
                const accountsData = await response.json();
                // console.log(accountsData.accounts)
                setAccounts(accountsData.accounts)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // updated account

    const updateAccount = async (updateBalance) => {
        try {
            setIsProcessing(true)
            const response = await fetch(`${API}/api/admin/accounts/update/deposit/${updateBalance._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(updateBalance),
            });
            if (response.ok) {
                toast.success("Amount Deposit successfully");
                getAllAccounts();
                getTransactionHistory()
                setIsProcessing(false)
            } else {
                setIsProcessing(false)
                const errorData = await response.json();
                throw new Error(`Error updating account: ${errorData.message}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Wihtdraw update
    const updateWithdrawBalance = async (updateWithdraw) => {
        try {
            setIsProcessing(true)
            const response = await fetch(`${API}/api/admin/accounts/update/withdraw/${updateWithdraw._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
                body: JSON.stringify(updateWithdraw)
            })
            if (response.ok) {
                toast.success("Amount Withdraw Successfully")
                getAllAccounts()
                getTransactionHistory()
                setIsProcessing(false)
            }
        } catch (error) {
            console.log(error)
        }
    };

    // Account delete
    const deleteAccount = async (accountId) => {
        try {
            setIsProcessing(true)
            const response = await fetch(`${API}/api/admin/accounts/delete/${accountId}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            })
            if (response.ok) {
                setIsProcessing(false)
                toast.success("Account deleted successfully")
                getAllAccounts()
            } else {
                setIsProcessing(false)
                const errorData = await response.json();
                throw new Error(`Error deleting account: ${errorData.message}`);
            }
        } catch (error) {
            console.log(error)
        }
    }
    // getall Transacion History
    const getTransactionHistory = async () => {
        try {
            const response = await fetch(`${API}/api/admin/transactions`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            })
            if (response.ok) {
                const transactionsData = await response.json();
                setTransactions(transactionsData.transactions)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllAccounts()
        getTransactionHistory()
    }, [])

    return (
        <DataContext.Provider value={{ accounts, updateAccount, isPrecessing, updateWithdrawBalance, deleteAccount, getAllAccounts, transactions, }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)