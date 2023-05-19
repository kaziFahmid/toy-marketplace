import React from 'react'
import { useLoaderData } from 'react-router-dom'
import UseTitle from '../../UseTitle'

export default function AddedToysDetails() {
    UseTitle("AddedToysDetails")
    const data=useLoaderData()
    console.log(data)
  return (
    <div>
<div className="card w-md-50 mx-auto my-5"   >
  <img src={data.photo} className="card-img-top img-fluid w-50 mx-auto" alt="..."/>
  <div className="card-body">
    <h1 className="card-title">{data.name}</h1>
    <p><b className='text-danger'>Sellername</b> :{data.sellername}</p>
    <p>Selleremail:{data.selleremail}</p>
    <p>Subcategory:{data.subcategory}</p>
    <p>Price:{data.price}</p>
    <p>Rating:{data.rating}</p>
    <p>Quantity:{data.quantity}</p>
    <p>Details:{data.details}</p>
  </div>
</div>
      
    </div>
  )
}
