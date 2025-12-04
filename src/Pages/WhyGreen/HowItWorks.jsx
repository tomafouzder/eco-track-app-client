import React from 'react';
import MyContainer from '../../components/Navbar/MyContainer';

const HowItWorks = () => {
    return (
        <div>
            <MyContainer>
                <h3 className='md:text-5xl text-3xl px-2 my-12 md:mt-32 md:mb-16  uppercase text-green-600 font-extrabold text-center'>How It Works </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pb-24 px-6 md:px-0'>
                    {/* ------------- */}
                    <div className='flex-col  text-center'>
                        <div className='flex justify-center items-center'>
                            <h2 className='text-5xl h-24 w-24 font-bold flex justify-center items-center  bg-green-600 text-white rounded-full'>1</h2>
                        </div>

                        <h3 className='text-2xl font-bold my-2'>Find a Challenge</h3>
                        <p className='opacity-75'>browse and select a sustainability challenge that resonates with you</p>
                    </div>

                    {/* ------------- */}
                    <div className='flex-col  text-center'>
                        <div className='flex justify-center items-center'>
                            <h2 className='text-5xl h-24 w-24 font-bold flex justify-center items-center  bg-green-600 text-white rounded-full'>2</h2>
                        </div>

                        <h3 className='text-2xl font-bold my-2'>Join & Track</h3>
                        <p className='opacity-75'> sign up for the challenge and track your progress throughout</p>
                    </div>

                    {/* ------------- */}
                    <div className='flex-col  text-center'>
                        <div className='flex justify-center items-center'>
                            <h2 className='text-5xl h-24 w-24 font-bold flex justify-center items-center  bg-green-600 text-white rounded-full'>3</h2>
                        </div>

                        <h3 className='text-2xl font-bold my-2'>Share and Achievements</h3>
                        <p className='opacity-75'>Update your status and celebrate the collective community impact</p>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default HowItWorks;