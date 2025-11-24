import React from 'react';
import MyContainer from '../../components/Navbar/MyContainer';

const LiveChallenge = () => {
    return (
        <div>
            <MyContainer>
                <h2 className='text-7xl text-center'>Live Statistics</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Active Challenge</h2>
                            <p>0</p>
                        </div>
                    </div>

                    <div className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Total Participant</h2>
                            <p>0</p>
                        </div>
                    </div>

                    <div className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">CO2 Saved</h2>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default LiveChallenge;