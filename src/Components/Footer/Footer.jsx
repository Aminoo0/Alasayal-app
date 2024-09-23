import React from 'react'
import ContactUsCaption from '../ContactUsCaption/ContactUsCaption'
import footerLogo from '../../assets/main-logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (<>
    <footer className='bg-[#1f1d0d] pt-52 pb-5 relative'>
      <ContactUsCaption />
      <div className='w-11/12 mx-auto flex lg:gap-x-20 gap-y-5 flex-wrap lg:flex-nowrap border-b-2 border-opacity-25 border-white'>
        <div className='w-full lg:w-1/4'>
          <div className='w-4/5 mx-auto lg:w-full'>
            <a href="https://alasayeltours.com/">
              <img loading="lazy" src={footerLogo} className="attachment-full w-full size-full wp-image-25148" srcSet={footerLogo} /></a>
          </div>
          <p className='text-white my-8'>شركة الأصايل (إعتمار) للنقل وهي شركة متخصصة في مجال خدمات تأجير الحافلات VIP محليا ودوليا.

            منذ تأسيس الشركة عام 1417هـ وهي إحدى الكيانات الرائدة في مجال خدمات النقل وتأجير السيارات والحافلات اليومي وطويل المدى.</p>
        </div>
        <div className='my-5 w-full md:w-1/2 lg:w-1/4'>
          <ul className='flex flex-col gap-y-5'>
            <li className='text-[#e64a41]'>روابط مهمه</li>
            <ul className='text-white mr-5 flex flex-col gap-y-3'>
              <Link to={'/'}><li className='hover:text-[#e64a41] hover:mr-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-left ml-3 text-[#e64a41]"></i> الرئيسية</li></Link>
              <Link to={'/ourcars'}><li className='hover:text-[#e64a41] hover:mr-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-left ml-3 text-[#e64a41]"></i> سياراتنا</li></Link>
              <Link to={'/aboutus'}><li className='hover:text-[#e64a41] hover:mr-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-left ml-3 text-[#e64a41]"></i> من نحن</li></Link>
              <Link to={'/contactus'}><li className='hover:text-[#e64a41] hover:mr-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-left ml-3 text-[#e64a41]"></i> تواصل معنا</li></Link>
            </ul>
          </ul>
        </div>
        <div className='my-5 w-full md:w-1/2 lg:w-1/4'>
          <ul className='flex flex-col gap-y-5'>
            <li className='text-[#e64a41]'>حافلات كبيرة</li>
            <ul className='text-white mr-5 flex flex-col gap-y-3'>
              <Link to={'/ourcars/car'}><li className='hover:text-[#e64a41] hover:mr-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-left ml-3 text-[#e64a41]"></i>السيارات الصغيرة</li></Link>
              <Link to={'/ourcars/van'}><li className='hover:text-[#e64a41] hover:mr-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-left ml-3 text-[#e64a41]"></i>حافلات صغيرة</li></Link>
              <Link to={'/ourcars/minibus'}><li className='hover:text-[#e64a41] hover:mr-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-left ml-3 text-[#e64a41]"></i>حافلات كوستر</li></Link>
              <Link to={'/ourcars/bus'}><li className='hover:text-[#e64a41] hover:mr-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-left ml-3 text-[#e64a41]"></i>حافلات كبيرة</li></Link>
            </ul>
          </ul>
        </div>
        <div className='my-5 w-full lg:w-1/4'>
          <ul className='flex flex-col gap-y-5'>
            <li className='text-[#e64a41]'>تواصل معنا</li>
            <ul className='text-white mr-5 flex flex-col gap-y-3'>
              <li className=''><i className="fa-solid fa-location-dot ml-3 text-[#e64a41]"></i> المملكة العربية السعودية - الرياض - روابي - طريق الأمير سعد - ابن عبدالرحمن الأول - العزيزية - مركز النقل العام
              </li>
              <li className='cursor-pointer'> <i className="fa-solid fa-phone ml-3 text-[#e64a41]"></i><a href="tel:+966535877758" className="">الحافلات : 966535877758+
              </a>
              </li>
              <li className='cursor-pointer'> <i className="fa-solid fa-phone ml-3 text-[#e64a41]"></i><a href="tel:966534929551+" className="">
                السيارات : 966534929551+
              </a></li>
              <li className='cursor-pointer'> <i className="fa-regular fa-envelope ml-3 text-[#e64a41]"></i><a href="mailto:asayel.bus@gmail.com" className="">asayel.bus@gmail.com</a></li>
            </ul>
          </ul>
        </div>
        {/* <p className='lg:hidden text-center w-full text-[#e64a41] cursor-pointer my-10 text-2xl hover:text-[#842722] duration-300'>Engilsh</p> */}
      </div>
      <p className='text-center mt-8 text-white w-11/12 mx-auto'>Copyright © 2024. All Rights Reserved to <Link to={'https://alasayeltours.com/'} className='text-[#e64a41] cursor-pointer'> Alasayel .</Link> Created by <Link to={'https://on-dm.com/'} target='_blank' className='text-[#e64a41] cursor-pointer'>ON DM.</Link></p>
    </footer>
  </>)
}
