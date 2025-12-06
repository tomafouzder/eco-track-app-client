import React, { useEffect, useState } from 'react';
import ChallengeCard from './ChallengeCard';
import MyContainer from '../../components/Navbar/MyContainer';
import Loading from '../../components/Loading/Loading';

const Challenges = () => {

    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);

    useEffect(() => {

        fetch('http://localhost:3000/challenges')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setChallenges(data)
                setLoading(false);
            })
            .catch(() => setLoading(false));

    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const searchCategory = e.target.category.value;
        setSearching(true);

        fetch(`http://localhost:3000/search?search=${searchCategory}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChallenges(data)
                setSearching(false);
            })
            .catch(() => setSearching(false));
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className='bg-gray-100 pb-24'>
            <div className="relative w-full h-[450px] overflow-hidden">
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

            <MyContainer >
                <div className=' mt-24 text-center'>
                    <div className='p-6 md:p-0'>
                        <h1 className='md:text-5xl text-3xl uppercase text-green-600 font-extrabold text-center'>All Challenges</h1>
                        <p className='opacity-75 my-6'>
                            Track your progress regularly to stay motivated and aware of your achievements. Small efforts each day can grow into meaningful improvements for both your lifestyle and the environment.
                        </p>
                    </div>
                    {/* Category */}
                    <form onSubmit={handleSearch} className="flex items-center gap-4 justify-center px-6 md:px-0">
                        <select
                            name="category"
                            className="select select-bordered rounded-full bg-green-50 "
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
                        >{searching ? "Searching..." : "Search"}</button>
                    </form>

                </div>



                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-6 md:p-0 mt-10'>
                    {
                        challenges.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge} />)
                    }
                </div>
            </MyContainer>
        </div>
    );
};

export default Challenges;