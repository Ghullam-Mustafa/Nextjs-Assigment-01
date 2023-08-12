import React from 'react'
import '../cards/cardsCss/Cards.css'
import Image from 'next/image'

export default function Cards(props) {
    return (
        <div>
            <div class="card card-collection   bg-transparent border-0" style={{ width: '17rem' }}>
                <Image src={props.src1} width={330} height={330} class="card-img-top img-fluid " alt="..." />
                <br />
                <div class="  bg-transparent">
                    <div className="row ">
                        <div className="col-4">
                            <Image src={props.src2} width={100} height={100} className='img-fluid' alt="" />
                        </div>
                        <div className="col-4">
                            <Image src={props.src3} width={100} height={100} className='img-fluid' alt="" />
                        </div>
                        <div className="col-4">
                            <Image src={props.src4} width={100} height={100} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <p className='text-white  fw-bold fs-5 '>{props.title}</p>
                    <Image src={props.src5} width={330} height={24} alt="" />
                </div>
            </div>
        </div>
    )
}
