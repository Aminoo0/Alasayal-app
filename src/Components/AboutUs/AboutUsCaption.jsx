import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import AlAsaylFrontBus from '../../assets/Al-Asayl-front-bus.png'
import ourVision from '../../assets/our-vision.png'
import ourMission from '../../assets/our-mission.png'

export default function AboutUsCaption() {
    return (
        <section className={`bg-[url(assets/main-bg.jpg)]`}>
            <div className='flex flex-wrap items-center w-3/4 mx-auto'>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-2/5 flex justify-center lg:justify-start items-center mt-10'>
                    <img className='w-3/4' src={AlAsaylFrontBus} alt="" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-3/5 mt-10'>
                    <h3 className='text-3xl font-bold'>تأسيس الشركة</h3>
                    <h3 className='text-2xl font-semibold mt-10 mb-5'>من نحن</h3>
                    <p className=''>شركة الأصايل (إعتمار) للنقل وهي شركة متخصصة في مجال خدمات تأجير الحافلات VIP محليا ودوليا. منذ تأسيس الشركة عام 1417هـ وهي إحدى الكيانات الرائدة في مجال خدمات النقل وتأجير السيارات والحافلات اليومي وطويل المدى. الشركة لها باع طويل من الإنجازات وتقديم الخدمات المميزة في مجال النقل باحترافية عالية وتمكن قوي نابع من خبرات متراكمة حيث تضم شركتنا طاقم إداري وفني على مستوى عال من الخبرة والكفاءة التي تسمح لهم بتقديم أفضل الخدمات لعملائنا وبأسعار تنافسية.
                    </p>
                    <Link to={'/aboutus'}> <button className='border-2 border-[#e64a41] text-[#e64a41] text-xl font-semibold p-3 px-7 rounded-md mt-10 hover:scale-110 duration-300'>اقرأ المزيد</button></Link>
                </motion.div>
            </div>
            <div className='flex flex-wrap w-3/4 mx-auto'>
                <div className='w-full md:w-2/4 mx-auto'>
                    <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='mt-10'>
                        <img decoding="async" src={ourVision} title="Untitled design (32)" alt="Untitled design (32)" loading="lazy" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                        <h3 className='text-3xl my-5'>رؤيتنا</h3>
                        <p className='w-11/12 tracking-wide'>تتمثل رؤية الشركة في السعي أن تتبوأ مكانة مرموقة ورائدة بين شركات النقل وتأجير الحافلات VIP على المستوى المحلي والدولي.
                            نسعى جاهدين لكسب ثقة وولاء عملاءنا على المدى الطويل عن طريق تقديم خدمات ذات جودة عالية وبحرفية شديدة؛ وذلك بواسطة موظفين مدربين على يد متخصصين تدريبا فائما لإيجاد حلول إبداعية ومبتكرة لإدارة الأسطول وأيضًا من خلال استغلال مواردها الفنية والبشرية والتجهيزات المساندة
                            المتوفرة لها.
                            نتطلع أن تصبح شركة الأصايل (إعتمار) للنقل اسما رائدًا في مجال النقل وخدمات تأجير الحافلات والسيارات VIP، كما نسعى إلى إقامة علاقات شراكة وتعاون وتضامن مع منشآت مرموقة في مجال النقل داخل وخارج المملكة.</p>

                        <Link to={'/aboutus'} className='flex items-center gap-5 mt-5 mb-10 text-[#e64a41]'>
                            <h5 className=''>اقرأ المزيد</h5>
                            <i className="fa-solid fa-arrow-left text-sm"></i>
                        </Link>
                    </motion.div>
                </div>
                <div className='w-full md:w-2/4 mx-auto'>
                    <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='mt-10'>
                        <img decoding="async" src={ourMission} title="Untitled design (33)" alt="Untitled design (33)" loading="lazy" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                        <h3 className='text-3xl my-5'>رسالتنا</h3>
                        <p className='w-11/12 tracking-wide'>هي نشر المفهوم الحقيقي للجودة في مجال النقل وتأجير الحافلات والسيارات VIP وذلك بعملنا الدؤوب والمتطور وإلمامنا بكافة تفاصيل الخدمات التي نقدمها لعملائنا.
                            التطور ومواكبة العصر واحدة من أهم النقاط التي ترتكز عليها الشركة لضمان تجربة فريدة ومتميزة لعملائنا.
                            إتقان العمل والعمل بروح الفريق هي رسالة مترسخة داخل وجدان طاقم العمل بالشركة مما يضمن جودة الخدمة المقدمة لأصحاب الأعمال
                            والأفراد، ومختلف المؤسسات، والمنشآت.</p>
                        <Link to={'/aboutus'} className='flex items-center gap-5 mt-5 mb-10 text-[#e64a41]'>
                            <h5 className=''>اقرأ المزيد</h5>
                            <i className="fa-solid fa-arrow-left text-sm"></i>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
