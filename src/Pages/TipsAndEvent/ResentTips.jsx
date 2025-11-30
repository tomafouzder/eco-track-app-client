import React, { use } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bgImg from "../../assets/coolbackgrounds-fractalize-tropical_salad.png"
import MyContainer from '../../components/Navbar/MyContainer';
import { Link } from 'react-router';


const ResentTips = ({ resentTipsData }) => {
    const tips = use(resentTipsData)


    return (
        <div
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <MyContainer className="my-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Recent Tips</h2>

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
                            <div className="text-white p-6 flex flex-col items-center bg-gray-500 shadow-xl max-w-sm ">
                                <div className="relative w-32 h-32 mb-4">
                                    <img
                                        src={tip.image}
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                    <span className="absolute bottom-1 left-1 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                                        {tip.category}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold">{tip.authorName}</h3>
                                <p className="text-sm text-gray-300">{tip.title}</p>
                                <p className="text-sm text-gray-400 line-clamp-2 mt-2">{tip.content}</p>

                                <Link
                                    to="/tips"
                                    className="mt-4 text-yellow-400 text-sm font-semibold hover:underline"
                                >
                                    See More
                                </Link>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </MyContainer>
        </div>
    );
};

export default ResentTips;
