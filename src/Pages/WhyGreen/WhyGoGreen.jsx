import React from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import iconImg1 from "../../assets/recycle-sign_4185344.png"
import iconImg2 from "../../assets/wellness_17221821.png"
import iconImg3 from "../../assets/save-water_525930.png"
import iconImg5 from "../../assets/renewable-energy_18021921.png"

const WhyGoGreen = () => {
    return (
        <div>
            <MyContainer>
                  <h3 className='md:text-5xl text-3xl px-2 my-12 md:my-24  uppercase text-green-600 font-extrabold text-center '>Why Go Green?</h3>
                <div className='grid grid-cols-1 px-6 md:px-0 md:grid-cols-2 gap-24 '>

                    {/* point-1 */}
                    <div className='flex items-center gap-6'>
                        <div>
                            <figure className='w-32'>
                                <img src={iconImg1} alt="" />
                            </figure>
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold pb-8 uppercase'>Reduce Waste</h2>
                            <p className='text-lg opacity-80 border-b-1 pb-2'>Reduce waste by choosing reusable items, recycling properly, and avoiding excess consumption. Small daily actions help protect resources and keep the environment clean.</p>
                        </div>
                    </div>

                    {/* point-2 */}
                    <div className='flex items-center gap-6'>
                        <div>
                            <figure className='w-32'>
                                <img src={iconImg2} alt="" />
                            </figure>
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold pb-8 uppercase'>Improve Health</h2>
                            <p className='text-lg opacity-80 border-b-1 pb-2'>Improve health by promoting clean air, nutritious food, active living, and safe environments that support stronger communities and overall well-being.  </p>
                        </div>
                    </div>

                    {/* point-3 */}
                    <div className='flex items-center gap-6'>
                        <div>
                            <figure className='w-32'>
                                <img src={iconImg3} alt="" />
                            </figure>
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold pb-8 uppercase'>Clean water</h2>
                            <p className='text-lg opacity-80 border-b-1 pb-2'>Clean water ensures safe drinking, supports healthy ecosystems, and improves community well-being by reducing pollution and protecting natural water sources.</p>
                        </div>
                    </div>

                    {/* point-4 */}
                    <div className='flex items-center gap-6'>
                        <div>
                            <figure className='w-32'>
                                <img src={iconImg5} alt="" />
                            </figure>
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold pb-8 uppercase'>Alternative Energy</h2>
                            <p className='text-lg opacity-80 pb-2 border-b-1'>Alternative energy uses renewable sources like wind and solar to cut pollution, conserve resources, and create a cleaner, sustainable future.</p>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default WhyGoGreen;