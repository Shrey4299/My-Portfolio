import React from "react";
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section className="md:h-screen px-7  md:px-28 py-10   overflow-hidden mb-28" id="experience">

      <div className='flex flex-col items-center mb-8' >
      <h5 className="text-slate-300 text-sm">What Skills I Have</h5>
      <h2 className="text-blue-400 text-3xl">My Expertise</h2>

      </div>

      <div className=" grid grid-row-2 md:grid-cols-2 gap-8 ">
        <div className=" bg-indigo-900 py-10 md:px-20 rounded-3xl border-2 border-transparent  hover:bg-transparent hover:cursor-default hover:border-indigo-900 ">
          <h3 className="text-center mb-8  text-blue-400">Web Development</h3>
          <div className="grid grid-cols-2 gap-8 mx-5 md:mx-0 ">
            <article className="flex gap-4  " >
              <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>

              <h4>Djangao</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>

              <div>

              <h4>React Js </h4>
              <small>Experienced </small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>

              <h4>Node Js | Spring</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>

              <h4>Javascript</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>


              <h4>MongoDB | SQL </h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>

              <h4> HTML | CSS</h4>
              <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="bg-indigo-900 py-10  md:px-20 rounded-3xl border-2 border-transparent  hover:bg-transparent hover:cursor-default hover:border-indigo-900 ">
        <h3 className="text-center mb-8  text-blue-400">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-8 mx-5 md:mx-0">
            <article className="flex gap-4  ">
            
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>

              <h4> C | C++  </h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>

              <div>

              <h4> Java </h4>
              <small>Experienced </small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>

              <div>

              <h4>Python </h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>
                
                <h4> RestAssured</h4>
              <small>Intermediate</small>
                </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>
              <h4> TestNG  </h4>

              <small>Experienced</small>
              </div>
            </article>
            <article className="flex gap-4  ">
          <BsPatchCheckFill className="text-blue-400 mt-2"/>
              <div>
              <h4>Linux | Git</h4>

              <small>Experienced</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
