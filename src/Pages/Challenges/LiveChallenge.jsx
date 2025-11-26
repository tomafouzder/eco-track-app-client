import React from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import bgImg from '../../assets/svg-2.png'
import iconImg1 from '../../assets/icons8-challenge-100.png'
import iconImg2 from '../../assets/icons8-participation-100.png'
import iconImg3 from '../../assets/icons8-co2-reduction-100.png'

const LiveChallenge = () => {
    return (
        <div className='' style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
           
            <MyContainer >
                 <p className='my-32 text-3xl text-gray-500 font-semibold text-center'>We are ECO Tracker, Our Mission is save water, animals and Environment our activities are taken around the world.</p>
                <h2 className='text-5xl uppercase text-gray-500 font-bold text-center'>Live Counting</h2>
                <div className='grid  grid-cols-1 pb-4 text-white pt-24 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className="border">
                        <div className="card-body   items-center text-center">
                            <img src={iconImg1} alt="" />
                            <h2 className="card-title font-bold text-xl">Active Challenge</h2>
                            <p className=" font-bold text-2xl">0</p>
                        </div>
                    </div>

                    <div className="border">
                        <div className="card-body items-center text-center">
                            <img src={iconImg2} alt="" />
                            <h2 className="card-title font-bold text-xl">Total Participant</h2>
                            <p className=" font-bold text-2xl">0</p>
                        </div>
                    </div>

                    <div className="border">
                        <div className="card-body items-center text-center">
                            <img src={iconImg3} alt="" />
                            <h2 className="card-title font-bold text-xl">CO2 Saved</h2>
                            <p className=" font-bold text-2xl">0</p>
                        </div>
                    </div>

                </div>
            </MyContainer>
        </div>
    );
};

export default LiveChallenge;