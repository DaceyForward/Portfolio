import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo2 from '../assets/logo2.png'
import {Link} from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo2} alt="Logo" style={{width: '350px'}}/>
        </div>

        {/* menu */}
        <ul className='hidden md:flex '>
            <li className='rounded-md px-5 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <Link to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li className='rounded-md px-5 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>                
                <Link to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li className='rounded-md px-5 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>                
                <Link to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            <li className='rounded-md px-5 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>                
                <Link to="work" smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            <li className='rounded-md px-5 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>                
                <Link to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>                
            <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>                
            <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>                
            <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>                
            <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>                
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-white'
                        href="https://www.linkedin.com/in/daceylovingforward/" target="_blank" rel="noreferrer">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/DaceyForward"
                        target="_blank" rel="noreferrer">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5CE1E6]'>
                    <a className='flex justify-between items-center w-full text-white'
                        href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:517a48e8-bb73-41fb-a6c9-142541b01036"
                        target="_blank" rel="noreferrer">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default NavBar