import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import ourCarsHeader from '../../assets/our-cars-header.jpg'
import aboutUs1 from '../../assets/about-us-1.jpg'
import aboutUs2 from '../../assets/about-us-2.jpg'
import { useLocation } from 'react-router-dom'

export default function AboutUs() {

  let { pathname } = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return (
    <section className='pb-32 overflow-hidden'>
      <div className='w-full relative'>
        <div className='w-full bg-slate-700 bg-opacity-50 absolute top-0 left-0 right-0 bottom-0'>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='text-white text-5xl font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-nowrap'>من نحن</motion.h2>
        </div>
        <img className='h-[400px] object-cover w-full' src={ourCarsHeader} alt="" />
      </div>
      <div className='py-10 bg-[url(https://alasayeltours.com/wp-content/uploads/2023/11/Untitled-design-57.jpg)]'>
        <div className='flex flex-wrap w-3/4 mx-auto'>
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2 rounded-3xl'>
            <img className='w-3/4 rounded-3xl mx-auto' src={aboutUs1} alt="" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2'>
            <h2 className='my-5 text-2xl font-bold'>من نحن</h2>
            <p className='text-slate-700 text-lg'>
              شركة الأصايل (إعتمار) للنقل وهي شركة متخصصة في مجال خدمات تأجير الحافلات VIP محليا ودوليا. منذ تأسيس الشركة عام 1417هـ وهي إحدى الكيانات الرائدة في مجال خدمات النقل وتأجير السيارات والحافلات اليومي وطويل المدى. الشركة لها باع طويل من الإنجازات وتقديم الخدمات المميزة في مجال النقل باحترافية عالية وتمكن قوي نابع من خبرات متراكمة حيث تضم شركتنا طاقم إداري وفني على مستوى عال من الخبرة والكفاءة التي تسمح لهم بتقديم أفضل الخدمات لعملائنا وبأسعار تنافسية. كما نسعى دوما في شركة الأصايل (إعتمار) للنقل إلى تطوير وتقديم خدمات مميزة سواء للمستخدم الفرد أو المؤسسات الحكومية والتجارية، بالإضافة إلى الجهات الأخرى ذات العلاقة بمجال النقل وتأجير الحافلات VIP ولذا.. فإننا نمد عملائنا بخدمات شاملة ومتميزة يتم تقديمها باحترافية عالية لتواكب المعايير المحلية والعالمية وتلبي احتياجات ومتطلبات العملاء.
            </p>
          </motion.div>
        </div>
        <div className='flex flex-wrap mx-auto w-11/12 mt-32'>
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2  rounded-3xl lg:order-1'>
            <img className='w-3/4 mx-auto lg:w-full rounded-3xl' src={aboutUs2} alt="" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2 '>
            <div className='mx-auto'>
              <h2 className='my-5 text-2xl font-bold'>قيمنا</h2>
              <p className='text-slate-700 text-lg tracking-wider my-8 w-5/6 mx-auto'>
                إننا في شركة الأصايل (إعتمار) للنقل نلتزم بمجموعة من القيم والمبادئ التي نصمم عليها ونعتبرها سبيلنا نحو النجاح والتميز.
                فقد أسهمت هذه القيم والمبادئ في نجاح شركتنا وتحقيق أهدافنا التي
                نصبو إليها، وتتمثل هذه القيم في:

                تفاني فريق العمل
              </p>
              <p className='text-slate-700 text-lg tracking-wider my-8 w-5/6 mx-auto'>حيث يبذل فريق العمل لشركتنا قصارى جهده لتقديم خدمة فائقة الجودة لكسب رضاء عملائنا.

                الأمانة والنزاهة</p>
              <p className='text-slate-700 text-lg tracking-wider my-8 w-5/6 mx-auto'>
                تعتبر من أهم قيمنا ومبادئنا في جميع تعاملاتنا.

                احترام عملائنا
              </p>
              <p className='text-slate-700 text-lg tracking-wider my-8 w-5/6 mx-auto'>
                نولي عملائنا كامل الاحترام والتقدير ونسعى دوما لتلبية احتياجاتهم على الوجه الأمثل.

                الالتزام
              </p>
              <p className='text-slate-700 text-lg tracking-wider my-8 w-5/6 mx-auto'>
                وهو أهم القيم التي من خلالها ثقة العملاء وتجعل شركتنا الخيار الأمثل لديهم

                الحرص على الجودة
              </p>
              <p className='text-slate-700 text-lg tracking-wider my-8 w-5/6 mx-auto'>
                إن تطبيق معايير الجودة والالتزام بها يؤدي في النهاية إلى الوصول إلى مستوى عال من الجودة والكفاءة.

                الابتكار والإبداع
              </p>
              <p className='text-slate-700 text-lg tracking-wider my-8 w-5/6 mx-auto'>
                في تقديم حلول تناسب جميع وتسهم في تطوير الخدمات الشركة.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
