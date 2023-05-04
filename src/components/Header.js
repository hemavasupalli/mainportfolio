import React from 'react'
import { Link } from "react-router-dom";

import { useState } from 'react';

import  "../App.css";




const Header = (props) => {
 
  const [open,setOpen]=useState(false);
 

  return (
   

    <div className='fixed top-0 left-0 w-full shadow-xl {darkMode ? "dark-mode" : "light-mode"}'>
    <div className='items-center justify-between py-2 bg-white md:flex md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    '>
<span className='w-20 pt-2 mr-1 text-3xl '>       
 <a href="/">
       <img  alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvF_7dbM_FPK2E_Kfvjmo320x4viFTpSOiiol-zKd0_CKzHEJKP50T_tXLeRgT-VhRdVk&usqp=CAU"/>
        </a>
       </span>
        <div onClick={()=>setOpen(!open)} className='absolute text-3xl text-black cursor-pointer right-8 top-8 md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>


      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:ml-[36rem] bg-white md:z-auto  z-[-1] left-0 w-44 md:w-auto md:pl-0 pl-9  transition-all duration-500  ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        
           
           <li className='text-xl md:ml-8 md:my-0 my-7'><Link  className='w-20 px-3 text-gray-800 duration-500 hover:shadow-xl rounded-3xl hover:bg-orange-400' onClick={()=>setOpen(!open)} to="/skills">Skills</Link></li>
            <li className='text-xl md:ml-8 md:my-0 my-7'><Link  className="w-20 px-3 text-gray-800 duration-500 hover:shadow-xl rounded-3xl hover:bg-orange-400" onClick={()=>setOpen(!open)} to="/education">Education</Link></li>
            {/* <li className='text-xl md:ml-8 md:my-0 my-7'><Link  className="w-20 px-3 text-gray-800 duration-500 hover:shadow-xl rounded-3xl hover:bg-orange-400" to="/experience">Experience</Link></li> */}
            <li className='text-xl md:ml-8 md:my-0 my-7'><Link  className="w-20 px-3 text-gray-800 duration-500 hover:shadow-xl rounded-3xl hover:bg-orange-400" onClick={()=>setOpen(!open)} to="/projects">Projects</Link></li>
            <li className='my-4 text-xl md:ml-8 md:my-0'><Link  className="w-20 px-3 text-gray-800 duration-500 hover:shadow-xl rounded-3xl hover:bg-orange-400"onClick={()=>setOpen(!open)}  to="/aboutMe">Contact Me</Link></li>
            <li>  
            
            </li>
        </ul>
    </div>
    </div>
    </div>

   
  )
}

export default Header
