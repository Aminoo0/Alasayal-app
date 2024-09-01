import { motion } from 'framer-motion'
import React from 'react'

export default function ContactUsCaption() {
    return (<>
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='w-11/12 bg-[url(https://alasayeltours.com/wp-content/uploads/2023/12/Element.png)] mx-auto py-10 flex flex-col gap-y-10 rounded-lg bg-red-500 absolute -top-28 left-1/2 -translate-x-1/2'>
            <div className='flex justify-center'>
                <h2 className='text-2xl text-[#222732]'>اتصل بنا الآن لمزيد من المعلومات</h2>
            </div>
            <div className='flex flex-wrap justify-center gap-5'>
                <motion.a initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, type: 'spring', bounce: .5, damping: 8, delay: .5 }} href="tel:+966535877758"> <button className='px-36 rounded-xl py-4 bg-white text-[#e64a41] text-xl font-bold hover:text-[#222732] hover:scale-105 duration-300'>اتصال <i className="fa-solid fa-phone"></i></button></motion.a>
                <motion.a initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, type: 'spring', bounce: .5, damping: 8, delay: .5 }} href="https://wa.me/966535877758" target='_blank'> <button className='px-36 rounded-xl py-4 bg-white text-[#e64a41] text-xl font-bold hover:text-[#222732] hover:scale-105 duration-300'>واتساب <i className="fa-brands fa-whatsapp"></i></button></motion.a>
            </div>
        </motion.section>
    </>)
}
