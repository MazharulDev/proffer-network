import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = ({handleSelectService}) => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://gentle-dusk-65278.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='grid grid-cols-4 px-10 gap-8 mx-auto w-fit'>
            {
                services.map(service=> <Service handleSelectService={handleSelectService} key={service._id} service={service}/>)
            }
        </div>
    );
};

export default Services;