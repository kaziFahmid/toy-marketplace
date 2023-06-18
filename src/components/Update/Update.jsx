import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Update() {

    const data=useLoaderData()

   let  handleUpdate =(e)=>{

     e.preventDefault()
 
   
     const price=e.target.price.value
     const quantity=e.target.quantity.value
     const details=e.target.details.value
     let sellerinfo={
        details,
        price,
        quantity}
     fetch(`https://toy-server-nine.vercel.app/addedtoys/${data._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(sellerinfo)
     })
     .then(res=>res.json())
     .then(data=>{
       if(data.modifiedCount>0){
        toast('updated successfully')
       }
     })

   }
  return (
    <div>
        <div className="container my-5" >
        <ToastContainer />
    <h1 className='text-danger text-center'>Update Toy</h1>
    <form onSubmit={handleUpdate}>
     
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input type="number" defaultValue={data.price} className="form-control"name='price' id="price" required />
      </div>
     
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Available quantity</label>
        <input type="number" className="form-control"name='quantity' id="quantity" defaultValue={data.quantity}  />
      </div>
   <div className="mb-3">
        <label htmlFor="description" className="form-label">Detail description</label>
        <textarea className="form-control" defaultValue={data.details} name='details' id="description" rows="4"></textarea>
      </div>
      <button type="submit" className="btn btn-danger px-5">UpdateToy</button>
    </form>
  </div>
    </div>
  )
}
