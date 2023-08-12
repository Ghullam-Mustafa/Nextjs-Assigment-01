// import React from 'react';
import Image from 'next/image';
import '../trendingCollection/TrendingCollectionCss/TrendingSection.css';
import Cards from './cards/Cards';
// import img11 from '../../assets/Primary Photo Placeholder.png';
// import img12 from '../../assets/Secondary Photo Placeholder.png';
// import img13 from '../../assets/Secondary Photo Placeholder (1).png';
// import img14 from '../../assets/Number of additional NFTs.png';
// import img15 from '../../assets/Artist Card.png';

// import img21 from '../../assets/Collection Card.png';
// import img22 from '../../assets/Secondary Photo Placeholder (2).png';
// import img23 from '../../assets/Secondary Photo Placeholder (2).png';
// import img24 from '../../assets/Number of additional NFTs.png';
// import img25 from '../../assets/Artist Card (2).png';

// import img31 from '../../assets/Primary Photo Placeholder (1).png';
// import img32 from '../../assets/Secondary Photo Placeholder (3).png';
// import img33 from '../../assets/Secondary Photo Placeholder (3).png';
// import img34 from '../../assets/Number of additional NFTs.png';
// import img35 from '../../assets/Artist Card (3).png';

export default function TrendingCollection() {
    return (
        <>
            <div className='trending border border-0'>
                <div className="container border-0 pb-2">
                    <div className="row">
                        <div className="col">
                            <p className=' text-white h5 display-5 fw-bold '>Trending Collection</p>
                            <p className='text-white fs-4 font-monospace'>Checkout Our Weekly Updated Trending Collection. </p>--
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row d-flex justify-content-around ">
                        <div className="col-lg-4 col-md-12 col-sm-6 ">
                            
                            <Cards src1='/Primary Photo Placeholder.png' src2='/Secondary Photo Placeholder.png' src3='/Secondary Photo Placeholder (1).png' src4='/Number of additional NFTs.png' title="DSGN Animals" src5='/Artist Card.png' />
                        </div>
                       <div className="col-lg-4 col-md-12 col-sm-6 ">
                       <Cards src1='/Primary Photo Placeholder.png' src2='/Secondary Photo Placeholder.png' src3='/Secondary Photo Placeholder (1).png' src4='/Number of additional NFTs.png' title="DSGN Animals" src5='/Artist Card.png' />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-6 ">
                        <Cards src1='/Primary Photo Placeholder (1).png' src2='/Secondary Photo Placeholder (3).png' src3='/Secondary Photo Placeholder (3).png' src4='/Number of additional NFTs.png' title="DSGN Animals" src5='/Artist Card (3).png' />

                        </div> 
                        
                        
                    </div>
                </div>
            </div></>
    )
}
