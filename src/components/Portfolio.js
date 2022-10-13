import React from "react";
import IMG1 from "./images/portfolio1.jpg";
import IMG2 from "./images/1 (3).jpg";
import IMG3 from "./images/portfolio3.jpg";
import IMG4 from "./images/portfolio4.jpg";
import IMG5 from "./images/1 (2).jpg";
import IMG6 from "./images/1 (1).jpg";
import IMG7 from "./images/pixel.png";

function Portfolio() {
  return (
    <section className="h-full  px-7 md:px-28 py-10  mb-28" id="portfolio">
      <div className="flex flex-col items-center mb-8">
        <div className="text-slate-300 text-sm">
          <h5>My Recent Work</h5>
        </div>
        <div className="text-blue-400 text-3xl">
          <h2>Projects</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img className="h-[250px] object-cover" src={IMG7} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
            Pixel verse
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/Shrey4299/pixelverse"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://pixelverse.herokuapp.com/"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img className="h-[250px] object-cover" src={IMG2} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
            Shoponn- An online shopping website
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/Shrey4299/shop_onn"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://shoponn.herokuapp.com/"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img className="h-[250px] object-cover" src={IMG1} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
  Credit Card Fraud Detection
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/Shrey4299/Credit-Card-Fraud-Detection"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/Shrey4299/Credit-Card-Fraud-Detection"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img className="h-[250px] object-cover" src="https://www.traveldailynews.com/assets/thumbnails/0c/0c85bdb93745e2ab35a90dbc3ab77048.jpg" alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
          Analysis-of-Travel-Insurance-Data
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/Shrey4299/Analysis-of-Travel-Insurance-Data"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/Shrey4299/Analysis-of-Travel-Insurance-Data"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img className="h-[250px] object-cover" src={IMG5} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
            Be-Fit
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/Shrey4299/gym-website"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://fit-life.netlify.app/"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="p-5 bg-indigo-900 rounded-3xl border-[1px] border-[#1f1f38] transition-all ease-in-out hover:bg-transparent hover:border-indigo-900 ">
          <div className="rounded-3xl mb-3  overflow-hidden ">
            <img className="h-[250px] object-cover" src={IMG6} alt="" />
          </div>
          <h3 className="m-[1.2rem 0 2rem] mb-2 ">
           Sky-wind
          </h3>
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/Shrey4299/weather-website"
              className="text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://sky-wind.netlify.app/"
              className="text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]"
              target=" blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
