import React, { createContext, useEffect, useState } from "react"
import { useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { toast } from "react-toastify"

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const { API, authorizationToken } = useAuthContext();
    const [accounts, setAccounts] = useState([])

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
            const response = await fetch(`${API}/api/admin/accounts/update/${updateBalance._id}`, {
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
            } else {
                const errorData = await response.json();
                throw new Error(`Error updating account: ${errorData.message}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Account delete
    const deleteAccount = async (accountId) => {
        try {
            const response = await fetch(`${API}/api/admin/accounts/delete/${accountId}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            })
            if (response.ok) {
                toast.success("Account deleted successfully")
                getAllAccounts()
            } else {
                const errorData = await response.json(); // Assuming your server returns JSON error messages
                throw new Error(`Error deleting account: ${errorData.message}`);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllAccounts()
    }, [])

    return (
        <DataContext.Provider value={{ accounts, updateAccount, deleteAccount, getAllAccounts }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)