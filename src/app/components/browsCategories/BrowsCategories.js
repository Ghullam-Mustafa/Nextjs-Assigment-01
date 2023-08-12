import React from 'react'
import '../browsCategories/BrowsCategories.css'
import BrowsCards from './browsCards/BrowsCards'
// import img1 from '../../assets/Category Icon.png'
// import img2 from '../../assets/Category Icon (1).png'
// import img3 from '../../assets/Category Icon (2).png'
// import img4 from '../../assets/Category Icon (3).png'
// import img5 from '../../assets/Category Icon (4).png'
// import img6 from '../../assets/Category Icon (5).png'
// import img7 from '../../assets/Category Icon (6).png'
// import img8 from '../../assets/Category Icon (7).png'

export default function BrowsCatagories() {
    return (
        <div className='BrowsCatagories '>
            <div className="container py-5 ">
                <div className="row ">
                    <div className="col pt-5 ">
                        <p className=' text-white h5 display-5 fw-bold '>Brows Categories</p>
                        
                    </div>
                </div>

                <div className="row py-3 align-items-stretch ">
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src='/Category Icon.png' name="Art"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src='/Category Icon (1).png' name="Collectibles"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src='/Category Icon (2).png' name="Music"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src='/Category Icon (3).png' name="Photography"/>
                    </div>
                </div>

                <div className="row d-flex align-items-stretch">
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src='/Category Icon (4).png' name="Video"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src='/Category Icon (5).png' name="Utility"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src='/Category Icon (6).png' name="Sport"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 p-2">
                        <BrowsCards src='/Category Icon (7).png' name="Virtual Worlds"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
