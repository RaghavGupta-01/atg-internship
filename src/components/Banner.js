import React from 'react'
import banner from '../assets/banner.jpg'
import back from '../assets/back.svg'

const Banner = () => {
  return (
    <div class="container-fluid p-0 position-relative custom-bg-container"
    style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '440px' }}>
    <div class="overlay"></div>
    <div class="container d-flex flex-column h-100 banner-text">
      <div class="d-flex d-lg-none justify-content-between mt-3">
        <button class="btn">
          <img src={back} alt="back" />
        </button>
        <button class="btn join-group">Leave Group</button>
      </div>
      <div>
        <h1 class="text-white">Computer Engineering</h1>
        <p class="text-white mb-5">142,765 Computer Engineers follow this</p>
      </div>
    </div>
  </div>
  )
}

export default Banner