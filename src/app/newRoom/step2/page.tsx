"use client" 
import { Map } from '@/src/components/modules/Map/Map';
import Alert from '@/src/components/modules/alert/Alert'; 
import ContentNavigator from '@/src/components/modules/contentNavigator/ContentNavigator';
import StepLayout from '@/src/components/modules/stepLayout/StepLayout';
import Stepper from '@/src/components/modules/stepper/Stepper';
import StepperInfo from '@/src/components/modules/stepperInfo/StepperInfo'; 
import { useEffect, useState } from 'react'; 
 

const page = () => { 
    const [disabelNextButton, setDisabelNextButton] = useState(true)
    const [change,setChange]=useState(false)
 
    useEffect(() => {
        if (change) {
               setDisabelNextButton(false)
        }
    }, [change])
    
    const mapChangeHandler=()=>setChange(true)
     
    return (
        <StepLayout stepperActive={2}>
                <div className='max-w-[1120px] py-8 flex gap-0 sm:!gap-5'>
                <div className='hidden md:!flex lg:!min-w-[21%] min-w-[23%] '>
                        <Stepper active={2} />
                    </div> 
                    <div className='flex flex-col gap-3 w-full'>
                        <p>انتخاب موقعیت در نقشه</p>
                        <p className='font-vazir font-light text-sm leading-6'>مکان نما در وسط صفحه ثابت است. نقشه را به گونه ای حرکت دهیه تا مکان نما بر روی مکان اقامتگاه شما قرار گیرد. با استفاده از کلید + بر روی نقشه زوم کنید.</p>
                        <Alert variant={"danger"} />
                        <Map className='mb-20 z-10' mapChangeHandler={mapChangeHandler} position={[35.551066,51.297588]}/>
                        <ContentNavigator  disablelPrevButton={false} disabelNextButton={disabelNextButton} prevLink={'newRoom/step1'} nextLink={'newRoom/step3'} />
                    </div>
                    <div className='max-w-[243px]'>
                    <StepperInfo title="مکان اقامتگاه" text="با حرکت مکان نما و جابجا شدن بر روی نقشه, مکان نما را بر روی محل اقامتگاه خود, قرار دهید.
                     همچنین می توانید با استفاده از کلیدهای + و – بزرگنمایی نقشه را تغییر دهید و یا برای دقت بیشتر, نقشه را به حالت Satellite درآورید." />
                    </div> 
                </div> 
        </StepLayout>
    )
}

export default page
