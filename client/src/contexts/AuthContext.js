import React, { createContext, useEffect, useState } from "react"
import { useContext } from "react";



const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const authorizationToken = `Bearer ${token}`

    const API = process.env.REACT_APP_BACKEND_HOST_URL

    const storeTokenInLs = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token", serverToken)
    }

    const isLoggedIn = !!token;
    // console.log(isLoggedIn)

    // console.log(user.isAdmin)
    // user logout
    const userLogout = () => {
        setToken("");
        user.isAdmin = undefined
        return localStorage.removeItem("token")
    }


    // jwt Autentication and get currently user data

    const userAuthentication = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            })
            if (response.ok) {
                const data = await response.json();
                // console.log(data.userData)
                setUser(data.userData)
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        } catch (error) {
            console.log("fecthing data error")
        }
    }

    useEffect(() => {
        userAuthentication()
    }, [isLoggedIn])


    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, storeTokenInLs, userLogout, user, authorizationToken, API }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)