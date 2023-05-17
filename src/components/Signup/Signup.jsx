import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
    <h1 className="text-danger text-center mt-4">FunToys</h1>
    <p className="text-center mt-2">Get the most high-quality action figures</p>
  
    <form className="w-50 mx-auto mb-5 mt-5 shadow p-5">
        <h2 className='text-danger'>Signup</h2>
      <div className="form-group mt-3">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" name="username" />
      </div>
  
      <div className="form-group mt-3">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" name="email" />
      </div>
  
      <div className="form-group mt-3">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" name="password" />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="password">Photo URL</label>
        <input type="file" className="form-control" id="file" name="file" />
      </div>
  <p className='mt-2'>Have account <Link to='/login'> Login</Link></p>
<div className='text-center'>
<button className=' btn btn-light mt-4 text-black px-5'>Google</button><br/>
    <button className='text-white btn btn-danger mt-3 px-5'>SignUp</button>
</div>
  
    </form>
  </div>
  
  )
}
