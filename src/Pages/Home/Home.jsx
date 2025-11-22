import React from 'react';
import Hero from '../Hero/Hero';
import MyContainer from '../../components/Navbar/MyContainer';
import { FaClock, FaUsers, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router';

const Home = () => {
    // Example static challenge data
    const challenge = {
        title: "Plastic-Free July",
        category: "Waste Reduction",
        description: "Avoid single-use plastic for one month and contribute to a cleaner planet.",
        duration: 30,
        participants: 120,
        imageUrl: "https://example.com/image.jpg"
    };

    return (
        <div>
            <Hero />
            <MyContainer>
                {/* SINGLE UNIQUE CARD */}
                <div className="mt-12 flex justify-center">
                    <div className="max-w-sm bg-gradient-to-tr from-green-50 to-green-100 rounded-3xl shadow-2xl hover:shadow-3xl transition p-6 relative">
                        {/* Badge */}
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                            {challenge.category}
                        </div>

                        {/* Image */}
                        <figure className="rounded-2xl overflow-hidden shadow-inner">
                            <img src={challenge.imageUrl} alt={challenge.title} className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105" />
                        </figure>

                        {/* Body */}
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold text-green-800">{challenge.title}</h2>
                            <p className="text-gray-700 mt-2 text-sm">
                                {challenge.description.length > 100
                                    ? challenge.description.slice(0, 100) + "..."
                                    : challenge.description
                                }
                            </p>

                            {/* Info row */}
                            <div className="mt-4 flex justify-between text-gray-600 text-sm font-medium">
                                <div className="flex items-center gap-1">
                                    <FaClock /> {challenge.duration} days
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaUsers /> {challenge.participants} joined
                                </div>
                            </div>

                            {/* Button */}
                            <Link to="/challengeDetails">
                                <button className="mt-6 w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition transform duration-300">
                                    Challenge Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Home;
