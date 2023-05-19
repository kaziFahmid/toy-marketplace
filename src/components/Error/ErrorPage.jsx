import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='d-flex flex-column mt-5'>
    <Link to={'/'}> <button className='btn btn-danger text-white'>Back To Homepage</button></Link>
     <img  src='https://www.sumydesigns.com/wp-content/uploads/2019/03/404-error.jpg' className='w-50 mt-5'/>
    </div>
  )
}
