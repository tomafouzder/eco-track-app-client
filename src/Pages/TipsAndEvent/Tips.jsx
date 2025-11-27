import React, { useState } from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import { AiOutlineClose } from "react-icons/ai";
import { useLoaderData } from 'react-router';

const Tips = () => {
    const tips = useLoaderData()
    console.log(tips);

    const [isOpen, setIsOpen] = useState(null);


    return (
        <div>
            <div className="relative w-full h-[500px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/1268227434/video/young-female-gardener-making-a-hole-and-planting-a-vegetable-plant-in-the-garden.mp4?s=mp4-640x640-is&k=20&c=ha9onOGVSlZxmxG3ooIePgRM573aRq9nw9Mk_eUVbhI="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white md:text-5xl text-4xl font-bold bg-black/40 p-4 animate__animated animate__fadeInLeft animate__delay-2s">
                        Tips
                    </h1>
                </div>
            </div>
            <MyContainer>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-24'>
                    <div className='p-2'>
                        <h1 className='text-4xl font-bold'>All Tips By Our Participant</h1>
                        <p>
                            Track your progress regularly to stay motivated and aware of your achievements. Small efforts each day can grow into meaningful improvements for both your lifestyle and the environment.
                        </p>
                    </div>
                    {/* Category */}
                    <div className="">
                        <select
                            name="category"
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Category</option>
                            <option>Waste Reduction</option>
                            <option>Energy Conservation</option>
                            <option>Water Conservation</option>
                            <option>Sustainable Transport</option>
                            <option>Green Living</option>
                        </select>

                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2  bg-amber-400 gap-6'>
                    {
                        tips.map(tip => <div key={tip._id} className='mx-auto'>
                            {/* Card */}
                            <div className=" text-white bg-gray-800 p-6 rounded-2xl flex gap-5 items-center justify-center max-w-xl shadow-xl">
                                {/* Left Image */}
                                <div className="relative">
                                    <img
                                        src={tip.image}
                                        alt="Profile"
                                        className="w-52  object-cover rounded-full"
                                    />
                                    <span className="absolute bottom-2 left-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                                        {tip.category}
                                    </span>
                                </div>

                                {/* Right Content */}
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-gray-400">
                                         Votes :   {tip.upVotes}</p>
                                        <h2 className="text-lg font-bold mt-1">{tip.authorName}</h2>
                                        <p className="text-sm text-gray-300">{tip.title}</p>
                                        <p className="text-sm text-gray-300">
                                            Created At : {tip.createdAt}</p>

                                        <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                                            {tip.content}...
                                        </p>

                                        {/* See More Button */}
                                        <button
                                            className="mt-2 text-yellow-400 text-sm font-semibold hover:underline"
                                            onClick={() => setIsOpen(tip)}
                                        >
                                            See More
                                        </button>
                                    </div>

                                    {/* Quote Icon
                                    <div className="flex justify-end mt-3">
                                        <span className="text-4xl text-gray-500 opacity-60">❞</span>
                                    </div> */}
                                </div>
                            </div>

                            {/* Modal */}
                            {isOpen && (
                                <div className="modal  modal-open">
                                    <div className="modal-box relative">
                                        {/* Close Icon */}
                                        <button
                                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                                            onClick={() => setIsOpen(null)}
                                        >
                                            <AiOutlineClose size={24} />
                                        </button>

                                        <h3 className="font-bold text-lg mb-2">{isOpen.authorName}</h3>
                                        <p className="text-sm text-gray-600 mb-4">{isOpen.title} | Votes :   {isOpen.upVotes}</p>

                                        <p className="text-gray-700">
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





