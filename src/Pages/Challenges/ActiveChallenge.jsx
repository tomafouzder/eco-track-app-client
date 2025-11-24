import React, { use } from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import ChallengeCard from './ChallengeCard';

const ActiveChallenge = ({ latestChallengePromise }) => {
    const challenges = use(latestChallengePromise)
    console.log(challenges);
    return (
        <div>
            <MyContainer>
                <h1 className='text-center mt-10 font-bold text-4xl'>Active Challenge</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 p-4 md:p-0 my-10'>
                    {
                        challenges.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge} />)
                    }
                </div>
            </MyContainer>
        </div>
    );
};

export default ActiveChallenge;