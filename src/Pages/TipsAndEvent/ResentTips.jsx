import React, { use } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MyContainer from '../../components/Navbar/MyContainer';
import { Link } from 'react-router';


const ResentTips = ({ resentTipsData }) => {
    const tips = use(resentTipsData)


    return (
        <div className="relative py-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/previews/001/235/500/non_2x/paper-style-happy-families-in-green-park-by-city-vector.jpg')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10 bg-opacity-80"></div>


            <MyContainer className="my-10">
                <h2 className="md:text-5xl text-3xl px-2 mb-12  uppercase text-gray-950 font-extrabold text-center">Recent Tips</h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 5 },
                        1024: { slidesPerView: 3, spaceBetween: 5 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    {tips?.map((tip) => (
                        <SwiperSlide key={tip._id} className="flex  justify-center items-center">
                            <div className=" bg-white p-6 flex flex-col items-center  shadow-xl max-w-sm ">
                                <div className="relative w-42 h-42 mb-4">
                                    <img
                                        src={tip.image}
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                    <span className="absolute bottom-1 left-1 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                                        {tip.category}
                                    </span>
                                </div>
                                <div className='text-center'>
                                    <h3 className="text-2xl font-bold text-gray-800">{tip.title}</h3>
                                    <p className="text-lg text-gray-600">Author Name :{tip.authorName}</p>
                                    <p className="text-sm text-gray-600 line-clamp-2 mt-2">{tip.content}</p>

                                    <Link
                                        to="/tips"
                                        className="mt-4 text-blue-600 text-lg font-bold hover:underline"
                                    >
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </MyContainer>
        </div>
    );
};

export default ResentTips;
