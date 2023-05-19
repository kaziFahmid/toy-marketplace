import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseTitle from '../../UseTitle';

export default function MyToys() {
  const { user } = useContext(AuthContext);
  const [MySellerInfo, setMySellerInfo] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  UseTitle('MyToys')
  useEffect(() => {
    fetch(`https://toy-server-nine.vercel.app/addedtoys?email=${user.email}&sort=${sortOrder}`)
      .then(res => res.json())
      .then(data => setMySellerInfo(data));
  }, [user, sortOrder]);
  
  let handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://toy-server-nine.vercel.app/addedtoys/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              const remaining = MySellerInfo.filter(x => x._id !== _id);
              setMySellerInfo(remaining);
            }
          });
      }
    });
  };
  const handleSortAsc = () => {
    setSortOrder('asc');
  };
  
  const handleSortDesc = () => {
    setSortOrder('desc');
  };
  
  return (
    <>
      <div className="my-5 table-responsive">

      <h1 className='text-danger mb-3'>My Toys</h1>
    
<div className="btn-group">
  <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Sort
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#" onClick={handleSortAsc}>Sort by Asc</a></li>
    <li><a className="dropdown-item" href="#" onClick={handleSortDesc}>Sort by Desc</a></li>
  
  </ul>
</div>
        <table className="table table-sm mt-3">
          <thead>
            <tr>
              <th scope="col">Seller</th>
              <th scope="col">Toy Name</th>
              <th scope="col">Sub-category</th>
              <th scope="col">Price</th>
              <th scope="col">Available Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {MySellerInfo.map(seller => (
              <tr key={seller._id}>
                <td scope="row">{seller.sellername}</td>
                <td>{seller.name}</td>
                <td>{seller.subcategory}</td>
                <td>{seller.price}</td>
                <td>{seller.quantity}</td>
                <td>
                  <Link to={`/update/${seller._id}`}>
                    <button className="btn btn-danger">Update</button>
                  </Link>
                  <button className="btn btn-danger mt-2 mt-md-0 ms-md-2" onClick={() => handleDelete(seller._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
