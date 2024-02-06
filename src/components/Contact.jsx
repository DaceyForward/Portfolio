import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/97f5b8b9-239c-4011-b7d6-52fa868a5359" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 pt-24'>
                <p className='text-4xl font-bold inline border-b-4 border-[#5dc8cb] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 pb-0'>Submit the form below to connect with me and I'll be in touch soon!</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#5dc8cb] hover:border-[#5dc8cb] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect!</button>
        </form>
    </div>
  )
}

export default Contact