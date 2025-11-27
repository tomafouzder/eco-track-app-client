import React from 'react';
import Hero from '../Hero/Hero';
import LiveChallenge from '../Challenges/LiveChallenge';
import ActiveChallenge from '../Challenges/ActiveChallenge';

import ResentTips from '../TipsAndEvent/ResentTips';

const latestChallengePromise = fetch('http://localhost:3000/active-challenges').then(res => res.json())

const resentTipsData = fetch("http://localhost:3000/resent-tips").then(res=>res.json())

const Home = () => {

    return (
        <div>
            <Hero />

            <LiveChallenge />
            {/* active challenge */}
            <ActiveChallenge latestChallengePromise={latestChallengePromise}>
            </ActiveChallenge>

            {/* Recent Tips*/}
            <ResentTips resentTipsData={resentTipsData}></ResentTips>

            {/* Upcoming Events */}
            <h3 className='text-4xl my-16'>Upcoming Events</h3>

            {/* Why Go Green? */}
            <h3 className='text-4xl my-16'>Why Go Green?</h3>

            {/* How It Works  */}
            <h3 className='text-4xl my-16'>How It Works </h3>

        </div>
    );
};

export default Home;
