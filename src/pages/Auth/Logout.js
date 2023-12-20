// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useAuthContext } from '../../contexts/AuthContext';

// export default function Logout() {
//     const { dispatch } = useAuthContext()
//     const navigate = useNavigate();
//     // Promises
//     useEffect(() => {
//         fetch("/logout", {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json"
//             },
//             credentials: "include"
//         }).then((res) => {
//             dispatch({ type: "SET_LOGGED_OUT" })
//             navigate("/auth/login", { replace: true })
//             if (res.status !== 200) {
//                 const error = new Error(res.error)
//                 throw error;
//             }
//         }).catch((err) => {
//             console.log(err)
//         })
//     }, [])


//     return (
//         <>

//         </>
//     )
// }
