import React from 'react'
import Xylo from '../assets/xylo.gif'
import BB from '../assets/2.gif'
import GG from '../assets/gg2.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-full text-gray-300 bg-white'>
        <div className='max-w-[1000px] mx-auto pt-12 flex flex-col justify-center w-full h-full'>

            <div className='pb-8 mx-4'>
                <p className='text-4xl font-bold inline border-b-4 text-[#8892b0] border-[#5dc8cb]'>Work</p>
                <p className='text-[#abaaaa] pt-4 pb-0'>Check out some of the projects I've worked on recently:</p>
            </div>

            {/* container */}
            <div className='mx-2 grid sm:grid-cols-1 md:grid-cols-3 gap-4 pb-24'>
               {/* grid item */}
                <div 
                    style={{backgroundImage: `url(${GG})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#0a192f] tracking-wider'>
                            Express Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://goalgather2.fly.dev/home" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:bg-gray-200'>Demo</button>
                            </a>
                            <a href="https://github.com/DaceyForward/Project-2-Goal-Gather.git" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:bg-gray-200'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    style={{backgroundImage: `url(${BB})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#0a192f] tracking-wider'>
                            Python Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://birthdayblaster.onrender.com/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:bg-gray-200'>Demo</button>
                            </a>
                            <a href="https://github.com/DaceyForward/Pod1-Project-3.git" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:bg-gray-200'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    style={{backgroundImage: `url(${Xylo})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-[#0a192f] tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://xylotoybox.netlify.app/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:bg-gray-200'>Demo</button>
                            </a>
                            <div>
                            <a href="https://github.com/DaceyForward/Project-4-XYLO-FRONTEND.git" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:bg-gray-200'>Frontend</button>
                            </a>
                            <a href="https://github.com/DaceyForward/Project-4-XYLO-BACKEND.git" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg hover:bg-gray-200'>Backend</button>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Work