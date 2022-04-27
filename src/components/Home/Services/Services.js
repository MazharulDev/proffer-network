import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='grid grid-cols-4 px-10 gap-4 mx-auto w-fit'>
            {
                services.map(service=> <Service key={service._id} service={service}/>)
            }
        </div>
    );
};

export default Services;