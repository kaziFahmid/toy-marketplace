import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Toys() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('https://toy-server-nine.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  let handleViewChange =()=>{
    alert("You have to log in first to view details")
  }
  const types = [...new Set(toys.map((toy) => toy.type))];

  return (
    <>
      <h1 className='text-danger text-center mt-5'>Toys</h1>
      <div>
        <Tabs>
          <TabList>
            <Tab>marvel</Tab>
            <Tab>star_wars</Tab>
            <Tab>transformers</Tab>
          </TabList>

          <TabPanel>
            <div className='d-flex gap-4 flex-column flex-md-row justify-content-center align-items-center'>
              {toys
                .filter((x) => x.type === 'marvel')
                .slice(0, 2)
                .map((x) => (
                  <div className='card'  data-aos="flip-left" key={x._id} style={{ width: '18rem', height: '100%' }}>
                    <img src={x.image} className='card-img-top' alt='...' style={{ objectFit: 'contain', height: '200px' }} />
                    <div className='card-body'>
                      <h5 className='card-title'>{x.name}</h5>
                      <p className='card-text'>Price: {x.price}</p>
                      <p className='card-text'>Rating: {x.rating}</p>
                      <Link onClick={handleViewChange}to={`/toys/${x._id}`} className='btn btn-danger'>
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='d-flex gap-4 flex-column flex-md-row justify-content-center  align-items-center'>
              {toys
                .filter((x) => x.type === 'star_wars')
                .slice(0, 2)
                .map((x) => (
                  <div className='card' data-aos="flip-left" key={x._id} style={{ width: '18rem', height: '100%' }}>
                    <img src={x.image} className='card-img-top' alt='...' style={{ objectFit: 'contain', height: '200px' }} />
                    <div className='card-body'>
                      <h5 className='card-title'>{x.name}</h5>
                      <p className='card-text'>Price: {x.price}</p>
                      <p className='card-text'>Rating: {x.rating}</p>
                      <Link onClick={handleViewChange} to={`/toys/${x._id}`} className='btn btn-danger'>
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='d-flex gap-4 flex-column flex-md-row justify-content-center  align-items-center'>
              {toys
                .filter((x) => x.type === 'transformers')
                .slice(0, 2)
                .map((x) => (
                  <div className='card' data-aos="flip-left" key={x._id} style={{ width: '18rem', height: '100%' }}>
                    <img src={x.image} className='card-img-top' alt='...' style={{ objectFit: 'contain', height: '200px' }} />
                    <div className='card-body'>
                      <h5 className='card-title'>{x.name}</h5>
                      <p className='card-text'>Price: {x.price}</p>
                      <p className='card-text'>Rating: {x.rating}</p>
                      <Link to={`/toys/${x._id}`} onClick={handleViewChange}className='btn btn-danger'>
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
