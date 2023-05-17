import React from 'react'

export default function Login() {
  return (
    <div>
        <h1 className='text-danger text-center mt-4 '>FunToys</h1>
        <p className='text-center mt-2'>Get the most high quality action figures </p>
            <div className="w-50 mx-auto mb-5 mt-5 ">
        <div className="shadow p-5">
          <h2 className="text-center mb-4 text-danger">Login</h2>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name='email' className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name='password' className="form-control" />
          </div>
      <div className='text-center'>
      <button className="btn btn-light text-black">Google</button><br/>
          <button className="btn btn-danger text-white px-5 mt-3">Login</button>
      </div>

        </div>
      </div>

      
    </div>
  )
}
