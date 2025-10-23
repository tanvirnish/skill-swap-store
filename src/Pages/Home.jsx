
import React from 'react';
import HeroBanner from '../Home/HeroBanner';
import PopularSkill from '../Home/PopularSkill';
import TopRatedProviders from '../Componets/TopRatedProviders';
import HowItWorks from '../Componets/HowItWorks';
import UserReviews from '../Home/UserReview';

const Home = () => {
    return (
        <>
        <HeroBanner />
        <PopularSkill />
        <TopRatedProviders/>
        <HowItWorks />
        <UserReviews/>

        </>
    );
};

export default Home;