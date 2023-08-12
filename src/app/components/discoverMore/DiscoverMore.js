import React from 'react'
import '../discoverMore/DiscoverMore.css'
import Image from 'next/image'
import DiscoverCard from './discoverCard/DiscoverCard'
// import img11 from '../../assets/Image Placeholder (2).png'
// import img12 from '../../assets/Artist Avatar & Name.png'
// import img21 from '../../assets/Image Placeholder (3).png'
// import img22 from '../../assets/Artist Avatar & Name (1).png'
// import img31 from '../../assets/Image Placeholder (4).png'
// import img32 from '../../assets/Artist Avatar & Name (2).png'

export default function DiscoverMore() {
    return (
        <div className='discover p-3'>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <p className=' text-white h5 display-5 fw-bold '>Discover More NFTs</p>
                        <p className='text-white fs-4 font-monospace'>Explore new trending NFTs.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row ">
                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <DiscoverCard src='/Image Placeholder (2).png' name="Life of Edena" img2='/Artist Avatar & Name.png' />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <DiscoverCard src='/Image Placeholder (3).png' name="Life of Edena" img2='/Artist Avatar & Name (1).png' />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <DiscoverCard src='/Image Placeholder (4).png' name="Life of Edena" img2='/Artist Avatar & Name (2).png' />
                    </div>
                </div>
            </div>
        </div>
    )
}
