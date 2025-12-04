import React from 'react';
import Hero from '../Hero/Hero';
import LiveChallenge from '../Challenges/LiveChallenge';
import ActiveChallenge from '../Challenges/ActiveChallenge';

import ResentTips from '../TipsAndEvent/ResentTips';
import UpComingEvent from '../TipsAndEvent/UpComingEvent';
import WhyGoGreen from '../WhyGreen/WhyGoGreen';

const latestChallengePromise = fetch('http://localhost:3000/active-challenges').then(res => res.json())


const resentTipsData = fetch("http://localhost:3000/resent-tips").then(res => res.json())


const upComingEventPromise = fetch("http://localhost:3000/upcoming-events")
.then(res => res.json())

const Home = () => {

    return (
        <div>
            <Hero />

            <LiveChallenge />
            {/* active challenge */}
            <ActiveChallenge latestChallengePromise={latestChallengePromise}>
            </ActiveChallenge>

             {/* Upcoming Events */}

            <UpComingEvent upComingEventPromise={upComingEventPromise}></UpComingEvent>

            {/* Recent Tips*/}
            <ResentTips resentTipsData={resentTipsData}></ResentTips>      

            {/* Why Go Green? */}
            <WhyGoGreen/>

            {/* How It Works  */}
            <h3 className='text-4xl my-16'>How It Works </h3>

        </div>
    );
};

export default Home;
