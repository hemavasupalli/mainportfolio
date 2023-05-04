import React from 'react'

const Skill = ({source, alt, title}) => {
  return (
    
       <img className='w-20 p-5 ml-3 lg:w-24 lg:ml-20 hover:animate-pulse ' src={source} alt={alt} title={title}/>

   
  )
}
const Skills =()=> {
  return (
      <div className="h-[44rem]   ">
             

             <h1 className='p-3 mt-20 text-xl font-bold text-center md:text-xl lg:text-3xl pt-28 lg:mt-20 hover:animate-pulse'><span className='text-orange-600'>SkillSet</span></h1>
             
          <div className="grid items-center grid-cols-4 gap-1 lg:mt-24">
           
              <Skill   source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
              <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
              <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
              <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="The logo icon for Js" title="Java Script"/>
              <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
              <Skill source="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="The logo icon for Redux" title="Redux"/>
              <Skill source="https://miro.medium.com/max/768/1*0j4xd4B_o-jxiaM9QYqgWw.png" alt="The logo icon for Hooks" title="Hooks"/>
              <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
          
           
           <Skill  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="The logo icon for AWS" title="AWS"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" alt="The logo icon for Babel " title="Babel"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original-wordmark.svg" alt="The logo icon for bitbucket" title="bitbucket"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original-wordmark.svg" alt="The logo icon for Confluence" title="Confluence "/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="The logo icon for Firebase" title="Firebase"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="The logo icon for Mango DB" title="mango Db"/>
       </div>            
      </div>
  )
}



export default Skills