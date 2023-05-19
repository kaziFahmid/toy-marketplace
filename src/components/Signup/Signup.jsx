import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import {  updateProfile } from "firebase/auth";
import UseTitle from '../../UseTitle';
export default function Signup() {
const {signupUser}=useContext(AuthContext)
const[passErr,setPassErr]=useState('')
const[passLength,setPassLength]=useState('')
UseTitle('Signup')
const handleSignup = (e) => {
  e.preventDefault();
  const name = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmpassword = e.target.confirmpassword.value;
  const photoUrl = e.target.photourl.value;
  
  if(password.length<6){
    return setPassLength('Password should be atleast 6 characters')
  }
  if(password!==confirmpassword){
    return setPassErr('Password doesnot match')
  }
  e.target.reset()
  signupUser(email, password)
    .then((result) => {
      const user = result.user;
  console.log(user)

  updateProfile(user, {
    displayName: name, photoURL: photoUrl
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });

    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
  return (
    <div>
    <h1 className="text-danger text-center mt-4">FunToys</h1>
    <p className="text-center mt-2">Get the most high-quality action figures</p>
  
    <form className="w-md-50 mx-auto mb-5 mt-5 shadow p-5" onSubmit={handleSignup}>
        <h2 className='text-danger'>Signup</h2>
      <div className="form-group mt-3">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" name="username" required />
      </div>
  
      <div className="form-group mt-3">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" name="email"required />
      </div>
  
      <div className="form-group mt-3">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" name="password" required/>
        <p className='text-danger'>{passLength}</p>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="password">Confirm Password</label>
        <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" required/>
        <p className='text-danger'>{passErr}</p>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="password">Photo URL</label>
        <input type="text" className="form-control" id="file" name="photourl"required />
      </div>
  <p className='mt-2'>Have account <Link to='/login'> Login</Link></p>
<div className='text-center'>

    <button className='text-white btn btn-danger mt-3 px-5'>SignUp</button>
</div>
  
    </form>
  </div>
  
  )
}
