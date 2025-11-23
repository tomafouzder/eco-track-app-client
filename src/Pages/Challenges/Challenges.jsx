import React from 'react';
import { useLoaderData } from 'react-router';
import ChallengeCard from './ChallengeCard';
import MyContainer from '../../components/Navbar/MyContainer';

const Challenges = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <div className="relative w-full h-[500px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/1268227434/video/young-female-gardener-making-a-hole-and-planting-a-vegetable-plant-in-the-garden.mp4?s=mp4-640x640-is&k=20&c=ha9onOGVSlZxmxG3ooIePgRM573aRq9nw9Mk_eUVbhI="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white flex items-center justify-center md:text-5xl text-4xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/40 animate__animated animate__fadeInLeft  animate__delay-2s font-bold">All Challenge</h1>
                </div>
            </div>

            <MyContainer>
                <h1 className='text-center mt-10 font-bold text-4xl'>All Challenge</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 p-4 md:p-0 my-10'>
                    {
                        data.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge} />)
                    }
                </div>
            </MyContainer>
        </div>
    );
};

export default Challenges;