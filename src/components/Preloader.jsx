import React from 'react'
import logo from '../assets/images/png/logo_img.png'
const Preloader = () => {
  return (
    <div id="preloader"
    class="min-vh-100 d-flex align-items-center justify-content-center bg-black position-fixed w-100 top-0 z-3 start-0">
    <div><img src={logo}alt="logo"/></div>
</div>
  )
}

export default Preloader