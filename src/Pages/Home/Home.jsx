import React from 'react';
import Hero from '../Hero/Hero';
import LiveChallenge from '../Challenges/LiveChallenge';
import ActiveChallenge from '../Challenges/ActiveChallenge';

const latestChallengePromise = fetch('http://localhost:3000/active-challenges').then(res => res.json())

const Home = () => {

    return (
        <div>
            <Hero />
            <LiveChallenge />

            <ActiveChallenge latestChallengePromise={latestChallengePromise}>    
            </ActiveChallenge>

        </div>
    );
};

export default Home;
