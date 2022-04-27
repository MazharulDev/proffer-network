import React from 'react';
import Header from '../Header/Header';
import SearchSection from '../pages/SearchSection/SearchSection';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <SearchSection />
            <Services />
        </div>
    );
};

export default Home;