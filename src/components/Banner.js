import React from 'react'
import banner from '../assets/banner.jpeg'
import back from '../assets/back.svg'

const Banner = () => {
  return (
    <div className="container-fluid p-0 position-relative custom-bg-container"
      style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '440px' }}>
      <div className="overlay"></div>
      <div className="container d-flex flex-column h-100 banner-text">
        <div className="d-flex d-lg-none justify-content-between mt-3">
          <button className="btn">
            <img src={back} alt="back" />
          </button>
          <button className="btn join-group">Leave Group</button>
        </div>
        <div>
          <h1 className="text-white">Computer Engineering</h1>
          <p className="text-white mb-5">142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  )
}

export default Banner