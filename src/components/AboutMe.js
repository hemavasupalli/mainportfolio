import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className='min-h-screen font-bold text-center pt-[20rem]  '>
  
      <h1 className='p-3 text-2xl text-center text-orange-600 lg:ml-24 lg:pb-10 lg:text-4xl animate-pulse'>Find Me On</h1>

      <ul className='flex flex-wrap  justify-center mt-5 lg:ml-[53rem] lg:justify-start'>

        <li className='p-2 mb-5 lg:mb-0 lg:mr-5'>
          <a href='https://github.com/hemavasupalli' target="_blank" rel="noreferrer">
            <img className='bg-white rounded-full h-9 hover:animate-bounce' alt="github" 
                 src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"/>
          </a>
        </li>

        <li className='p-2 mb-5 lg:mb-0 lg:mr-5'>
          <a href='https://www.linkedin.com/in/hemavasupalli12/' target="_blank" rel="noreferrer">
            <img className='bg-white rounded-full h-9 hover:animate-bounce' alt="linkedin" 
                 src="https://cdn-icons-png.flaticon.com/512/145/145807.png"/>
          </a>
        </li>

        <li className='p-2 mb-5 lg:mb-0 lg:mr-5'>
          <Link to='#' onClick={(e) => {
              window.location.href = 'mailto: hemavasupalli12@gmail.com';
              e.preventDefault();
            }}>
            <img className='bg-white rounded-full h-9 hover:animate-bounce' alt="email" 
                 src="https://icons-for-free.com/download-icon-google+mail+icon-1320192249286867468_512.png"/>
          </Link>
        </li>

        <li className='p-2 mb-5 lg:mb-0 lg:mr-5'>
          <a href='https://www.instagram.com/hemavasupalli_2009/' target="_blank" rel="noreferrer">
            <img className='bg-white rounded-full h-9 hover:animate-bounce' alt="instagram" 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"/>
          </a>
        </li>

        <li className='p-2 mb-5 lg:mb-0 lg:mr-5'>
          <a href='https://www.facebook.com/vasupalli.hema/' target="_blank" rel="noreferrer">
            <img className='bg-white rounded-full h-9 hover:animate-bounce' alt="facebook" 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"/>
          </a>
        </li>

      </ul>
    </div>
  )
}

export default AboutMe
