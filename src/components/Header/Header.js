import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineCloseCircle } from "react-icons/ai"

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                {!open ? <HiMenu /> : <AiOutlineCloseCircle />}
            </div>
            <div className='md:flex justify-between items-center md:px-10 py-3'>
                <div>
                    <img width={200} src={logo} alt="" />
                </div>
                <div className={`md:flex md:items-center md:gap-4 bg-indigo-500 md:bg-transparent absolute md:static duration-500 ease-in ${open ? 'top-10' : 'top-[-120px]'}`}>
                    <div className='md:flex items-center gap-3'>
                        <div className='flex gap-2 mb-5 md:mb-0'>
                            <Link to='/'>Home</Link>
                            <Link to='/donation'>Donation</Link>
                            <Link to='/events'>Events</Link>
                            <Link to='/blogs'>Blogs</Link>
                        </div>
                        <div className='flex gap-2'>
                            <Link to='/register'><button className='px-3 py-1 hover:bg-[#186fe2] bg-[#3F90FC] text-white rounded'>Register</button></Link>
                            <Link to='/login'><button className='px-3 py-1 hover:bg-gray-600 bg-gray-700 text-white rounded'>Admin</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;