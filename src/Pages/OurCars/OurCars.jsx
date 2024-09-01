import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function OurCars() {

    const [dataCars, setDataCars] = useState([
        { id: 1, image: 'https://alasayeltours.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-31-at-5.54.17-PM-335x186.jpeg', content: 'Mercedes mcv 260 23-30 Passenger Mini-Bus', title: 'Contact for a price' },
        { id: 2, image: 'https://alasayeltours.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-31-at-4.51.06-PM-335x186.jpeg', content: 'Mercedes Sprinter 15 Passenger- Van 2023', title: 'Contact for a price' },
        { id: 3, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/23my_img_ext_cd542_tau_rge_ajn_fb07674gl64665-335x186.webp', content: 'Ford Taurus 2024-Car', title: 'Contact for a price' },
        { id: 4, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/230301_BMW-740i_Still-51-335x186.jpg', content: 'BMW 740i-2023 Car', title: 'Contact for a price' },
        { id: 5, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/2024-gmc-yukon-at4-102-654d2f3b1dc59-670x372.jpg', content: 'GMC Yukon 2024-Car', title: 'Contact for a price' },
        { id: 6, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/2023-gmc-yukon-denali-ultimate-101-1651589972-670x372.jpg', content: 'GMC Yukon 2023-Car', title: 'Contact for a price' },
        { id: 7, image: 'https://alasayeltours.com/wp-content/uploads/2020/09/WhatsApp-Image-2023-06-13-at-17.11.42-q7yp73mfjfjgngevhiai27y50t9ls8lgwfbuoi1m6g-335x186.jpeg', content: 'Mercedes Benz Vip-Black Queen-Bus', title: 'Contact for a price' },
        { id: 8, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-16-at-11.43.55-AM-1-670x372.jpeg', content: 'Mercedes Bedroom And Sofa Set - Bus', title: 'Contact for a price' },
        { id: 9, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/WhatsApp-Image-2024-01-31-at-4.51.35-PM-335x186.jpeg', content: 'Mercedas Benz Vip-Couch- Bus', title: 'Contact for a price' },
        { id: 10, image: 'https://alasayeltours.com/wp-content/uploads/2020/09/5fd174ae-9555-4303-8888-cf8c5a4ac7b5-768x1024-1-335x186.jpg', content: 'Mercedes Benz Vip-Brown-Bus', title: 'Contact for a price' },
        { id: 11, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/WhatsApp-Image-2024-01-31-at-4.40.05-PM-1-335x186.jpeg', content: 'Mercedes Face-to-Face Seating-Bus', title: 'Contact for a price' },
        { id: 12, image: 'https://alasayeltours.com/wp-content/uploads/2020/09/WhatsApp-Image-2022-10-16-at-3.27.39-PM-2-335x186.jpg', content: 'Mercedes Face-to-Face Seating -Vip Bus', title: 'Contact for a price' },
        { id: 13, image: 'https://alasayeltours.com/wp-content/uploads/2020/09/WhatsApp-Image-2023-12-18-at-6.26.32-PM-1-335x186.jpeg', content: 'Mercedes Benz Vip Arabic Sitting-Grebe Bus', title: 'Contact for a price' },
        { id: 14, image: 'https://alasayeltours.com/wp-content/uploads/2020/09/6-576x1024-1-335x186.jpg', content: 'Mercedes Benz Vip Arabic Sitting-Bus', title: 'Contact for a price' },
        { id: 15, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-18-at-6.29.55-PM-335x186.jpeg', content: 'Mercedes Benz 40 Passenger-Bus', title: 'Contact for a price' },
        { id: 16, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-18-at-6.30.43-PM-3-335x186.jpeg', content: 'Mercedes Benz 50 Passenger-Bus', title: 'Contact for a price' },
        { id: 17, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-14-at-1.55.57-PM-335x186.jpeg', content: 'Mercedes Benz S 450-2023', title: 'Contact for a price' },
        { id: 18, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/toyota-hiace-2023-335x186.jpg', content: 'Toyota Hiace 2023 Mini-Bus', title: 'Contact for a price' },
        { id: 19, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/mercedes-s500-2-335x186.jpg', content: 'Mercedes S500-2023-Car', title: 'Contact for a price' },
        { id: 20, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/toyota-coster-1-335x186.jpg', content: 'Toyota Coster Mini-Bus', title: 'Contact for a price' },
        { id: 21, image: 'https://alasayeltours.com/wp-content/uploads/2019/09/mercedes-vito-2-335x186.jpg', content: 'Mercedes Vito-V Class - Van 6 Passenger', title: 'Contact for a price' },
        { id: 22, image: 'https://alasayeltours.com/wp-content/uploads/2023/12/2019-mercedes-benz-sprinter-335x186.webp', content: 'Mercedes Sprinter V-VIP 7 Passenger- Van', title: 'Contact for a price' },
        { id: 23, image: 'https://alasayeltours.com/wp-content/uploads/2020/09/WhatsApp-Image-2023-10-09-at-8.50.49-AM-1-1024x768-1-335x186.jpeg', content: 'Mercedes-Sprinter Vip-14 Passenger-Van', title: 'Contact for a price' },
        { id: 24, image: 'https://alasayeltours.com/wp-content/uploads/2020/09/WhatsApp-Image-2023-10-09-at-8.50.49-AM-1024x768-1-335x186.jpeg', content: 'Mercedes Sprinter-18 passenger-van', title: 'Contact for a price' },
        { id: 25, image: 'https://alasayeltours.com/wp-content/uploads/2020/08/ford-taurus-2023-2-335x186.jpg', content: 'Ford Taurus 2023-Car', title: 'Contact for a price' },
        { id: 26, image: 'https://alasayeltours.com/wp-content/uploads/2020/02/hyundai-h1-1-335x186.jpg', content: 'Hyundai H1- 7 passenger 2023-car', title: 'Contact for a price' },
        { id: 27, image: 'https://alasayeltours.com/wp-content/uploads/2020/02/hyundai-staria-1-335x186.jpg', content: 'Hyundai Staria 8 passenger 2024-car', title: 'Contact for a price' },
    ])
    const [ourCars, setOurCars] = useState(dataCars)
    const [term, setTerm] = useState('')
    const [newFilter, setNewFilter] = useState('')

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
                    <motion.div whileHover={{ rotateZ: 5 , scale:1.03 }} initial={{ opacity: .5, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} key={index} className='w-full lg:w-1/4 p-3'>
                        <a href='https://wa.me/966535877758' target='_blank'><div className='flex flex-col justify-center border rounded-xl hover:border-[#ee4023] cursor-pointer'>
                            <div className='overflow-hidden rounded-t-xl'>
                                <img className='w-full rounded-t-xl hover:scale-110 duration-700' src={car.image} alt="" />
                            </div>
                            <div className='p-2'>
                                <p className='text-slate-500'>{car.content}</p>
                                <h2 className='text-xl font-semibold'>{car.title}</h2>
                            </div>
                        </div>
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
