import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


const JoinChallenge = ({ challengeId, joinModalRef }) => {
    const { user } = useContext(AuthContext)
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = e.target.userId.value;
        const status = e.target.status.value;
        const progress = e.target.progress.value;
        const joinDate = e.target.joinDate.value;

        console.log(userId, challengeId, status, progress, joinDate,)

        const joinData = {
            userId: userId,
            challengeId: challengeId,
            status: status,
            progress: progress,
            joinDate: joinDate,
            createdAt: new Date()
        }

        axios.post('http://localhost:3000/join-challenge', joinData)
            .then(res => {
                if (res.data.insertedId) {
                    joinModalRef.current.close();
                    Swal.fire({
                        
                        icon: "success",
                        title: "Joining Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-6">
                Join Challenge
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

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

                {/* joinDate */}
                <div>
                    <label className="block font-medium mb-1">Join Date</label>
                    <input
                        name='joinDate'
                        type="date"
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


