import React,{useState} from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {

  const [activeNav,setActiveNav] =  useState( '#')
  return (


    <div className="flex justify-center w-full">

   <nav className='flex gap-4 text-blue-400 bg-[rgba(0,0,0,0.3)] bg-blur-lg  w-max px-8 py-4   z-10 fixed  bottom-8 backdrop-blur-md   rounded-full ]'>
    <a className='bg-transparent p-3 text-slate-300 rounded-full flex text-lg hover:bg-[rgba(0,0,0,0.3)] active:text-white active:bg-[#1f1f38] '  href="#"><AiOutlineHome/></a>
    <a  className='bg-transparent p-3 text-slate-300 rounded-full flex text-lg hover:bg-[rgba(0,0,0,0.3)] active:text-white active:bg-[#1f1f38] ' href="#about"><AiOutlineUser/></a>
    <a className='bg-transparent p-3 text-slate-300 rounded-full flex text-lg hover:bg-[rgba(0,0,0,0.3)] active:text-white active:bg-[#1f1f38] ' href="#experience"><BiBook/></a>
    <a className='bg-transparent p-3 text-slate-300 rounded-full flex text-lg hover:bg-[rgba(0,0,0,0.3)] active:text-white active:bg-[#1f1f38] ' href="#service"><RiServiceLine/></a>
    <a className='bg-transparent p-3 text-slate-300 rounded-full flex text-lg hover:bg-[rgba(0,0,0,0.3)] active:text-white active:bg-[#1f1f38] ' href="#portfolio"><BiMessageSquareDetail/></a>
    {/* <a className='bg-transparent p-3 text-slate-300 rounded-full flex text-lg hover:bg-[rgba(0,0,0,0.3)] active:text-white active:bg-[#1f1f38] ' href="#testimony"><BiMessageSquareDetail/></a> */}

   </nav>
    </div>
  )
}

export default Nav