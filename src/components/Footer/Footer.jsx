import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-light shadow-lg text-black">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className=" text-danger fw-bold">FunToys</h2>
              {/* Your logo image or text goes here */}
            </div>
            <div className="col-md-4">
              <h4>Contact Information</h4>
              {/* Your contact information goes here */}
            </div>
            <div className="col-md-4">
              <h4>Social Media</h4>
              {/* Your social media links go here */}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>&copy; 2023 Your Company Name. All rights reserved.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>123 Main Street, City, State ZIP</p>
            </div>
          </div>
        </div>
      </footer>
  )
}