import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { FaClock, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router';
import ChallengeCard from '../Challenges/ChallengeCard';


const MyChallenges = () => {
    const { user } = useContext(AuthContext)
    const [challenges, setChallenges] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3000/my-challenges?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChallenges(data)
                setLoading(false)
            })
    }, [user])


    if (loading) {
        return <div>Please wait ! Your challenge is loading...</div>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4 md:p-0 my-10'>
            {
                challenges.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge} />)
            }
        </div>
    );
};

export default MyChallenges;