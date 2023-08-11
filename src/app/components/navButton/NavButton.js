import Image from 'next/image'
// import img from '../../assets/User.png'
import './NavButton.css'

export default function Button() {
  return (
    <div>
        <button type="button" class="btn button  "> <Image src='/User.png' width={100} height={100} className='img' alt="" /><span className='m-2 text-white'>Sign Up</span> </button>
    </div>
  )
}
