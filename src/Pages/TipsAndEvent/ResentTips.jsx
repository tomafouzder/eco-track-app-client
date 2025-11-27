// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { AiOutlineClose } from "react-icons/ai";
// const ResentTips = () => {

//     const [activeIndex, setActiveIndex] = useState(0)
//     return (
//         <div className="pt-4 ">
//             <Swiper
//                 spaceBetween={5}
//                 centeredSlides={false}
//                 autoplay={{
//                     delay: 6000,
//                     disableOnInteraction: false,
//                 }}
//                 pagination={{ clickable: true }}
//                 navigation={true}
//                 modules={[Autoplay, Pagination, Navigation]}
//                 onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//                 className='mySwiper rounded-2xl lg:rounded-none shadow-2xl'

//             >

//                 {slides.map((slide, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="relative w-full h-[550px] overflow-hidden rounded-2xl lg:rounded-none">
//                             {/* Image full cover */}
//                             <img
//                                 src={slide.image}
//                                 alt={slide.title}
//                                 className="w-full h-full object-cover"
//                             />

//                             {/* Text Overlay with Animation */}
//                             <div className={`absolute right-1/2 md:right-3/5  inset-0 bg-black/40  flex flex-col justify-center rounded-r-full items-center  text-white text-center p-5

//                                 ${activeIndex === index ? 'animate__animated animate__fadeInLeft  animate__delay-2s' : ''}
//                                 `}>

//                                 <h2 className="text-2xl md:text-4xl font-bold mb-2">
//                                     {slide.title}
//                                 </h2>
//                                 <p className="text-lg md:text-xl font-semibold" >
//                                     {slide.subtitle}
//                                 </p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}

//             </Swiper>
//         </div>
//     );
// };

// export default ResentTips;





import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiOutlineClose } from "react-icons/ai";
import { useLoaderData } from 'react-router';

const ResentTips = () => {
    const tips = useLoaderData()
    const [selectedTip, setSelectedTip] = useState(null);

    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Recent Tips</h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
            >
                {tips?.map((tip) => (
                    <SwiperSlide key={tip._id} className="flex justify-center">
                        {/* Card */}
                        <div className="text-white bg-gray-800 p-6 rounded-2xl flex flex-col items-center shadow-xl max-w-sm">
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

                            <button
                                className="mt-4 text-yellow-400 text-sm font-semibold hover:underline"
                                onClick={() => setSelectedTip(tip)}
                            >
                                See More
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Modal */}
            {selectedTip && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="modal-box relative max-w-lg bg-white p-6 rounded-xl shadow-lg">
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                            onClick={() => setSelectedTip(null)}
                        >
                            <AiOutlineClose size={24} />
                        </button>

                        <h3 className="font-bold text-lg mb-2">{selectedTip.authorName}</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            {selectedTip.title} | Votes: {selectedTip.upVotes}
                        </p>
                        <p className="text-gray-700">{selectedTip.content}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResentTips;
