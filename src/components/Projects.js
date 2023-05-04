import React from 'react';
import youtube from '../youtube.png';
import food from '../food.png';

const Section = ({ img, title, github, demo, li1, li2, li3, li4 }) => {
  return (
    <div className="max-w-[40rem] lg:bottom-0 mx-auto lg:mx-10 hover:shadow-gray-800 p-5 mb-10 mt-10 rounded-lg shadow-md font-bold bg-orange-100 text-black">
      <div className="flex flex-col lg:flex-row">
        <img className="object-cover w-full h-44 lg:w-72 lg:h-44" alt="youtube" src={img} />
        <div className="flex flex-col p-2">
          <h1 className="mt-2 text-sm font-bold text-orange-600 lg:text-lg lg:ml-4">Tech Stack</h1>
          <ul className="ml-4 text-xs font-normal list-disc rounded-full lg:text-base lg:ml-8">
            <li>Redux</li>
            <li>Router</li>
            <li>Hooks</li>
            <li>TailwindCSS</li>
          </ul>
          <h1 className="mt-2 text-xs font-bold text-orange-600 lg:text-lg lg:ml-4">Features</h1>
          <ul className="ml-3 text-xs font-normal list-disc rounded-full lg:text-base lg:ml-8">
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
          </ul>
        </div>
      </div>
      <h1 className="p-2 text-xl font-bold text-orange-600">{title}</h1>
      <div className="flex justify-end mt-auto mb-5 mr-5">
        <button className="w-24 mr-4 bg-orange-600 border rounded-lg">
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </button>
        <button className="w-24 bg-orange-600 rounded-lg">
          <a href={demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        </button>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <div className="min-h-screen pl-5 mt-24 ">
      <h1 className='py-5 ml-10 text-2xl font-bold text-center text-orange-600 lg:text-center'>Apps I've Done
        </h1>
        <div className="flex flex-col justify-center lg:flex-row">
          <Section
            img={youtube}
            github={'https://github.com/hemavasupalli/Youtube_app'}
            demo={'https://hemayoutubeapp.netlify.app/'}
            title={'Youtube App'}
            li1={'Debouncing'}
            li2={'Search Suggestion'}
            li3={'Caching for Optimsation'}
            li4={'Api Polling'}
          />
          <Section
            img={food}
            github={'https://github.com/hemavasupalli/Fish-Ordering-App-in-React'}
            demo={'https://graceseafoods.netlify.app/'}
            title={'Fish Online App'}
            li1={'Search filter'}
            li2={'Cart Adding'}
           

            li3={"Authentication"}
            li4={"SPA"}

    
     />
   
    
    
    </div>
    </div>
    </>
    )}

export default Experience