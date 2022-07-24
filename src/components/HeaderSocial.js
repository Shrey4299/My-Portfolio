import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {FiDribbble, FiTwitter} from 'react-icons/fi'

function HeaderSocial() {
  return (
    <div className='flex flex-col items-center gap-6 absolute left-0 bottom-12  text-blue-400'>
        <a href="https://www.linkedin.com/in/shreyansh619/" traget="blank"><AiFillLinkedin/></a>
        <a href="https://github.com/Shrey4299" traget="blank"><AiFillGithub/></a>
        <a href="https://twitter.com/Shreyan48045872" traget="blank"> <FiTwitter/></a>

    </div>
  )
}

export default HeaderSocial