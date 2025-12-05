import React, { useContext, useEffect, useState } from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';

const UpdateChallenge = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const [challenge, setChallenge] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    console.log(challenge);

    useEffect(() => {
        if (!id) return;
        fetch(`http://localhost:3000/challenges/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.success && data.result) {

                    setChallenge(data.result);
                    setLoading(false)
                } else {
                    console.log("Middleware blocked or no data", data);
                }
            })
            .catch(err => console.log(err));


    }, [user, id])


    //  handleSubmit and new data update collection:
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title: e.target.title.value,
            category: e.target.category.value,
            duration: parseInt(e.target.duration.value),
            participants: parseInt(e.target.participants.value),
            imageUrl: e.target.imageUrl.value,
            description: e.target.description.value,
            target: e.target.target.value,
            impactMetric: e.target.impactMetric.value,
            createdBy: e.target.createdBy.value,
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
        }

        axios.put(`http://localhost:3000/challenges/${challenge._id}`, formData, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => {
                Swal.fire({

                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
                navigate(`/challengeDetails/${challenge._id}`)
            })
            .catch(error => {
                console.log(error);
            })
    };


    if (loading) return <div>Loading challenge...</div>;
    return (
        <div>
            <div className="relative w-full h-[550px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/2191660851/video/sapling-growing.mp4?s=mp4-640x640-is&k=20&c=KDtJA_tfOSjWWPvj9JlI8CWE0K9wzgl2L9nXaGOqYrw="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white flex items-center justify-center md:text-7xl text-5xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/20 animate__animated animate__fadeInLeft  font-extrabold">All Challenges</h1>
                </div>
            </div>

            <MyContainer className="min-h-screen p-6">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6"
                >
                    <h2 className="text-4xl font-bold text-green-700 text-center mb-6">Update Challenge</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Title */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Title</span>
                            </label>
                            <input
                                name="title"
                                defaultValue={challenge.title}
                                placeholder="Challenge Title"
                                type='text'
                                required
                                readOnly
                                className={`input input-bordered w-full`}
                            />

                        </div>

                        {/* Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Category</span>
                            </label>
                            <select
                                name="category"
                                defaultValue={challenge.category}
                                required
                                className={`select select-bordered w-full `}
                            >
                                <option value="">Select Category</option>
                                <option>Waste Reduction</option>
                                <option>Energy Conservation</option>
                                <option>Water Conservation</option>
                                <option>Sustainable Transport</option>
                                <option>Green Living</option>
                            </select>

                        </div>

                        {/* Duration */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Duration (days)</span>
                            </label>
                            <input
                                name="duration"
                                defaultValue={challenge.duration}
                                type="number"
                                placeholder="Duration"
                                required
                                className={`input input-bordered w-full`}
                            />

                        </div>

                        {/* Participants */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Participants</span>
                            </label>
                            <input
                                name="participants"
                                type="number"
                                readOnly
                                defaultValue={challenge.participants}
                                placeholder="Number of Participants"

                                className={`input input-bordered w-full `}
                            />

                        </div>

                        {/* Image URL */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Image URL</span>
                            </label>
                            <input
                                name="imageUrl"
                                placeholder="Image URL"
                                defaultValue={challenge.imageUrl}
                                required
                                className={`input input-bordered w-full `}
                            />

                        </div>

                        {/* Description */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Description</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Short Description"
                                defaultValue={challenge.description}
                                required
                                className={`textarea textarea-bordered w-full `}
                            />

                        </div>

                        {/* Target */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Target</span>
                            </label>
                            <input
                                name="target"
                                placeholder="Target (e.g., Reduce plastic waste)"
                                defaultValue={challenge.target}
                                required
                                className={`input input-bordered w-full`}
                            />
                        </div>

                        {/* Impact Metric */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Impact Metric</span>
                            </label>
                            <input
                                name="impactMetric"
                                defaultValue={challenge.impactMetric}
                                placeholder="Impact Metric (e.g., kg plastic saved)"
                                required
                                className={`input input-bordered w-full`}
                            />

                        </div>

                        {/* Created By */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Created By</span>
                            </label>
                            <input
                                name="createdBy"
                                readOnly
                                defaultValue={challenge.createdBy}
                                placeholder="Creator Email"
                                required
                                className={`input input-bordered w-full `}
                            />

                        </div>

                        {/* Start Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Start Date</span>
                            </label>
                            <input
                                type="date"
                                defaultValue={challenge.startDate}
                                name="startDate"
                                required
                                className={`input input-bordered w-full `}
                            />

                        </div>

                        {/* End Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">End Date</span>
                            </label>
                            <input
                                type="date"
                                name="endDate"
                                defaultValue={challenge.endDate}
                                required
                                className={`input input-bordered w-full `}
                            />
                        </div>
                    </div>

                    <button className="btn btn-success w-full mt-4">Add Challenge</button>
                </form>
            </MyContainer>
        </div>
    );
};

export default UpdateChallenge;