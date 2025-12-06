import React, { useEffect, useState } from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import { AiOutlineClose } from "react-icons/ai";
import Loading from '../../components/Loading/Loading';
import imgIcon from "../../assets/icons8-profile.gif"


const Tips = () => {
    const [isOpen, setIsOpen] = useState(null);
     const [tips , setTips] = useState([]);
     const [loading, setLoading] = useState(true);
     
            useEffect(() => {
        
             fetch('http://localhost:3000/tips')
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setTips(data)
                         setLoading(false);
        
                    })
        
            }, [])

if (loading) return <Loading />

    return (
        <div className='bg-gray-700 pb-24'>
            <div className="relative w-full h-[550px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/1306471871/video/wind-turbines-in-the-ocean.mp4?s=mp4-640x640-is&k=20&c=E4t_e8WhjNhsAGr8o62C-Mafp4xZHz4KBi3vsV2Fi4M="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white flex items-center justify-center md:text-7xl text-5xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/20 animate__animated animate__fadeInLeft  font-extrabold">All Tips By Our Participant</h1>
                </div>
            </div>

            <MyContainer>
                <div className='text-center pb-16 mt-24'>
                    <div className='p-6 md:p-0'>
                        <h1 className='md:text-5xl text-3xl uppercase text-white font-extrabold text-center'>All Tips </h1>
                        <p className='text-gray-200 my-6'>
                           “Share Your Tips” encourages participants to exchange simple, practical ideas that make everyday life easier, healthier, and more sustainable. From study hacks to eco-friendly habits, this feature helps everyone learn from real experiences. By sharing knowledge, the community grows stronger, more creative, and better equipped to solve common challenges together
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
                    {
                        tips?.map(tip => <div key={tip._id} className='mx-auto px-2 md:px-0'>
                            {/* Card */}
                            <div className="text-white bg-gray-800 p-6 rounded-2xl flex flex-col items-center shadow-xl">
                                <div className="relative w-32 h-32 mb-4">
                                    <img
                                        src={tip.image || imgIcon}
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                    <span className="absolute bottom-1 left-1 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                                        {tip.category}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold">{tip.authorName}</h3>
                                <p className="text-sm text-gray-300">{tip.title}</p>
                                <p className="text-sm text-gray-400 line-clamp-1 mt-2">{tip.content}</p>

                                <button
                                    className="mt-4 text-blue-400 text-sm font-semibold hover:underline"
                                    onClick={() => setIsOpen(tip)}
                                >
                                    See More
                                </button>
                            </div>

                            {/* Modal */}
                            {isOpen && (
                                <div className="modal  modal-open">
                                    <div className="modal-box bg-gray-700 text-white relative">
                                        {/* Close Icon */}
                                        <button
                                            className="absolute top-3 right-3 text-gray-400 "
                                            onClick={() => setIsOpen(null)}
                                        >
                                            <AiOutlineClose size={24} />
                                        </button>

                                        <h3 className="font-bold text-white text-xl mb-2">Author Name : {isOpen.authorName}</h3>
                                        <p className="text-lg text-gray-100 mb-4">{isOpen.title} | Votes :   {isOpen.upVotes}</p>

                                        <p className="text-gray-100 text-lg ">
                                            {isOpen.content}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>)
                    }
                </div>

            </MyContainer>
        </div>
    );
};

export default Tips;





