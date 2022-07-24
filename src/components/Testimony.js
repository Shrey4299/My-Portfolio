import React from "react";
import AVTR1 from "./images/avatar1.jpg";
import AVTR2 from "./images/avatar2.jpg";
import AVTR3 from "./images/avatar3.jpg";
import AVTR4 from "./images/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {

    avatar: AVTR1,
    name: 'Tina Snow',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium omnis unde id fugit totam, aliquam exercitationem quisquam sit rerum vitae quasi neque rem nam, libero minima animi asperiores non'
    

  },
  {

    avatar: AVTR2,
    name: 'Tina Snow',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium omnis unde id fugit totam, aliquam exercitationem quisquam sit rerum vitae quasi neque rem nam, libero minima animi asperiores non'

  },
  {

    avatar: AVTR3,
    name: 'Tina Snow',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium omnis unde id fugit totam, aliquam exercitationem quisquam sit rerum vitae quasi neque rem nam, libero minima animi asperiores non'

  },
  {

    avatar: AVTR4,
    name: 'Tina Snow',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium omnis unde id fugit totam, aliquam exercitationem quisquam sit rerum vitae quasi neque rem nam, libero minima animi asperiores non'

  },
 

   
]
function Testimony() {
  return (
    <section className="h-screen   px-28 py-10  mb-28"  id="experience">
    

      <div className="flex flex-col items-center mb-40">
        <div className="text-slate-300 text-sm">
      <h5>Review from clients</h5>
         

        </div>
        <div className="text-blue-400 text-3xl">
        <h2>Testimonials</h2>
        </div>
      </div>


      <Swiper className="w-[40%] pb-16" 
      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{Clickable: true}}

      >
   {
    data.map(({avatar,name,review}, index) => {
      return (
        <SwiperSlide key={index} className="bg-indigo-900 text-center p-8 rounded-3xl  ">
        <div className="w-16 overflow-hidden rounded-full m-[0 auto 1rem] mx-auto border-4 border-blue-400 ">
          <img src={avatar} alt="Avatar One" />
        </div>
          <h5 className="clientname">{name}</h5>
          <small className="text-slate-300 block w-full mb-5 m-[0.8rem auto 0]">
          {review}
          </small>
      </SwiperSlide>
      )
    })
   }
      
      </Swiper>
    </section>
  );
}

export default Testimony;
