import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center px-10'>
            <div>
                <img width={200} src={logo} alt="" />
            </div>
            <div className='flex items-center gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/donation'>Donation</Link>
                <Link to='/events'>Events</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/register'><button className='px-3 py-1 hover:bg-[#186fe2] bg-[#3F90FC] text-white rounded'>Register</button></Link>
                <Link to='/login'><button className='px-3 py-1 hover:bg-gray-600 bg-gray-700 text-white rounded'>Admin</button></Link>
            </div>
        </div>
    );
};

export default Header;