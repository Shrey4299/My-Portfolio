import React from "react";
import {BiCheck} from 'react-icons/bi'


function Services() {
  return (
    <section
      className=" md:h-screen  px-7 md:px-28  py-10   mb-28"
      id="service"
    >
     <div className='flex flex-col items-center mb-8'>
        
        <div className="text-slate-300 text-sm">
         What makes me unique
        </div>
        <div className="text-blue-400 text-3xl">
         Qualities
        </div>
            </div> 
      <div className="grid  grid-row-2 md:grid-cols-2 gap-8 ">
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl ">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">Position of Resonsibility</h3>
          </div>
          <ul className="p-8 ">
            <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-xl">SAC webisite head </p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Developer and Maintainer of </p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>(SAC) website of my university.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-xl">Capriccio core member:</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Performed and organize numerous</p>
            </li>
           <li className="flex gap-4 " >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Cultural events in our college.</p>
            </li>
           
          </ul>
        </article>

   
        {/* end of web dev */}
        
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl ">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">Soft Skill</h3>
          </div>
          <ul className="p-8 ">
            <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-md">Creative</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Critical Thinker </p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Leadership </p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Enthusiasm</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Flexible</p>
            </li>
           <li className="flex gap-4 " >
              <BiCheck className="text-blue-400 mt-1"/>
              <p>Multitasking</p>
            </li>
           
          </ul>
        </article>
        {/* end of content creation */}
        

      </div>
    </section>
  );
}

export default Services;
