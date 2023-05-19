import React from 'react';
import UseTitle from '../../UseTitle';

export default function About() {
  UseTitle("About")
  return (
    <div className="about my-5">
      <h1 className="text-danger text-center mt-5">About Us</h1>
      <div className='d-md-flex align-items-center justify-content-center gap-4 '>
       <div>
       <img src='https://www.komar.de/media/cms/fileadmin/user_upload/Category/Fototapeten/Marvel/komar-fototapeten-marvel.jpg' className='img-fluid'/>
       </div>
       <p>The master of superpowers skilfully climbs buildings, leaps across New York's skyline and will soon also be doing so along the walls of his fan community's bedrooms. The thrilling explosions of colours on these prints seem so vibrant that the popular Marvel character and his superpowers are literally almost jumping out of the image at onlookers.</p>
       
      </div>
    </div>
  );
}
