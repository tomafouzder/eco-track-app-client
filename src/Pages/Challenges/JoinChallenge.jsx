import React, { use } from 'react';
import { AuthContext } from '../../context/AuthProvider';


const JoinChallenge = () => {
    const { user } = use(AuthContext)
    console.log(user)

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-6">
                Join Challenge
            </h2>

            <form className="space-y-4">

                {/* userId */}
                <div>
                    <label className="block font-medium mb-1">User ID</label>
                    <input
                        type="text"
                        defaultValue={user?._id}
                        name='UserId'
                        readOnly
                        placeholder="Enter your user ID"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* challengeId */}
                <div>
                    <label className="block font-medium mb-1">Challenge ID</label>
                    <input
                        type="text"
                        placeholder="Enter challenge ID"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* status */}
                <div>
                    <label className="block font-medium mb-1">Status</label>
                    <select className="select select-bordered w-full">
                        <option>Not Started</option>
                        <option>Ongoing</option>
                        <option>Finished</option>
                    </select>
                </div>

                {/* progress */}
                <div>
                    <label className="block font-medium mb-1">Progress (%)</label>
                    <input
                        type="number"
                        placeholder="0"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* joinDate */}
                <div>
                    <label className="block font-medium mb-1">Join Date</label>
                    <input
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


