import React, { Children, useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const{user,loading}=useContext(AuthContext)
    let location = useLocation();
    if(loading){
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    
  
}
