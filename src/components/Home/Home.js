import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Header />}></Route>
            </Routes>
        </div>
    );
};

export default Home;