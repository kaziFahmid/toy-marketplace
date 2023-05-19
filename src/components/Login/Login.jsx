import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import UseTitle from '../../UseTitle'

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();

  const{loginUser, googleSignIn,user}=useContext(AuthContext)
  let from = location.state?.from?.pathname || "/";
  UseTitle('Login')
  const[passErr,setPassErr]=useState('')
let handleLogin =(e)=>{
  e.preventDefault()
  
  const email = e.target.email.value;
  const password = e.target.password.value;
  if(password.length<6){
    return setPassErr('password should be 6 characters')
  }
 
  
  loginUser(email, password)
    .then((result) => {
      const user = result.user;
  console.log(user)
  navigate(from, { replace: true });
    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

let handleGoogleSignin =()=>{
  googleSignIn()
  .then(result=>{
     console.log(result.user )
     navigate(from, { replace: true });
  
  })
  .catch(error=> console.log(error))
}


  return (
    <div>
        <h1 className='text-danger text-center mt-4 '>FunToys</h1>
        <p className='text-center mt-2'>Get the most high quality action figures </p>
         <form className="w-md-50 mx-auto mb-5 mt-5 shadow " onSubmit={handleLogin}>
        <div className=" p-5">
          <h2 className="text-center mb-4 text-danger">Login</h2>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name='email' defaultValue={user?.email}className="form-control" required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name='password' className="form-control"required />
            <p className='text-danger'>{passErr}</p>
            <Link>Forgot Password?</Link>
          </div>
         <p>You dont have account ?<Link to='/signup'>create an account</Link></p>

      <div className='text-center'>
      <button className=' btn btn-light mt-4 text-black px-5' onClick={handleGoogleSignin}>Google</button><br/>
          <button className="btn btn-danger text-white px-5 mt-3">Login</button>
      </div>

        </div>
      </form>

      
    </div>
  )
}
