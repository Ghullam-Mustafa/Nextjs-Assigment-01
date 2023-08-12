import React from 'react'
import Image from 'next/image'
import '../topCreater/topcreaterCss/TopCreater.css'
import TopCreaterButton from './topCreaterButton/TopCreaterButton'
import Cards from './topCreaterButton/card/Cards'
// import img1 from '../../assets/Avatar (1).png'
// import img2 from '../../assets/Avatar (2).png'
// import img3 from '../../assets/Avatar (3).png'
// import img4 from '../../assets/Avatar (4).png'
// import img5 from '../../assets/Avatar (5).png'
// import img6 from '../../assets/Avatar (6).png'
// import img7 from '../../assets/Avatar (7).png'
// import img8 from '../../assets/Avatar (8).png'
// import img9 from '../../assets/Avatar (9).png'
// import img10 from '../../assets/Avatar (10).png'
// import img11 from '../../assets/Avatar (11).png'
// import img12 from '../../assets/Avatar (12).png'

export default function TopCreater() {
    return (
        <>
            <div className="topCreater">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <p className=' text-white h5 display-5 pt-5 fw-bold '>Top Creators</p>
                            <p className='text-white fs-4 font-monospace'>Checkout Top Rated Creators on the NFT Marketplace</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <TopCreaterButton class="bi bi-rocket-takeoff-fill" title="View Ranking"/>
                        </div>
                    </div>
                </div>

                <div className="container ">
                    <div className="row my-2">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="1" img='/Avatar (1).png' name="Keepitreal"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="2" img='/Avatar (2).png' name="DigiLab"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="3" img='/Avatar (3).png' name="GravityOne"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="4" img='/Avatar (4).png' name="Juanie"/>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="5" img='/Avatar (5).png' name="BlueWhale"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="6" img='/Avatar (6).png' name="Mr Fox"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="7" img='/Avatar (7).png' name="Shroomie"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="8" img='/Avatar (8).png' name="Robotica"/>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="9" img='/Avatar (9).png' name="RustyRobot"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="10" img='/Avatar (10).png' name="Animakid"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="11" img='/Avatar (11).png' name="Dotgu"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Cards number="12" img='/Avatar (12).png' name="Ghibiler"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
