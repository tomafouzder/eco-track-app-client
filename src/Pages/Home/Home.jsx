import React from 'react';
import Hero from '../Hero/Hero';
import LiveChallenge from '../Challenges/LiveChallenge';
import ActiveChallenge from '../Challenges/ActiveChallenge';

import ResentTips from '../TipsAndEvent/ResentTips';
import UpComingEvent from '../TipsAndEvent/UpComingEvent';
import WhyGoGreen from '../WhyGreen/WhyGoGreen';
import HowItWorks from '../WhyGreen/HowItWorks';


const Home = () => {

    return (
        <div>
            <Hero />

            <LiveChallenge />
            {/* active challenge */}
            <ActiveChallenge >
            </ActiveChallenge>

             {/* Upcoming Events */}

            <UpComingEvent></UpComingEvent>

            {/* Recent Tips*/}
            <ResentTips ></ResentTips>      

            {/* Why Go Green? */}
            <WhyGoGreen/>

            {/* How It Works  */}
            <HowItWorks/>

        </div>
    );
};

export default Home;
