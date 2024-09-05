import React, { useEffect } from 'react'
import ourCarsHeader from '../../assets/our-cars-header.jpg'
import { useLocation } from 'react-router-dom'

export default function ContactUs() {

  let { pathname } = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return (
    <section className='pb-32'>
      <div className='w-full mb-10 relative'>
        <div className='w-full bg-slate-700 bg-opacity-50 absolute top-0 left-0 right-0 bottom-0'>
          <h2 className='text-white text-5xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>تواصل معنا</h2>
        </div>
        <img className='h-[400px] object-cover w-full' src={ourCarsHeader} alt="" />
      </div>
    </section>
  )
}
