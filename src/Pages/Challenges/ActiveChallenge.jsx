import React, { use } from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import ChallengeCard from './ChallengeCard';
import { Link } from 'react-router';

const ActiveChallenge = ({ latestChallengePromise }) => {
    const challenges = use(latestChallengePromise)
    console.log(challenges);
    return (
        <div className=" py-16 bg-gray-100 ">


            <MyContainer>
                <h1 className='text-center text-5xl uppercase mt-16 text-green-600  font-extrabold '>Active Challenge</h1>
                <p className='py-8  md:pb-24  text-lg text-gray-800 font-semibold text-center border-b-2 border-gray-500 '>
                    A recent challenge highlights exciting eco-friendly activities designed to inspire positive environmental action. Each challenge encourages participants to adopt sustainable habits, reduce waste, save energy, or engage in community clean-ups. These challenges are created by users and updated regularly so everyone can explore fresh opportunities to make an impact. They showcase goals, timelines, participation counts, and progress updates. By joining, users can track their actions, stay motivated, and contribute to a greener community. The recent challenge section helps people discover trending activities, learn new eco-tips, and stay connected with others who share the same passion for protecting the planet.
                </p>
                <div className=' flex justify-between items-center mt-6'>
                    <h1 className='text-4xl   font-extrabold text-gray-800 '>Resent Challenges Updated :</h1>
                    <Link to="/challenges"  >
                        <button className=" button btn btn-wide py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition transform duration-300">
                            See all  Challenges
                        </button>
                    </Link>
                </div>


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