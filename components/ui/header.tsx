import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-[72px] mt-1 border flex items-center justify-center bg-[#F7F7F7]'>
      <div className='w-[1152px] h-[44px] border flex items-center justify-between'>
        
        <section className='flex items-center space-x-2'>
          <Image src="/Frame 1.png" alt="logo" width={32.58} height={30.38} />
          <p className='font-[Inter] font-bold text-[25.07px]'>Ddsgnr</p>
        </section>
        
    <section className='flex items-center gap-[10px] w-[687] h-[44px] pl-[20px]'>
    <section className='gap-3'>
          <button className='w-[113px] h-[44px] border rounded-md bg-blue-600 mr-3'><Link href="/home" target='_blank'>Home</Link></button>

          <button className='w-[113px] h-[44px] border rounded-md bg-blue-600 mr-3'><Link href="/courses" target='_blank'>Courses</Link></button>

          <button className='w-[113px] h-[44px] border rounded-md bg-blue-600 mr-3'><Link href="/services" target='_blank'>Services</Link></button>

          <button className='w-[113px] h-[44px] border rounded-md bg-blue-600 mr-3'><Link href="/achievements" target='_blank'>Achievements</Link></button>

          <button className='w-[113px] h-[44px] border rounded-md bg-blue-600 mr-3'><Link href="/aboutus" target='_blank'>About Us</Link></button>

          <button className='w-[113px] h-[44px] border rounded-md bg-blue-600 mr-3'><Link href="/testimonial" target='_blank'>Testimonial</Link></button>
          </section>

          <section className=''>
          <button className='w-[80px] h-[40px] border border-[#000000] rounded-[5px] mr-4'><Link href="/login" target='_blank'>Login</Link></button>

          <button className='w-[95px] h-[40px] border border-[#000000] rounded-[5px] bg-[#000000] text-white'><Link href="/signup" target='_blank'>Sign Up</Link></button>
        </section>
      </section>
      </div>
    </div>
  )
}

export default Header
