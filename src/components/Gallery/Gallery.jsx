import React, { useEffect, useState } from 'react'

export default function Gallery() {
    const [gallery,setGallery]=useState([])

    useEffect(()=>{
        fetch('gallery.json')
        .then(res=>res.json())
        .then(data=>setGallery(data))
    },[])
  return (
   <>
   <h1 className='text-danger text-center mt-4'>Gallery</h1>
   
   <div className='d-flex
     mt-5'>
     {gallery.map((x)=><div className='ms-3'><img src={x} className='img-fluid'/> </div> )}
    </div>
   
   </>
  )
}
