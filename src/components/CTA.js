import React from 'react';

function CTA() {
  const CV = "https://drive.google.com/file/d/1qhKIAo06ZPqHdBp8r5zWE1--f0drswgg/view?usp=sharing"; // Updated CV link
  const email = "shreyanshdewangan4299@gmail.com"; // Your email address

  return (
    <div className='mt-10 flex gap-4 justify-center mb-10'>
      <a
        href={CV}
        download
        className='text-blue-400 text-lg p-2 border-[1px] w-max rounded-md border-blue-400'
      >
        Download CV
      </a>
      <a
        href={`mailto:${email}`}
        className='text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]'
      >
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
