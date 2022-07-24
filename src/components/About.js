import React from 'react'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from './images/Resume2.png'

function About() {
  return (
    <section className=' h-screen  px-28  py-10  overflow-hidden mb-28' id="about">

      <div className='flex flex-col items-center mb-8'>
        
    <div className="text-slate-300 text-sm">
      Get to Know
    </div>
    <div className="text-blue-400 text-3xl">
      About Me 
    </div>
        </div> 
    
    <div className="flex  gap-[15%]  ">
      <div className="w-full aspect-square rounded-2xl grid place-items-center bg-gradient-to-r  from-sky-500 to-transparent">
        <div className=" hover:rotate-0 transition h-full ease-in overflow-hidden rounded-2xl transorm ">
          <img className='w-full h-full object-cover ' src={ME} />
        </div>
      </div>

      <div className="cn">
        <div className='grid grid-cols-3 gap-6 mb-8'>
          <article className='bg-indigo-900 rounded-lg p-8 text-center border-[1px] border-[#1f1f38] transition ease-in hover:bg-[#1f1f38] hover:border-indigo-900'>
            <FaAward className='mb-4 text-lg text-blue-400 mx-auto'/>
            <h5 className="c">
              Experience
            </h5>
            <small>2+ years Working</small>
          </article>
          <article className='bg-indigo-900 rounded-lg p-8 text-center border-[1px] border-[#1f1f38] transition ease-in hover:bg-[#1f1f38] hover:border-indigo-900'>
            <FiUsers className='mb-4 text-lg text-blue-400 mx-auto'/>
            <h5 className="c">
            web D internship 
            </h5>
            <small>Leads4needs </small>
          </article>
          <article className='bg-indigo-900 rounded-lg p-8 text-center border-[1px] border-[#1f1f38] transition ease-in hover:bg-[#1f1f38] hover:border-indigo-900'>
            <VscFolderLibrary className='mb-4 text-lg text-blue-400 mx-auto'/>
            <h5 className="c">
              Project 
            </h5>
            <small>10 + completed</small>
          </article>
        </div>

        <p className='text-slate-300 mb-7'>Creative Full-stack Web Developer providing high-impact web solutions for diverse industry organizations.
Skilled in designing, developing, and testing multiple web-based applications incorporating various technologies and
aspiring to combine broad background with strong technical skills to excel as a Web-Developer..</p>
<a className='text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]' href="">Lets Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About