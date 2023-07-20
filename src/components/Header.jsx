import React from 'react'
import logo from "../assets/logo/W-Back_B-Letter_box.png";

function Header() {
  return (
    <div className=' h-12 flex justify-center my-3'>
        <img src={logo} className=" h-12  " alt="" />
    </div>
  )
}

export default Header