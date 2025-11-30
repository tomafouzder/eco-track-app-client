import React from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import bgImg from '../../assets/svg-2.png'
import iconImg1 from '../../assets/icons8-challenge-100.png'
import iconImg2 from '../../assets/icons8-participation-100.png'
import iconImg3 from '../../assets/icons8-co2-reduction-100.png'

const LiveChallenge = () => {
    return (
        <div className='relative' style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="backdrop-blur-sm bg-white/10 min-h-full w-full">
                <MyContainer >

                    <h2 className='text-5xl uppercase mt-36 text-gray-800 font-bold text-center'>Live Counting</h2>
                    <p className='mt-10 md:mt-4 text-2xl text-gray-700 font-semibold text-center'>We are ECO Tracker, Our Mission is save water, animals and Environment our activities are taken around the world.</p>

                    <div className='grid  grid-cols-1 px-4 md:px-0 text-gray-700 pt-24 md:grid-cols-2 lg:grid-cols-3 gap-1'>
                        <div className=" bg-white hover:text-white hover:bg-slate-800 ">
                            <div className="card-body   items-center text-center">
                                <img src={iconImg1} alt="" />
                                <h2 className="card-title font-bold text-2xl">Active Challenge</h2>
                                <p className=" font-bold text-3xl">0</p>
                            </div>
                        </div>

                        <div className=" bg-white hover:text-white hover:bg-slate-800">
                            <div className="card-body items-center text-center">
                                <img src={iconImg2} alt="" />
                                <h2 className="card-title font-bold text-2xl">Total Participant</h2>
                                <p className=" font-bold text-3xl">0</p>
                            </div>
                        </div>

                        <div className=" bg-white  hover:text-white hover:bg-slate-800">
                            <div className="card-body items-center text-center">
                                <img src={iconImg3} alt="" />
                                <h2 className="card-title  font-bold text-2xl">CO2 Saved</h2>
                                <p className=" font-bold text-3xl">0</p>
                            </div>
                        </div>

                    </div>
                </MyContainer>

                <MyContainer>
                    <div className='pt-0 md:pt-32  bg-white gap-10  grid grid-cols-1 md:grid-cols-2'>
                        <div className=" rounded-tl-2xl p-4 overflow-hidden">
                            <video
                                src="https://media.istockphoto.com/id/1587462714/video/ecology-icon-concept-esg-environment-society-and-governance-saving-the-planet-in-the-hands-of.mp4?s=mp4-640x640-is&k=20&c=vYmfXBE4K_C-OSEsbkDs2xwLcSEQ9E_Skm3ZKjngSGA="
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-cover"
                            />

                        </div>
                        <div className='px-2 md:px-0 '>
                            <p className='text-3xl font-semibold text-green-700 py-4'>About Eco Track</p>
                            <h1 className='text-4xl py-6  font-extrabold text-gray-800 '>Join a Community Making Real Environmental Change</h1>

                            <p className='font-semibold opacity-80 pb-7 border-b-2 '>EcoTrack is a sustainability platform designed to inspire and guide eco-friendly living. It helps users join challenges, track progress, share tips, and make meaningful environmental impact. Through community participation and actionable goals, EcoTrack empowers individuals to reduce waste, save resources, and contribute to a cleaner, healthier planet for future generations.</p>
                        </div>
                    </div>

                </MyContainer>
            </div>

        </div>
    );
};

export default LiveChallenge;