import React from 'react';
import Header from '../../Header/Header';
import SelectOneService from '../SelectOneService/SelectOneService';

const SelectService = ({selectService}) => {
    return (
        <div>
            <Header/>
            <div className='grid grid-cols-2 gap-5 w-fit mx-auto'>
            {
                selectService.map(service=><SelectOneService key={service._id} service={service}/>)
            }
            </div>
        </div>
    );
};

export default SelectService;