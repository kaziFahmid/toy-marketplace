
import React, { createContext, useEffect, useState } from 'react'
import app from '../../firebase-config'

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

export const AuthContext=createContext()
const auth = getAuth(app);
export default function AuthProvider({children}) {

    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
const googleProvider= new GoogleAuthProvider()
    const signupUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const userInfo={
        user,
        signupUser,
        loginUser,
        loading,
        logOut,
        googleSignIn
    }
  return (
    <div>

      <AuthContext.Provider value={userInfo}>
{children}
      </AuthContext.Provider>
    </div>
  )
}
