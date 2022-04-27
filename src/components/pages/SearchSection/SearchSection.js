import React from 'react';

const SearchSection = () => {
    return (
        <div className='mt-5 w-2/4 mx-auto text-center'>
            <h2 className='text-3xl uppercase font-bold'>I grow by helping people in need.</h2>
            <input className='py-1 px-2 border rounded-l-md mt-5' type="text" name="" placeholder='Search...' />
            <button className='px-4 py-1 bg-[#3F90FC] rounded-r-md text-white'>Search</button>
        </div>
    );
};

export default SearchSection;