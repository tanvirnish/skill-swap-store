
import React from 'react';
import HeroBanner from '../Home/HeroBanner';
import PopularSkill from '../Home/PopularSkill';
import TopRatedProviders from '../Componets/TopRatedProviders';

const Home = () => {
    return (
        <>
        <HeroBanner />
        <PopularSkill />
        <TopRatedProviders/>
        </>
    );
};

export default Home;