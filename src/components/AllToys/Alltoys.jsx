import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../UseTitle';

export default function Alltoys() {
  const [allSellerInfo, setAllSellerInfo] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  UseTitle('All Toys');

  useEffect(() => {
    fetch('https://toy-server-nine.vercel.app/addedtoys?limit=20')
      .then(res => res.json())
      .then(data => setAllSellerInfo(data));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredToys = allSellerInfo.filter((toy) => {
    return toy.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="my-5 table-responsive">
      <h1 className='text-danger mb-3'>All Toys</h1>
      <div className='text-center mb-5'> 
        <input type="search" className='w-25' placeholder='Search' value={searchQuery} onChange={handleSearch} />
      </div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Seller</th>
            <th scope="col">Toy Name</th>
            <th scope="col">Sub-category</th>
            <th scope="col">Price</th>
            <th scope="col">Available Quantity</th>
            <th scope="col">View Details button</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((seller) => (
            <tr key={seller._id}>
              <td scope="row">{seller.sellername}</td>
              <td>{seller.name}</td>
              <td>{seller.subcategory}</td>
              <td>{seller.price}</td>
              <td>{seller.quantity}</td>
              <td>
                <Link to={`/addedtoysdetails/${seller._id}`}>
                  <button className="btn btn-danger">View Details button</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
