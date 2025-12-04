import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ChallengeCard from './ChallengeCard';
import MyContainer from '../../components/Navbar/MyContainer';

const Challenges = () => {
    const data = useLoaderData();
    const [challenges, setChallenges] = useState(data)
    const [loading, setLoading] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault();
        const searchCategory = e.target.category.value;
        setLoading(true)
        fetch(`http://localhost:3000/search?search=${searchCategory}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChallenges(data)
                setLoading(false)
            })
    }

    if (loading) {
        return <div>spinner...</div>
    }

    return (
        <div>
            <div className="relative w-full h-[550px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/2223500867/video/plastic-is-not-fantastic-a-group-of-volunteers-in-matching-outfits-cleans-the-park-of-garbage.mp4?s=mp4-640x640-is&k=20&c=pSx2iiPZVQKX22QdM53IRcv3Rdyw3ObhsNvF4KSe9lI="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white flex items-center justify-center md:text-7xl text-5xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/20 animate__animated animate__fadeInLeft  font-extrabold">All Challenges</h1>
                </div>
            </div>

            <MyContainer>
                <div className=' mt-24 text-center'>
                    <div className='p-2'>
                        <h1 className='text-4xl font-bold'>All Tips By Our Participant</h1>
                        <p>
                            Track your progress regularly to stay motivated and aware of your achievements. Small efforts each day can grow into meaningful improvements for both your lifestyle and the environment.
                        </p>
                    </div>
                    {/* Category */}
                    <form onSubmit={handleSearch} className="flex items-center gap-4 justify-center">
                        <select
                            name="category"
                            className="select select-bordered rounded-full "
                            required
                        >
                            <option value="" >Select Category</option>
                            <option>Waste Reduction</option>
                            <option>Energy Conservation</option>
                            <option>Water Conservation</option>
                            <option>Sustainable Transport</option>
                            <option>Green Living</option>
                        </select>
                        <button
                            className='btn btn-primary rounded-full'
                            type='submit'
                        >{loading ? "Searching..." : "Search"}</button>
                    </form>

                </div>



                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4 md:p-0 my-10'>
                    {
                        challenges.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge} />)
                    }
                </div>
            </MyContainer>
        </div>
    );
};

export default Challenges;