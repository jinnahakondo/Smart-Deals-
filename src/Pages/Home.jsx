import React from 'react';
import HeroBanner from '../Components/Header/HeroBanner';
import Latest_Products from '../Components/Latest Products/latest_Products';

const Home = () => {
    return (
        <div className=''>
            <HeroBanner />

            <Latest_Products />
        </div>
    );
};

export default Home;