import React from 'react'
import Image from 'next/image'
import '../howItWorksCards/HowItWorksCards.css'

export default function HowItWorksCards(props) {
  return (
    <div>
        <div className=" rounded-5 border-0 bg-transparent">
                <div class="card cards bg-transparent border-0 " style={{width:'22rem'}} >
                    <Image src={props.src} class="card-img-top" width={250} height={250} className='img-fluid' alt="..." />
                    <div class="card-body">
                        <h3 class="card-text text-center text-white px-1">{props.title}</h3>
                        <p className='text-center text-white '>{props.para}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
