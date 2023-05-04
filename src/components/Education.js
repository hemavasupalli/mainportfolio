import React from 'react';

const Education = () => {
  return (
    <div className='min-h-screen pt-20 pr-10 mt-20 '>
      <h1 className='ml-10 text-2xl font-bold text-center text-orange-600 lg:text-center'>Education</h1>
  
      <div className="w-full mx-auto lg:max-w-3xl">
        <div className="w-full p-6 mt-24 mb-10 ml-5 font-bold text-black bg-orange-100 rounded-lg shadow-md hover:shadow-gray-800 h-60">
          <div className="flex justify-between mb-4">
            <div className="text-lg font-bold text-orange-600"> Btech in CSE</div>
            <div className="text-sm ">July 2014 - April 2018</div>
          </div>
          <h1 className="pt-10 mb-2">Computer Science Of Engineering</h1>
          <h1 className="mb-2">Gitam University</h1>
          <h1 className="mb-2">📍 Vizag, India</h1>
        </div>
      </div>
    </div>
  );
};

export default Education;
