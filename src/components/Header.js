import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from './images/Resume.png'

function Header() {
  return (
   <header className=' pt-10 px-28 mx-28  overflow-hidden mb-28  '>
    <div className="mx-auto text-center items-center  relative  ">
      <h5 className='text-slate-300 mb-5 font-semibold'>Hello I'm </h5>
      <h1 className=" font-semibold text-3xl mb-5">Shreyansh Dewanagn</h1>
<h5 className="text-slate-300 mb-5 font-semibold">FullStack Developer</h5>
    <CTA/>
    <HeaderSocial/>

    <div className="flex w-full ">
      <img src={ME} className="  object-cover over  mx-auto justify-center items-center rotate-[352deg] w-[250px] h-auto   relative top-5   " alt="" />
    </div>
    <a href="#contact" className='absolute right-[-2.3rem] bottom-20 transform rotate-90 text-sm text-blue-400  '>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header