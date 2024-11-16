import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

function About() {
  const email = "shreyanshdewangan4299@gmail.com"; 
  
  return (
    <section className=" md:h-screen  mx-7 md:px-28  py-10  overflow-hidden mb-28" id="about">
      <div className="flex flex-col items-center mb-8">
        <div className="text-slate-300 text-sm">Get to Know</div>
        <div className="text-blue-400 text-3xl">About Me</div>
      </div>

      <div className="flex flex-col md:flex-row gap-5    md:gap-[15%]  ">
        <div className="w-full aspect-square rounded-2xl grid place-items-center bg-gradient-to-r  from-sky-500 to-transparent">
          <div className="hover:rotate-0 transition h-full ease-in overflow-hidden rounded-2xl transform">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg"
              alt="Hacker with Laptop"
            />
          </div>
        </div>

        <div className="cn">
          <div className="grid grid-row-3 md:grid-cols-3 gap-6 mb-8">
            <article className="bg-indigo-900 rounded-lg p-8 text-center border-[1px] border-[#1f1f38] transition ease-in hover:bg-[#1f1f38] hover:border-indigo-900">
              <FaAward className="mb-4 text-lg text-blue-400 mx-auto" />
              <h5 className="c">Experience</h5>
              <h2 className="mt-5">2.5+ years</h2>
            </article>
            <article className="bg-indigo-900 rounded-lg p-8 text-center border-[1px] border-[#1f1f38] transition ease-in hover:bg-[#1f1f38] hover:border-indigo-900">
              <FiUsers className="mb-4 text-lg text-blue-400 mx-auto" />
              <h5 className="c">Jobs</h5>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <small className="inline">BigBasket</small>
                </div>
                <div>
                  <small className="text-s">Folksmedia</small>
                </div>
                <div>
                  <small className="inline">Leads4needs</small>
                </div>
                <div>
                  <small className="text-s">SocialSeller</small> {/* Replace "MyCompany" with the fourth job */}
                </div>
              </div>
            </article>
            <article className="bg-indigo-900 rounded-lg p-8 text-center border-[1px] border-[#1f1f38] transition ease-in hover:bg-[#1f1f38] hover:border-indigo-900">
              <VscFolderLibrary className="mb-4 text-lg text-blue-400 mx-auto" />
              <h5 className="mb-3">College</h5>
              <small>IIIT Naya Raipur 2023</small>
              <br />
              <small>(ECE) 84 % %</small>
              <br />
            </article>
          </div>

          <p className="text-slate-300 text-center md:text-left mb-7">
            Results-oriented Backend developer with 2.5+ years of experience delivering innovative solutions in dynamic environments.
            Currently a Software Developer 1 at Folkmedia, with prior experience at BigBasket and SocialSeller. Skilled in full-stack web
            development, with expertise in Python, Django, FastAPI, and cloud services like AWS, delivering high-quality software solutions
            across both front- end and back-end projects.
          </p>
          <div className="flex w-full justify-center md:justify-start">
            <a
              className="text-[#1f1f38]  text-center text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              href={`mailto:${email}`}
            >
              Lets Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About