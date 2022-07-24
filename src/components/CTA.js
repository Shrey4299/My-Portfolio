import React from 'react'
import CV from './images/cv.pdf'

function CTA() {
  return (
    <div className='mt-10  flex gap-4 justify-center mb-10'>
        <a href={CV} download className='text-blue-400 text-lg p-2 border-[1px] rounded-md border-blue-400'>Download CV </a>
        <a href="#contact" className='text-[#1f1f38] text-lg p-2 border-[1px] rounded-md bg-blue-400 border-[#1f1f38]'> Let's Talk</a>
    </div>
  )
}

export default CTA