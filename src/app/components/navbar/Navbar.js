// import React from 'react'
import '../navbar/navbar.css'
// import logo from '../../assets/logo.png'
import Image from 'next/image'
import NavButton from '../navButton/NavButton'
// import hamburger from '../../assets/Burger Menu.png'

export default function Navbar() {
  return (
    <div className='navbar px-5'>
      <div className="one">
        <Image src="/logo.png" className='img-fluid mx-auto' width={200} height={25} />
        {/* <img src={logo} alt="" /> */}
      </div>
      <div className="two">
          <div className="p none text-white">Marketplace</div>
          <div className="p none text-white">Rankings</div>
          <div className="p none text-white">Connect a wallet</div>
          <div className="none"><NavButton /></div>
          <Image src='/Burger Menu.png' width={75} height={75} alt="" className='hamburger' />
      </div>
    </div>
  )
}
