import React from 'react';
import Header from '../Header/Header';
import SearchSection from '../pages/SearchSection/SearchSection';
import Services from './Services/Services';

const Home = ({handleSelectService}) => {
    return (
        <div>
            <Header/>
            <SearchSection />
            <Services handleSelectService={handleSelectService}/>
        </div>
    );
};

export default Home;