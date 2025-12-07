import React, { useEffect, useState } from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import iconImg1 from '../../assets/icons8-challenge-100.png'
import iconImg2 from '../../assets/icons8-participation-100.png'
import axios from 'axios';

const LiveChallenge = () => {

    const [status, setStatus] = useState({
        activeChallenges: 0,
        totalParticipants: 0,
        co2Saved: 0
    });

    useEffect(() => {
        axios.get("https://eco-track-app-server.vercel.app/live-status")
            .then(res => {
                setStatus(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <div>
            <MyContainer>
                <h2 className='md:text-5xl text-3xl px-2 mt-36 text-green-600 font-extrabold text-center'>
                    Live Counting
                </h2>

                <p className='mt-10 text-xl text-gray-700 font-semibold text-center'>
                    We are ECO Tracker, Our Mission is save water, animals and Environment.
                </p>

                <figure className='flex justify-center'>
                    <img
                        src="https://media.istockphoto.com/id/478466748/vector/sustainable-city.jpg?s=1024x1024&w=is&k=20&c=fxkN6Q9rcp32h5gWvMc5gL_AsatyBVUPkTsj8EfNmnk="
                        alt=""
                    />
                </figure>

                <div className='grid grid-cols-1 px-4 md:grid-cols-2  gap-4 pt-24'>

                    {/* Active Challenges */}
                    <div className="text-white bg-slate-800">
                        <div className="card-body border items-center text-center">
                            <img src={iconImg1} alt="" />
                            <h2 className="card-title font-bold text-2xl">Active Challenge</h2>
                            <p className="font-bold text-3xl">{status.activeChallenges}</p>
                        </div>
                    </div>

                    {/* Total Participants */}
                    <div className="text-white bg-slate-800">
                        <div className="card-body border items-center text-center">
                            <img src={iconImg2} alt="" />
                            <h2 className="card-title font-bold text-2xl">Total Participant</h2>
                            <p className="font-bold text-3xl">{status.totalParticipants}</p>
                        </div>
                    </div>

                </div>
            </MyContainer>

            <MyContainer>

                <div className='pt-0 md:pt-32  bg-white gap-10  grid grid-cols-1 md:grid-cols-2'>
                    <div className=" rounded-tl-2xl p-4 overflow-hidden">
                        <video
                            src="https://media.istockphoto.com/id/2192082263/video/volunteer-advocating-for-environmental-protection-with-a-save-the-world-sign-outdoors.mp4?s=mp4-640x640-is&k=20&c=VdvkFUFB2CI4HYRSOgXNCcYgbXbeoQ2ZXNiQeyXtT6Y="
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                        />

                    </div>
                    <div className='px-4 md:-px-2 md:px-0 '>
                        <p className='text-3xl font-semibold text-green-700 py-4'>About Eco Track</p>
                        <h1 className='text-4xl py-6  font-extrabold text-gray-800 '>Join a Community Making Real Environmental Change</h1>

                        <p className='font-semibold opacity-80 pb-7 border-b-2 '>EcoTrack is a sustainability platform designed to inspire and guide eco-friendly living. It helps users join challenges, track progress, share tips, and make meaningful environmental impact. Through community participation and actionable goals, EcoTrack empowers individuals to reduce waste, save resources, and contribute to a cleaner, healthier planet for future generations.</p>
                    </div>
                </div>

            </MyContainer>


        </div>
    );
};

export default LiveChallenge;