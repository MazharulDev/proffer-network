import React from 'react';

const SelectOneService = ({ service }) => {
    const { img, name } = service;
    return (
        <div className='flex gap-5 bg-white px-8 py-6 rounded-lg'>
            <img width={100} src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <button className='mt-16 ml-28 px-4 py-1 bg-gray-400 rounded text-gray-200'>Cancel</button>
            </div>
        </div>
    );
};

export default SelectOneService;