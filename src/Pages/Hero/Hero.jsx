import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router';


const Hero = () => {
    const [challenges, setChallenges] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3000/challenges')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChallenges(data);
            })
    }, [])

    return (
        <div className=" ">
            <Swiper
                spaceBetween={5}
                centeredSlides={false}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className='mySwiper rounded-2xl lg:rounded-none shadow-2xl'

            >

                {challenges.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full object-cover h-[500px]  overflow-hidden rounded-2xl lg:rounded-none">
                            {/* Image full cover */}
                            <img
                                src={slide.imageUrl}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Text Overlay with Animation */}
                            <div className='absolute inset-0 bg-black/10 flex items-center justify-center'>
                                <div className={`absolute top-1/2 left-1/4 transform -translate-y-1/2   inset-0 bg-black/40  flex flex-col justify-center items-center  text-white text-center p-5
                                
                                ${activeIndex === index ? 'animate__animated animate__fadeInLeft  animate__delay-2s' : ''}
                                `}>

                                    <h2 className="text-2xl md:text-4xl uppercase font-bold ">
                                        {slide.title}
                                    </h2>
                                    <p className="text-lg my-2 md:text-xl uppercase font-semibold" >
                                        category : {slide.category}
                                    </p>
                                    <p className="text-lg my-2 md:text-2xl font-semibold">
                                     Target Duration : {slide.duration}
                                    </p>
                                    <Link
                                        to={`/challengeDetails/${slide._id}`}
                                        className="btn btn-primary mt-4 px-6 py-2"
                                    >
                                        View Challenge
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Hero;


