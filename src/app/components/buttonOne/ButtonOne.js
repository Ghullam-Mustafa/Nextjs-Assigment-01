import React from 'react'
import Image from 'next/image'
// import img from '../../assets/RocketLaunch.png'
import '../buttonOne/ButtonOne.css'

export default function ButtonOne() {
  return (
    <div>
        <button  className='btn2'><Image src='/RocketLaunch.png' width={9.45} height={5.67}  /><span className='title'>Get Started</span></button>
    </div>
  )
}
