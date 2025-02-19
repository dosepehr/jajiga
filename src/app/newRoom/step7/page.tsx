
"use client"
import ContentNavigator from '@/src/components/modules/contentNavigator/ContentNavigator';
import Stepper from '@/src/components/modules/stepper/Stepper';
import StepperInfo from '@/src/components/modules/stepperInfo/StepperInfo';
import { useState } from 'react';
import Select from 'react-select';
import { firstTimeOptions, secondTimeOptions } from '@/src/utils/selectOptions';
import StepLayout from '@/src/components/modules/stepLayout/StepLayout';

const page = () => {

    const [disabelNextButton, setDisabelNextButton] = useState<boolean>(false)
    const [dayCount, setDayCount] = useState<number>(1)
    const [firstTimeOptionsSelectedOption, setFirstTimeSelectedOption] = useState<{ label: string; value: string; } | null>(null);
    const [secondTimeOptionsSelectedOption, setSecondTimeSelectedOption] = useState<{ label: string; value: string; } | null>(null);


    const decrementHandler = () => {
        if (dayCount !== 1) {
            setDayCount(prev => prev - 1)
        }
    }


    return ( 
        <StepLayout stepperActive={7}>
            <div className='max-w-[1120px] py-8 flex gap-0 sm:!gap-5'>
                <div className='hidden md:!flex lg:!min-w-[21%] min-w-[23%] '>
                    <Stepper active={7} />
                </div>
                <div className='w-full space-y-4'>
                    <div className='flex justify-between   pl-1 sm:!flex-row flex-col items-start sm:!items-center'>
                        <p>حداقل مدت اقامت</p>
                        <div className='flex justify-between w-full sm:!my-0 my-2 sm:!w-1/2 items-center'>
                            <p onClick={() => setDayCount(prev => prev + 1)} className='text-2xl cursor-pointer hover:text-gray-500'>+</p>
                            <p>{dayCount} شب</p>
                            <p onClick={decrementHandler} className={`${dayCount <= 1 && 'text-gray-300 !cursor-not-allowed'} text-2xl cursor-pointer mb-4 hover:text-gray-500`}>_</p>

                        </div>
                    </div>
                    <span className='mt-3 font-vazir font-light  text-xs'>بعنوان مثال درصورت تعیین حداقل 2 شب اقامت، درخواست رزرو برای 1 شب اقامت قابل ثبت نخواهد بود.</span>
                    <div className='flex gap-3 items-start lg:!items-center lg:!flex-row flex-col'>
                        <p className=' whitespace-nowrap'>زمان تحویل از</p>
                        <Select
                            defaultValue={[{ label: "12 ظهر", value: "12 ظهر" }]}
                            onChange={setFirstTimeSelectedOption as any}
                            isClearable={true}
                            className='w-full  text-sm font-vazir font-light '
                            isRtl={true}
                            isSearchable={true}
                            options={firstTimeOptions}
                        />
                        تا
                        <Select
                            defaultValue={[{ label: "نامحدود", value: "نامحدود" }]}
                            onChange={setSecondTimeSelectedOption as any}
                            isClearable={true}
                            className='w-full text-sm font-vazir font-light '
                            isRtl={true}
                            isSearchable={true}
                            options={secondTimeOptions}
                        />
                    </div>
                    <div className='flex gap-3 items-start lg:!items-center justify-between !mt-5'>
                        <p className=' whitespace-nowrap'>زمان تخلیه</p>
                        <Select
                            defaultValue={[{ label: "11 صبح", value: "11 صبح" }]}
                            onChange={setFirstTimeSelectedOption as any}
                            isClearable={true}
                            className='w-[60%]  text-sm font-vazir font-light '
                            isRtl={true}
                            isSearchable={true}
                            options={firstTimeOptions}
                        />
                    </div>

                    <ContentNavigator disablelPrevButton={false} disabelNextButton={disabelNextButton} prevLink={'newRoom/step6'} nextLink={'newRoom/step8'} />
                </div>
                <div className='max-w-[243px] sticky top-[68px] h-max  md:!block hidden'>
                    <StepperInfo className=' !relative !top-0' title="زمان تحویل و تخلیه" text=" زمان تحویل اقامتگاه به میهمان بعدی می بایست با فاصله مناسب از زمان تخلیه اقامتگاه توسط میهمان قبلی تعیین گردد تا فرصت کافی برای نظافت و مرتب کردن خانه فراهم باشد. زمان تحویل بطور معمول ساعت 2 بعد از ظهر می‌باشد.‎توجه: با انتخاب گزینه نامحدود آمادگی خواهید داشت تا در هر زمانی از شبانه روز, منزل را به میهمان تازه وارد تحویل دهی" />
                </div>
            </div>
        </StepLayout>
    )
}

export default page
