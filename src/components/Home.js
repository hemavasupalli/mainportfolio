import React from 'react'
import hema from '../hema1.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center block min-h-screen my-10 text-center md:flex-row sm:pl-10 sm:pr-10 md:pl-20 md:pr-20 sm:pt-24 md:pt-44'>
      <img alt='img' className='pb-10 w-28 lg:w-44' src={hema}/>
      <ul className='w-full max-w-md'>
        <li className='p-3 text-lg font-bold text-orange-600 lg:w-[44rem] lg:text-7xl  animate-pulse '>Hi there, I'm Hema.</li>
        <li className='p-3 text-left lg:ml-10 lg:w-[40rem] text-cyan-600' >I am a Front End developer building web applications. Skilled in MongoDB, Express.js, React, Typescript , Redux and Node.js having Strong proficiency in React, including DOM manipulation and the JavaScript object model and thorough understanding of React.js and its core principles.</li>
        <li className='flex p-3 text-md lg:text-md' >
        <button className='w-1/4 px-1  bg-orange-400 shadow-lg lg:w-[24rem] lg:mr-5 lg:pr-3 lg:ml-8  rounded-xl'>
  <Link to='#' onClick={(e) => {
    window.location.href = 'mailto: hemavasupalli12@gmail.com';
    e.preventDefault();
  }}>Hire Me</Link>
</button>

          <button className='w-[12rem] ml-8 px-3 bg-orange-400 shadow-lg lg:w-[60rem] lg:mr-4 lg:ml-8  rounded-xl'>
  <a  href="/files/resume_hema.pdf" download>Download My Resume</a>
</button>

        </li>
      </ul>
    </div>
  )
}

export default Home