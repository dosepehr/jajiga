// import Layout from '@/src/components/modules/Layout/Layout'
// import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb'
// import Navbar from '@/src/components/modules/navbar/Navbar'
// import Box from '@/src/components/templates/host/Box/Box'
// import { BiSupport } from 'react-icons/bi';
// import { BsSuitcase } from "react-icons/bs";
// import { FaRegEye } from 'react-icons/fa6';
// import { GrHomeRounded } from 'react-icons/gr';
// import { IoPersonOutline } from 'react-icons/io5';
// import { TbMessageCirclePlus } from "react-icons/tb";
// import { LuBell } from "react-icons/lu";
// import { PiCallBell, PiHandsPrayingDuotone } from 'react-icons/pi';
// import { GoPeople } from "react-icons/go";
// import { RiMoneyDollarCircleLine } from "react-icons/ri";
// import { GiTakeMyMoney } from "react-icons/gi";
// import Footer from '@/src/components/modules/Footer/Footer';
// import Link from 'next/link';
// const page = () => {
//     return (
//         <>
//             <Navbar />
//             <Breadcrumb title='چگونه میزبان شوم؟' description='نکات زیر را مطالعه کنید تا با اطلاعات کافی در جاجیگا میزبان شوید و با خیال آسوده کسب درآمد کنید' />
//             <Layout className='pb-5'>
//                 <div className='max-w-[1120px] mx-auto pt-2'>
//                     <div className='text-center'>
//                         <h2 className='border-b-4 mt-4 mb-3 pb-2 mx-auto border-solie text-xl border-[#ffc804] w-max'>1- ابتدا ثبت‌نام کنید</h2>
//                         <p className=' font-vazir-light text-sm'>ابتدا ثبت‌نام کنید تا برای جاجیگا قابل شناسایی شوید و بتوانید تنظیمات شخصی خودتان را اعمال کنید.‎</p>
//                         <div className='grid mt-11 grid-cols-[auto,auto,auto] gap-5'>
//                             <Box icon={<IoPersonOutline />} title='حساب کاربری حاوی چه مطالبی ست؟' text='برای ثبت‌نام کافیست نام، نام خانوادگی و شماره موبایل خود را وارد کنید. پس از ثبت‌نام می توانید اقامتگاه خود را به رایگان در سایت ثبت کنید. البته برای انتشار اقامتگاه و شروع میزبانی در سایت می باید با تکمیل حساب کاربری، آن را به تایید برسانید و به سطح "تایید شده" ارتقا دهید. حتما تصویر با کیفیت و شادی از خود را در پروفایل حساب کاربری اضافه کنید تا تاثیر خوشایندی بر مهمانان بگذارید.' />
//                             <Box icon={<FaRegEye />} title='چه اطلاعاتی از من قابل مشاهده است؟' text='درشرایط معمول تنها اسم کوچک, تصویر کاربری و شرحی که درباره خود می نویسید برای سایرین قابل مشاهده خواهد بود. هنگامی که اقامتگاه شما توسط یک ‏میهمان رزرو شود, نام، نام خانوادگی, شماره تماس و آدرس دقیق اقامتگاه شما در سند رزرو ثبت می شود و برای میهمان قابل مشاهده خواهد بود. ‎سایر اطلاعات ثبت شده, بطور کاملا محرمانه ذخیره شده و قابل ‏دسترسی نمی‌باشد.' />
//                             <Box icon={<BsSuitcase />} title='چرا باید حساب کاربری خود را تکمیل کنم ؟' text='تکمیل اطلاعات هویتی همچون کد ملی و آپلود کارت ملی موجب افزایش ایمنی کاربران جاجیگا بوده و زمینه ساز تعامل ایمن و توام با آسودگی کاربران با یکدیگر می‌باشد. تکمیل اطلاعات ارتباطی همچون ایمیل نیز باعث سهولت بیشتر در عملکرد سامانه و تسهیل در ارسال به موقع اعلان های فصلی و نکات و آموزش های دوره ای برای میزبان ها می شود.' />
//                         </div>
//                     </div>
//                 </div>
//             </Layout>
//             <Layout className='pb-5 !bg-[#f2f5f8]'>
//                 <div className='max-w-[1120px] mx-auto pt-2'>
//                     <div className='text-center'>
//                         <h2 className='border-b-4 mt-4 mb-3 pb-2 mx-auto border-solie text-xl border-[#ffc804] w-max'>2- اقامتگاه خود را ثبت کنید </h2>
//                         <p className=' font-vazir-light text-sm'> حال می بایست برای معرفی اقامتگاه خود به گردشگران, یک نمایه (پروفایل) برای اقامتگاه خود ایجاد کنید‎.‎</p>
//                         <div className='grid mt-11 grid-cols-[auto,auto,auto] gap-5'>
//                             <Box className='!pb-3' icon={<GrHomeRounded />} title='نمایه اقامتگاه من حاوی چه مطالبی ست؟' text=' در ‎نمایه اقامتگاه‎, شما می بایست مشخصات دقیق منزل و امکانات قابل استفاده توسط میهمانان را مشخص کنید. ‎عکسهایی واضح و جدید‎ ‏از اقامتگاه خود فراهم نموده و‎ Upload ‎کنید, همچنین ‎نرخ اجاره بها و تقویم اجاره‎ منزل خود در روزهای مختلف هفته و فصول مختلف سال را نیز تنظیم کنید. در آخر مقرراتی که می باید توسط میهمانان رعایت شود را نیز مشخص کنید. ‎نمایه اقامتگاه شما درواقع بیانگر مشخصات و ویژگیهای واقعی ‏منزل شما برای گردشگران علاقه مند خواهد بود‎.‎' />
//                             <Box className='!pb-3' icon={<PiCallBell />} title='چه کسانی می‌توانند اقامتگاهم را اجاره کنند؟' text='شما در کنار ثبت مشخصات و امکانات اقامتگاه خود, مواردی همچون ‎تقویم کاری اقامتگاه, اجاره بها و مقررات منزل‎ را نیز تعیین می کنید. سپس نمایه اقامتگاه شما در وبسایت ‎منتشر‎ می شود و برای مسافرین و گردشگران به نمایش درمی آید. گردشگرانی که دارای حساب کاربری در جاجیگا باشند, با جستجو در وبسایت, در صورتی که مشخصات اقامتگاه شما را مناسب نیاز خود بیابند درصورت قبول مقررات منزل, برای اجاره اقامتگاه در بازه زمانی ‏مد نظر "درخواست رزرو" ارسال می کنند.‏ درصورت تایید شما و پرداخت صورتحساب توسط مهمان، رزرو قطعی می شود و سند رزرو صادر می گردد.' />
//                             <Box className='!pb-3' icon={<BiSupport />} title='آیا میزبانی و رزرو اینترنتی سخت است؟' text='امکانات تعبیه شده در سایت بگونه ای ست تا پس از صرف وقت کافی برای ثبت و انتشار اقامتگاه خود, بتوانید تمام مراحل میزبانی شامل معرفی اقامتگاه, بازاریابی, ارتباطات, ‏رزرواسیون, دریافت وجوه و پشتیبانی, را طی فرایندی ساده و کاربردی و با صرف زمانی اندک, برای شما امکانپذیر نماید. با این وجود, ما از لحظه ثبت‌نام، ثبت اقامتگاه و آغاز میزبانی, در کنارتان هستیم و شما را در این مسیر هیجان انگیز همراهی میکنیم.' />
//                         </div>
//                     </div>
//                 </div>
//             </Layout>
//             <Layout className='pb-10'>
//                 <div className='max-w-[1120px] mx-auto pt-2'>
//                     <div className='text-center'>
//                         <h2 className='border-b-4 mt-4 mb-3 pb-2 mx-auto border-solie text-xl border-[#ffc804] w-max'>3- برای ورود مهمانان آماده شوید!</h2>
//                         <p className=' font-vazir-light text-sm'>هنگامی که یک مهمان اقامتگاه شما را انتخاب نماید, درخواست رزرو خود را ثبت کرده و ارسال می‌کند. </p>
//                         <div className='grid mt-11 grid-cols-[auto,auto,auto] gap-5'>
//                             <Box icon={<LuBell />} title='چگونه از دریافت درخواست رزرو مطلع شوم؟' text='برای سرعت بخشیدن به فرایند رزرو, ثبت درخواست رزرو توسط میهمان یا قطعی شدن رزرو با بهره گیری از سامانه اس ام اس متنی و تماس های خودکار صوتی و همچنین سرویس ایمیل به اطلاع میزبان می‌رسد تا در اسرع وقت از وضعیت رزرو آگاهی یافته و اقدامات لازم را به انجام برساند. در مواقع ضروری تیم پشتیبانی جاجیگا نیز با دو طرف رزرو تماس خواهند گرفت. هرگونه تغییری در وضعیت رزرو, به همین روشها به اطلاع دو طرف خواهد رسید.' />
//                             <Box icon={<GoPeople />} title='فرایند تحویل اقامتگاه چگونه است؟ ' text='پس از قطعی شدن رزرو اقامتگاه, سند رزرو قطعی حاوی اطلاعات کامل رزرو , نام و نام خانوادگی, تعداد نفرات, تاریخ و ساعت ورود و خروج, جزییات صورتحساب پرداخت شده, آدرس دقیق اقامتگاه و شماره تماس میهمان و میزبان برای هر دو طرف ارسال می گردد. توصیه می شود میزبان پیش از شروع سفر با میهمان تماس گرفته و هماهنگی های لازم برای نحوه و زمان تحویل اقامتگاه به ایشان را به انجام برساند تا میهمان با خیالی آسوده سفر خود را آغاز نماید.' />
//                             <Box icon={<TbMessageCirclePlus />} title='آیا راهی برای ارتباط با میهمانان وجود دارد؟' text='ممکن است میهمان پیش از رزرو اقامتگاه, سوالاتی در مورد شرایط منزل و یا شرایط عمومی منطقه داشته باشد, یا ممکن است میزبان, پیش از قبول درخواست رزرو بخواهد سوالاتی از میهمان بپرسد. در این مواقع دو طرف رزرو می توانند با ارسال "پیام " در کادر مخصوص تعبیه شده در صفحه رزرو اقامتگاه، سوال و یا جواب خود را در مراحل مختلف رزرو برای طرف مقابل ارسال نمایند و سپس در صورت رفع ابهام رزرو را تایید یا قطعی نمایند.' />
//                         </div>
//                     </div>
//                 </div>
//             </Layout>
//             <Layout className='pb-10 !bg-[#f2f5f8]'>
//                 <div className='max-w-[1120px] mx-auto pt-2'>
//                     <div className='text-center'>
//                         <h2 className='border-b-4 mt-4 mb-3 pb-2 mx-auto border-solie text-xl border-[#ffc804] w-max'>4- میهمان نواز باشید</h2>
//                         <p className=' font-vazir-light text-sm'> میزبان های محبوب, به گرمی از میهمان خود استقبال می کنند. بعضی ورود میهمان را با چای و لبخند خاطره انگیز می کنند. اینکه چگونه محبوب میهمان خود می شوید با شماست.‎</p>
//                         <div className='grid mt-11 grid-cols-[auto,auto,auto] gap-5'>
//                             <Box className='!pb-3' icon={<PiHandsPrayingDuotone />} title='بعضی قواعد را بهتر است از ابتدا رعایت کنید' text='در کنار اخلاق خوب و مثبت اندیشی، توجه به نظافت اقامتگاه کلید موفقیت شماست. میزبانان محبوب و موفق, تمام مکانها و فضاهایی که توسط میهمانان مورد استفاده قرار می گیرد, همچون سرویس بهداشتی, آشپزخانه و اتاقها را پس از تحویل گرفتن اقامتگاه از میهمان قبل و پیش از ورود میهمان بعدی تمیز و مرتب کرده, اقلام فردی و بهداشتی همچون روتختی, روبالشی را تعویض نموده و اقلامی همچون دستمال کاغذی, دستمال توالت و مایع دستشوی را شارژ می کنند.‎' />
//                             <Box className='!pb-3' icon={<GiTakeMyMoney />} title='چگونگی اجاره بهای رزرو را دریافت می کنم؟' text='کلیه مراحل دریافت و پرداخت اجاره بها, در جاجیگا, بصورت آنلاین و از طریق درگاه‌های مطمئن بانکی به انجام می‌رسد. میهمانان و میزبانان هیچگاه نیاز پیدا نخواهند کرد تا در زمینه اجاره بها بطور مستقیم با یکدیگر مذاکره و چانه زنی نمایند. در هنگام قطعی شدن رزرو, کل مبلغ اجاره بها توسط میهمان به کیف پول خود در جاجیگا شارژ می شود. صبح روز بعد از تاریخ ورود ثبت شده در سند رزرو, کل مبلغ اجاره بها پس از کسر کارمزد, بطور خودکار به شماره شبای بانکی متعلق به میزبان واریز می شود.' />
//                             <Box className='!pb-3' icon={<RiMoneyDollarCircleLine />} title='کارمزد جاجیگا چگونه محاسبه می شود؟' text='عضویت در جاجیگا, ثبت و ارتقاء حساب کاربری, و ثبت و انتشار اقامتگاه شما در وبسایت بصورت کاملا رایگان انجام می پذیرد. تنها پس از به اجاره رفتن اقامتگاه, جاجیگا ۱۰٪ از کل مبلغ اجاره بهای تعیین شده توسط میزبان را بعنوان کارمزد خدمات خود کسر نموده و مابقی مبلغ اجاره بها را در روز بعد از تاریخ شروع رزرو به حساب بانکی میزبان واریز می کند. با توجه به الزام اداره امور مالیاتی، 0.9 درصد ارزش افزوده هم به صورتحساب میزبان اضافه می شود. لذا مجموع کسورات از صورتحساب 10.9 درصد می‌باشد.' />
//                         </div>
//                     </div>
//                 </div>
//             </Layout>
//             <div style={{ transition: ' transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s', transform: 'translateY(-8px)' }} className=" items-center flex sticky mt-8 mx-auto bottom-0 overflow-hidden z-[99] left-2 right-2 mb-4">
//                 <div className="py-0 px-4 h-16 rounded-lg bg-[#0009] mx-auto flex items-center w-[320px]">
//                     <Link  className="w-full mx-auto  relative block leading-9 px-4 outline-none text-center appearance-none whitespace-nowrap rounded-[38px] texr-[#333333] text-sm cursor-pointer bg-[#f0c807] " href="/newroom">
//                         ثبت اقامتگاه
//                     </Link> 

//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default page


 
 
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Navbar from '@/src/components/modules/navbar/Navbar';
import React from 'react';
import HostCart from '@/src/components/modules/hostCart/HostCart';
import Footer from '@/src/components/modules/Footer/Footer';
import Button from '@/src/components/modules/button';
import useHostCartData from '@/src/hooks/useHostCartData';

const page = () => {
    const HostData = useHostCartData();
    return (
        <>
            <Navbar />
            <Breadcrumb
                title={'چگونه میزبان شوم'}
                description='نکات زیر را مطالعه کنید تا با اطلاعات کافی در جاجیگا میزبان شوید و با خیال آسوده کسب درآمد کنید'
                
            />

            {HostData.map((cartData) => (
                <div
                    key={cartData.id}
                    className='py-4 space-y-10 rounded-t-xl'
                    style={{ background: cartData.bgColor }}
                >
                    <div className='flex flex-col text-center items-center justify-center space-y-2 rounded-t-xl'>
                        <h2 className='text-lg font-medium mt-2'>
                            {cartData.mainTitle}
                        </h2>
                        <div className='bg-yellow-300 h-1 rounded-lg w-36'></div>
                        <p className='text-sm text-textGray font-vazir-light'>
                            {cartData.secondaryTitle}
                        </p>
                    </div>
                    <div className='grid grid-cols-[auto,auto,auto] justify-center md:flex-row items-start Container md:gap-x-4 gap-y-10 px-4 pt-0 py-10'>
                        {cartData.carts.map((cart) => (
                            <HostCart
                                {...cart}
                                borderColor={cartData.bgColor}
                            />
                        ))}
                    </div>
                </div>
            ))}
            <div className='mx-auto w-80 max-w-[320px] sticky bottom-2 bg-[#00000099] h-16 rounded-lg flex items-center justify-center px-4 my-4'>
                <Button
                    className='w-full p-2 rounded-full text-center text-black flex items-center justify-center hover:bg-[#d2b43d] duration-300'
                    variant='yellow'
                >
                    ثبت اقامتگاه
                </Button>
            </div>
            <Footer />
        </>
    );
};

export default page; 
