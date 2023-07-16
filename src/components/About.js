import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from './images/Resume2.png'

function About() {
  return (
    <section className=' md:h-screen  mx-7 md:px-28  py-10  overflow-hidden mb-28' id="about">

      <div className='flex flex-col items-center mb-8'>

        <div className="text-slate-300 text-sm">
          Get to Know
        </div>
        <div className="text-blue-400 text-3xl">
          About Me
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5    md:gap-[15%]  ">
        <div className="w-full aspect-square rounded-2xl grid place-items-center bg-gradient-to-r  from-sky-500 to-transparent">
          <div className="  hover:rotate-0 transition h-full ease-in overflow-hidden rounded-2xl transorm ">
            <img className='w-full h-full object-cover  ' src={ME} />
          </div>
        </div>

        <div className="cn">
          <div className='grid grid-row-3 md:grid-cols-3 gap-6 mb-8'>
            <article className='bg-indigo-900 rounded-lg p-8 text-center border-[1px] border-[#1f1f38] transition ease-in hover:bg-[#1f1f38] hover:border-indigo-900'>
              <FaAward className='mb-4 text-lg text-blue-400 mx-auto' />
              <h5 className="c">
                Experience
              </h5>
              <small>2+ years</small><br/>
              <small>Working</small>
            </article>
            <article className='bg-indigo-900 rounded-lg p-8 text-center border-[1px] border-[#1f1f38] transition ease-in hover:bg-[#1f1f38] hover:border-indigo-900'>
              <FiUsers className='mb-4 text-lg text-blue-400 mx-auto' />
              <h5 className="c">
                Internship
              </h5>
              <small className='inline'>BigBasket</small><br/>
<small className='text-s'>Leads4needs</small>


            </article>
            <article className='bg-indigo-900 rounded-lg p-8 text-center border-[1px] border-[#1f1f38] transition ease-in hover:bg-[#1f1f38] hover:border-indigo-900'>
              <VscFolderLibrary className='mb-4 text-lg text-blue-400 mx-auto' />
              <h5 className="c">
                College 
              </h5>
              <small>IIIT Naya Raipur 2023</small><br/>
              <small>(ECE) 82.7 %</small><br/>
            </article>
          </div>

          <p className='text-slate-300 text-center md:text-left mb-7'>Formerly worked at BigBasket as a SDE (Software Development Engineer) intern, specializing in web development,
            testing and automation. I have a proven track record of delivering high-quality software solutions.
            With extensive experience in both front-end and back-end web development. Additionally, I am well-versed
            in software testing methodologies and tools, including test automation frameworks such as RestAssured, Selenium and Appium.</p>
          <div className="flex w-full justify-center md:justify-start">

            <a className='text-[#1f1f38]  text-center text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]' href="">Lets Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About