import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../../../images/logos/Group 1329.png'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Events = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url=`http://localhost:5000/service`
        fetch(url,{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    };
    return (
        <div className='flex'>
            <div className='w-72 h-screen bg-white p-4'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <div className='flex justify-center items-center gap-2 mt-8'>
                    <MdOutlinePeopleAlt />
                    <h2 className='text-sm'>Add Proffer registration list</h2>
                </div>
                <div className='flex justify-start items-center text-blue-500 mt-5 gap-2'>
                    <AiOutlinePlus />
                    <p className='text-blue-500'>Add Event</p>
                </div>
            </div>
            <div className='w-full'>
                <h2 className='bg-white p-5 w-full mb-5'>Add Event</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='p-8 bg-white ml-5 mr-5 rounded-lg' >
                        <input className='px-3 py-1 border' placeholder='Title' {...register("name", { required: true, maxLength: 20 })} /> <br />
                        <input className='px-3 py-1 border my-3' placeholder='Images Link' {...register("img")} /> <br />
                    </div>
                    <div className='flex justify-end mr-5 mt-3'>
                        <input className='px-3 py-1 bg-[#0084FF] text-white rounded-md cursor-pointer hover:bg-[#1072ce]' type="submit" value="Add Service" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Events;