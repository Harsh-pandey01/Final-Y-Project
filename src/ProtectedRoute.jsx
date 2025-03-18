import React from 'react'

import { Navigate } from 'react-router-dom'
import { useLogin } from './context/LoginContext'

function ProtectedRoute({children}) {
    const [isLogged] = useLogin()
return isLogged ? <Navigate to='/' /> : children
}

export default ProtectedRoute
