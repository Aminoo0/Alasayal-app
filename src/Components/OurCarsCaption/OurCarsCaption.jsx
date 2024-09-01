import React from 'react'
import { Link } from 'react-router-dom'

export default function OurCarsCaption() {
    return (
        <section className='py-10 bg-[url(https://alasayeltours.com/wp-content/uploads/2023/11/Untitled-design-57.jpg)]'>
            <h1 className='text-center text-3xl font-semibold'>سياراتنا</h1>
            <div className='flex gap-y-10 flex-wrap w-4/5 mx-auto'>
                <div className='flex flex-wrap justify-center w-full md:w-1/2 lg:w-1/4 p-3 '>
                    <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                        <figure className="text-[#6b6b6b]"><img loading="lazy" decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/Untitled-design-21.png" className=" size-full w-full lg:w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/Untitled-design-21.png" /></figure>
                        <h3>السيارات الصغيرة</h3>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center w-full md:w-1/2 lg:w-1/4 p-3 '>
                    <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                        <figure className=""><img decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/Untitled-design-19.png" className=" size-full w-full lg:w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/Untitled-design-19.png" />
                        </figure>
                        <h3>حافلات صغيرة</h3>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center w-full md:w-1/2 lg:w-1/4 p-3 '>
                    <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                        <figure className=""><img loading="lazy" decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/Untitled-design-22.png" className=" size-full w-full lg:w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/Untitled-design-22.png" /></figure>
                        <h3>حافلات كوستر</h3>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center w-full md:w-1/2 lg:w-1/4 p-3 '>
                    <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                        <figure className=""><img loading="lazy" decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/Untitled-design-17.png" className=" size-full w-full lg:w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/Untitled-design-17.png" /></figure>
                        <h3>حافلات كبيرة</h3>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Link to={'/ourcars'} > <button className='p-3 px-7 text-white text-sm font-bold bg-[#e64a41] rounded-md hover:bg-[#d1514d] hover:scale-105 duration-300'>عرض الكل</button></Link>
            </div>
        </section>
    )
}
