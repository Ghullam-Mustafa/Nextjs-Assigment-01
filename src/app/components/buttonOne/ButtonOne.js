import React from 'react'
import Image from 'next/image'
// import img from '../../assets/RocketLaunch.png'
import '../buttonOne/ButtonOne.css'

export default function ButtonOne() {
  return (
    <div>
        <button  className='btn2'><Image src='/RocketLaunch.png' width={20} height={20}  /><span className='title'>Get Started</span></button>
    </div>
  )
}
