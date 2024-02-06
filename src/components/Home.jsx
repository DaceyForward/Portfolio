import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-full'>
        
        {/* container */}
        <div className=' mx-auto pl-16 pr-10 flex flex-col justify-center h-full bg-[#0a192f]'>
            <br />
            <br />
            <br />
            <br />
            <p className='font-bold text-[#5CE1E6]'>Hi there, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-thin text-[#8892b0]'>Dacey Loving Forward</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>I'm a Software Engineer.</h2>
            <p className='text-[#8892b0] py-3 max-w-[700px]'>Passion for creating engaging UIs, web development, all things education, and preservation of marine life. Take a look around to learn a little bit about me, and let’s connect!</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5CE1E6] hover:border-[#5CE1E6]'>
                

                <Link to="work" smooth={true} duration={500} >
                  View My Work
                </Link>
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
               <br />
               <br />
               
            </div>
        </div>
    </div>
  )
}

export default Home