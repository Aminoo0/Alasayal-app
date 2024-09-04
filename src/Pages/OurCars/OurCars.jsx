import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { dataCars } from '../../Components/OurCarsDetails/OurCarsDetails'

export default function OurCars() {


    const [ourCars, setOurCars] = useState(dataCars)
    const [term, setTerm] = useState('')
    const [newFilter, setNewFilter] = useState('')
    // console.log(dataCars);

    let filterCars = (e) => {
        setTerm(e.target.value)
        setNewFilter(ourCars.filter((car) => car.content.toLowerCase().includes(term.toLowerCase())))
        // setOurCars(newFilter)
    }

    useEffect(() => {
        if (term == '') {
            setOurCars(dataCars)
        } else {
            setOurCars(newFilter)
        }
    }, [term])

    return (
        <section className='pb-36'>
            <div className='w-full mb-10 relative'>
                <div className='w-full bg-slate-700 bg-opacity-50 absolute top-0 left-0 right-0 bottom-0'>
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='text-white text-5xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>سياراتنا</motion.h2>
                </div>
                <img className='h-[400px] object-cover w-full' src="https://alasayeltours.com/wp-content/uploads/2024/01/Untitled-design-54.jpg" alt="" />
            </div>
            <motion.div initial={{ opacity: .5, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative w-3/4 md:w-1/4 mx-auto my-5">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input onChange={filterCars} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search For Cars..." />
            </motion.div>

            <div className='flex flex-wrap gap-y-7 p-5'>
                {ourCars?.map((car, index) =>
                    <motion.div whileHover={{ scale: 1.03 }} initial={{ opacity: .5, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} key={index} className='w-full lg:w-1/4 p-3'>
                        <Link to={`/ourcars/${car.id}/${car.content}`} target='_blank'><div className='flex flex-col justify-center border rounded-xl hover:border-[#ee4023] cursor-pointer'>
                            <div className='overflow-hidden rounded-t-xl'>
                                <img className='w-full rounded-t-xl hover:scale-110 duration-700' src={car.mainImage} alt="" />
                            </div>
                            <div className='p-2'>
                                <p className='text-slate-500'>{car.content}</p>
                                <h2 className='text-xl font-semibold'>{car.title}</h2>
                            </div>
                        </div>
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
