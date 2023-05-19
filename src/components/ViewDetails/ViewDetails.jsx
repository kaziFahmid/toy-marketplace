import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'

export default function ViewDetails() {
  const data = useLoaderData()
  console.log(data)
  const { user } = useContext(AuthContext)

  return (
    <div>
      <div className='card col-md-6 mx-auto my-5 text-center p-5'>
        <img src={data.image} className='img-fluid w-50 mx-auto' />

        <div>
          <h1>{data.name}</h1>
          <p><b className='text-danger'>Seller Name:</b> {user.displayName}</p>
          <p><b className='text-danger'>Seller Email:</b> {user.email}</p>
          <p><b className='text-danger'>Price:</b> {data.price}</p>
          <p><b className='text-danger'>Rating:</b> {data.rating}</p>
          <p><b className='text-danger'>Quantity:</b> {data.quantity}</p>
          <p>{data.details}</p>
        </div>
      </div>
    </div>
  )
}
