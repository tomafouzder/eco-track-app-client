import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';




const JoinChallenge = ({ challengeId, joinModalRef, joining, setJoining, setRefetch }) => {
    const { user } = useContext(AuthContext)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = e.target.userName.value
        const userId = e.target.userId.value;
        const status = e.target.status.value;
        const progress = parseInt(e.target.progress.value) || 0;

        console.log(userId, challengeId, status, progress,)

        const joinData = {
            userName: userName,
            userId: userId,
            challengeId: challengeId,
            userImage: user?.photoURL,
            status: status,
            progress: progress,
            createdAt: new Date()
        }

        axios.post('http://localhost:3000/join-challenge', joinData, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => {
                const data = res.data;
                console.log(data)
                if (data.insertedId) {
                    joinModalRef.current.close();
                    Swal.fire({

                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // join new user to the state
                    joinData._id = data.insertedId;
                    const newJoins = [...joining, joinData]
                    newJoins.sort((a, b) => b.progress - a.progress)
                    console.log(newJoins)
                    setJoining(newJoins);
                    setRefetch(prev => ({
                        ...prev,
                        participants: prev.participants + 1
                    }));

                } else {
                    console.log("it error")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center ">
                Join Challenge
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* userName */}
                <div>
                    <label className="block font-medium mb-1">User Name</label>
                    <input
                        type="text"
                        name='userName'
                        placeholder="Enter your user name"
                        className="input input-bordered w-full"
                    />
                </div>
                {/* userId */}
                <div>
                    <label className="block font-medium mb-1">User ID</label>
                    <input
                        type="text"
                        defaultValue={user?.email}
                        name='userId'
                        readOnly
                        placeholder="Enter your user ID"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* status */}
                <div>
                    <label className="block font-medium mb-1">Status</label>
                    <select
                        name='status'
                        className="select select-bordered w-full">
                        <option>Not Started</option>
                        <option>Ongoing</option>
                        <option>Finished</option>
                    </select>
                </div>

                {/* progress */}
                <div>
                    <label className="block font-medium mb-1">Progress (%)</label>
                    <input
                        name='progress'
                        type="number"
                        placeholder="0"
                        className="input input-bordered w-full"
                    />
                </div>


                {/* Submit button */}
                <button
                    type="submit"
                    className="btn btn-success w-full text-white"
                >
                    Join Challenge
                </button>
            </form>
        </div>
    );
};

export default JoinChallenge;



