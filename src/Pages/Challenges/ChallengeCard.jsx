import React from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import { FaClock, FaUsers, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router';

const ChallengeCard = ({ challenge }) => {
    const { _id } = challenge
    return (
        <div>
            {/* challenge card */}
            <div className="h-full">
                <div className=" h-full flex flex-col rounded-2xl bg-gradient-to-tr from-green-50 to-green-100 p-6 relative transition-transform duration-500 hover:scale-105">

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                        {challenge.category}
                    </div>

                    {/* Image */}
                    <figure className="rounded-2xl h-48 overflow-hidden shadow-inner">
                        <img src={challenge.imageUrl} alt={challenge.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    </figure>

                    {/* Body */}
                    <div className="mt-4 flex flex-col flex-grow justify-between">
                        <h2 className="text-2xl font-bold text-green-800">{challenge.title}</h2>
                        <p className="text-gray-700 mt-2 text-sm line-clamp-3 min-h-[60px]">
                            {challenge.description
                            }
                        </p>

                        {/* Info row */}
                        <div className="mt-4 flex justify-between text-gray-600 text-sm font-medium">
                            <div className="flex items-center gap-1">
                                <FaClock /> {challenge.duration} days
                            </div>
                            <div className="flex items-center gap-1">
                                <FaUsers /> {challenge.participants} participant
                            </div>
                        </div>

                        {/* Button */}
                        <Link to={`/challengeDetails/${_id}`}>
                            <button className="mt-6 button w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition transform duration-300">
                                Challenge Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChallengeCard;