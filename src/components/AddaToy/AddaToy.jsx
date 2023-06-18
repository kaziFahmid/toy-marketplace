import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import UseTitle from '../../UseTitle'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AddaToy() {
    const {user}=useContext(AuthContext)
    UseTitle("Add A Toy")
    let handleAddToy =(e)=>{
e.preventDefault()
const photo=e.target.photo.value
const name=e.target.name.value
const sellername=e.target.sellername.value
const selleremail=e.target.selleremail.value
const subcategory=e.target.subcategory.value
const price=e.target.price.value
const rating=e.target.rating.value
const quantity=e.target.quantity.value
const details=e.target.details.value

const addedToys={photo,
    name,
    sellername,
    selleremail,
    subcategory,
    price,
    rating,
    quantity,
    details}

   fetch('https://toy-server-nine.vercel.app/addedtoys',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(addedToys)
   }) 
   .then(res=>res.json())
   .then(data=>{
    if(data.insertedId){
      toast("Toy has been added!")
    }
   }
    )

    }
  return (
    <div className="container my-5">
            <ToastContainer />
    <h1 className='text-danger text-center'>Add A Toy</h1>
    <form onSubmit={handleAddToy}>
      <div className="mb-3">
        <label htmlFor="pictureUrl" className="form-label">Picture URL of the toy</label>
        <input type="text" className="form-control" name='photo'id="pictureUrl" required />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" name='name'id="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="sellerName" className="form-label">Seller Name</label>
        <input type="text" defaultValue={user.displayName}className="form-control"name='sellername' id="sellerName" />
      </div>
      <div className="mb-3">
        <label htmlFor="sellerEmail" className="form-label">Seller Email</label>
        <input type="email"  defaultValue={user.email} className="form-control"name='selleremail' id="sellerEmail" />
      </div>
      <div className="mb-3">
        <label htmlFor="subCategory" className="form-label">Sub-category</label>
        <input type="text" className="form-control" name='subcategory' id="subCategory" />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input type="number" className="form-control"name='price' id="price" required />
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">Rating</label>
        <input type="number" className="form-control"name='rating'  id="rating" />
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Available quantity</label>
        <input type="number" className="form-control"name='quantity' id="quantity" />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Detail description</label>
        <textarea className="form-control" name='details' id="description" rows="4"></textarea>
      </div>
      <button type="submit" className="btn btn-danger px-5">Add Toy</button>
    </form>
  </div>
  )
}
