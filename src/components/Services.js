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
        My Experience
        </div>
            </div> 
      <div className="grid  grid-row-2 md:grid-cols-2 gap-8 ">
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl ">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">BigBasket | Bangalore </h3>
            <h3 className="text-[#1f1f38] text-sm text-center">(Jan 2023 — Present) </h3>
          </div>
          <ul className="p-8 ">
            <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-sm">Designed and developed a website using Django and Django Rest Framework integrated with Google Drive & Spreadsheet API.d </p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-sm">Used by Higher authorities to create a specified spreadsheet for a particular project for all test cases tested using App Script. </p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-sm">Leveraged React, Tailwind CSS, Google, and JWT token authentication to develop a highly responsive website with robust security measures. </p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-sm">Implemented a unified report dashboard using MongoDB, enabling seamless analysis and monitoring of mobile, web, and API testing results.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-sm"> Performed comprehensive testing of BigBasket's new extended search feature using RestAssured, while leveraging Selenium, Appium, and TestNG for automated web and mobile UI testing.</p>
            </li>

           
          </ul>
        </article>

   
        {/* end of web dev */}
        
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl ">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">Leads4needs | Noida</h3>
            <h3 className="text-[#1f1f38] text-sm text-center">(June 2022 - November 2022)</h3>
          </div>
          <ul className="p-8 ">
            <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-sm">Developed & optimized web applications using Django and React.js, also responsible for debugging & maintaining existing code.</p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-sm">Optimized website loading time by up to 70% through performance enhancements, achieving improved user experience. </p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-sm">Utilized Hooks for state management, integrated APIs, and implemented third-party libraries, enhancing website functionality. </p>
            </li>
           <li className="flex gap-4 mb-3" >
              <BiCheck className="text-blue-400 mt-1"/>
              <p className="text-sm">Performed functional testing in React and was actively involved in bug & defect tracking and reporting in JIRA.</p>
            </li>

           
          </ul>
        </article>
        {/* end of content creation */}
        

      </div>
    </section>
  );
}

export default Services;
