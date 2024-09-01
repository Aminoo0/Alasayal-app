import { motion } from 'framer-motion'
import React from 'react'

export default function OurServise() {
    return (
        <section className='bg-[url(https://alasayeltours.com/wp-content/uploads/2023/11/Untitled-design-57.jpg)]'>
            <div className='bg-black bg-opacity-5 py-10 overflow-hidden'>
                <motion.h1 initial={{ opacity: 0, x: 300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='text-center text-3xl font-semibold'>خدماتنا</motion.h1>
                <motion.div initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .5 }} className='flex gap-y-10 flex-wrap text-[#6b6b6b] w-4/5 mx-auto'>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300'>
                            <figure className="text-[#6b6b6b]"><img loading="lazy" decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/student.png" className=" size-full w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/student.png" /></figure>
                            <h3>نقل الطلاب</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/office-building-2.png" className=" size-full w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/office-building-2.png" />
                            </figure>
                            <h3>النقل المكتبي
                            </h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/conference.png" className=" size-full w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/conference.png" /></figure>
                            <h3>المؤتمرات</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/government.png" className=" size-full w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/government.png" /></figure>
                            <h3>الموظفين الحكوميين</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/hall.png" className=" size-full w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/hall.png" /></figure>
                            <h3>حفلات الزفاف</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/stage.png" className=" size-full w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/stage.png" /></figure>
                            <h3>الحفلات والمهرجانات</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/soccer-player.png" className=" size-full w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/soccer-player.png" /></figure>
                            <h3>فرق رياضية</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src="https://alasayeltours.com/wp-content/uploads/2023/12/hajj.png" className=" size-full w-32" alt srcSet="https://alasayeltours.com/wp-content/uploads/2023/12/hajj.png" /></figure>
                            <h3>رحلات الحج والعمرة</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

