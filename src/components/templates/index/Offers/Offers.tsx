import Slider from '@/src/components/templates/index/Offers/components/slider/Slider';
import React from 'react';

const Offers = () => {
    return (
        <div className='mt-8'>
            <p className='text-lg text-[#252a31] mb-1'>ویلاهای لوکس و مجلل</p>
            <p className='text-sm text-[#666] mb-1'>
                ویلاهای لوکس و لاکچری برای مشکل پسندها
            </p>
            <Slider />
        </div>
    );
};

export default Offers;
