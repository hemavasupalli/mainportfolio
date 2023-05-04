import React from 'react'

const Footer = () => {
  return (
   
      <footer className="fixed bottom-0 w-full text-white bg-gray-900 ">
        <div className="md:flex  md:justify-between md:items-center sm:px-5 bottom-0 px-4 bg-[#ffffff19] ">


       <ul className='flex text-white '>
        <li className='text-[.8rem] md:ml-2 ml-[4rem] pt-2  '>Designed and Developed by Hema Vasupalli</li>
       
        </ul>
        <ul className='flex text-white '>
       
        <li className='text-[0.8rem] md:ml-[8rem] ml-[8rem] py-3'>Copyright © 2023 HV</li>
        </ul>
        <ul className='flex pb-3 text-white '>
        <li className='ml-20'>
       
          <a href=' https://github.com/hemavasupalli' target="_blank" rel="noreferrer" >
          <img className='h-6 ml-2 bg-white rounded-full md:ml-28' alt="github" 
            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"/>
            </a>
        </li>
        <li>
       
          <a href='https://www.linkedin.com/in/hemavasupalli12/' target="_blank" rel="noreferrer" >
          <img className='h-6 ml-8 bg-white rounded-full md:ml-8 ' alt="github" 
            src="https://cdn-icons-png.flaticon.com/512/145/145807.png"/>
            </a>
        </li>
        <li>
       
          <a href='https://www.instagram.com/hemavasupalli_2009/' target="_blank" rel="noreferrer" >
          <img className='h-6 ml-8 bg-white rounded-full ' alt="github" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"/>
            </a>
        </li>
        <li>
       
          <a href='https://www.facebook.com/vasupalli.hema/' target="_blank" rel="noreferrer" >
          <img className='h-6 ml-8 bg-white rounded-full ' alt="github" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"/>
            </a>
        </li>
        </ul>
        </div>
   </footer>
   
  )
}

export default Footer