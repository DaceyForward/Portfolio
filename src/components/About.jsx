import React from 'react'
import Headshot from '../assets/headshot.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-white text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full bg-white'>
            <div className=' w-full grid grid-cols-2 gap-8 bg-white'>
                <div className='sm:text-right pb-8 pl-4 bg-white'>
                    <br />
                    <p className='text-4xl font-bold inline text-[#8892b0] border-b-4 border-[#5CE1E6] bg-white'>
                        About Me
                    </p>
                </div>
                <div></div>
            </div>
                <div className=' w-full grid sm:grid-cols-2 gap-8 px-4 bg-white'>
                    <div className='sm:text-right text-4xl font-bold text-[#ccd6f6] bg-white'>
                        <p>I'm Dacey, nice to meet you! Please take a look around.</p>
                        <div className='py-6 pl-40'>
                        <img src={Headshot} alt="Headshot" className='size-fit rounded-lg shadow-lg shadow-[#040c16]'/> 
                        </div>
                        
                    </div>
                    <div className='text-[#abaaaa] bg-white'>
                        <p>
                        After spending the last decade teaching in the classroom, I have chosen to broaden my abilities and transition into the ever-changing world of tech! 
                        <br />
                        <br />
                        Teaching special education during the pandemic opened my eyes to all the capabilities of technology, and I became curious to know more about how it worked and what all I could do with it. I quickly realized the possibilities are endless! This excited me, plunging me into a new professional direction. 
                        <br />
                        <br />
                        While completing a software engineering certification program, I learned  and practiced everything from creating comprehensive and engaging UIs, cleaning up code, communicating with a team, and developing a fully functional web application. Now I feel even more excited to pivot into a career in tech! 
                        <br />
                        <br />
                        I absolutely love the planning and organization of projects, as well as creating user-centric designs for UIs. I’ve been working as a freelance web developer, as well as a software engineering intern with a robotics company. This recent experience, paired with my extensive experience in education, has geared me up for any challenge!
                        </p>
                        <br />
                    </div>
                </div>

        </div>
    </div>
  )
}

export default About