import React from 'react';

const Service = ({ service }) => {
    const { name, img } = service;
    return (
        <div className='mt-10'>
            <div className='bg-white'>
                <img className='absolute w-52'src={img} alt="" />
                
            </div>
            <p className='relative text-center p-5 bg-[#421FCF] w-52 mt-48 rounded-b-lg text-white'>{name}</p>
        </div>
    );
};

export default Service;