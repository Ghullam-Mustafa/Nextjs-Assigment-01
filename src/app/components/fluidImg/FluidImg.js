import React from 'react'
import '../fluidImg/FluidImg.css'
import Image  from 'next/image'
// import img from '../../assets/NFT Highlight.png'

export default function FluidImg() {
  return (
    <div className='FluidImg'>
        <div className="container-fluid">
            <Image src='/NFT Highlight.png' width={1280} height={660} alt="" className='img-fluid w-100' />
        </div>
    </div>
  )
}
