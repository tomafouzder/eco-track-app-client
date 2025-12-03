import React, { use } from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import ChallengeCard from './ChallengeCard';

const ActiveChallenge = ({ latestChallengePromise }) => {
    const challenges = use(latestChallengePromise)
    console.log(challenges);
    return (
        <div className=" py-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://media.istockphoto.com/id/1159995256/vector/green-spring-nature-background-with-leaves.jpg?s=1024x1024&w=is&k=20&c=YUSiuPRdSwXIsPYDFUxXfKs9hUyx2zfd_2V0WJY0xXk=')",
            }}
        >


            <MyContainer>
                <h1 className='text-center text-4xl uppercase mt-16 text-gray-900 font-bold '>Active Challenge</h1>
                <p className='my-8  md:mb-24  text-lg text-gray-800 font-semibold text-center'>
                    A recent challenge highlights exciting eco-friendly activities designed to inspire positive environmental action. Each challenge encourages participants to adopt sustainable habits, reduce waste, save energy, or engage in community clean-ups. These challenges are created by users and updated regularly so everyone can explore fresh opportunities to make an impact. They showcase goals, timelines, participation counts, and progress updates. By joining, users can track their actions, stay motivated, and contribute to a greener community. The recent challenge section helps people discover trending activities, learn new eco-tips, and stay connected with others who share the same passion for protecting the planet.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4 md:p-0  my-10'>
                    {
                        challenges.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge} />)
                    }
                </div>
            </MyContainer>
        </div>
    );
};

export default ActiveChallenge;