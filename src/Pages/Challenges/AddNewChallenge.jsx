import {  useContext, useState } from "react";
import MyContainer from "../../components/Navbar/MyContainer";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import AddEvent from "../TipsAndEvent/AddEvent";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddNewChallenge = () => {
    const { user } = useContext(AuthContext)
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [challenges, setChallenges] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title) newErrors.title = "Title is required";
        if (!formData.category) newErrors.category = "Category is required";
        if (!formData.description) newErrors.description = "Description is required";
        if (!formData.duration) newErrors.duration = "Duration is required";
        if (!formData.participants) newErrors.participants = "Participants is required";
        if (!formData.imageUrl) newErrors.imageUrl = "Image URL is required";
        if (!formData.target) newErrors.target = "Target is required";
        if (!formData.impactMetric) newErrors.impactMetric = "Impact metric is required";
        if (!formData.startDate) newErrors.startDate = "Start date is required";
        if (!formData.endDate) newErrors.endDate = "End date is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // handleSubmit and new data collection : 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            Swal.fire({
                icon: "error",
                title: "Please...",
                text: "Fill up all requirement!",
            });
            return;
        }

        const submittedData = {
            title: e.target.title.value,
            category: e.target.category.value,
            duration: parseInt(e.target.duration.value),
            participants: parseInt(e.target.participants.value),
            imageUrl: e.target.imageUrl.value,
            description: e.target.description.value,
            target: e.target.target.value,
            impactMetric: e.target.impactMetric.value,
            createdBy: user?.email,
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
        }

        axios.post('http://localhost:3000/challenges', submittedData, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => {
                console.log(res);

                Swal.fire({
                    icon: "success",
                    title: "Challenge Added!",
                    timer: 1500,
                    showConfirmButton: false,
                });

                navigate("/challenges");
            })
            .catch(error => {
                console.log(error);
            })


        const newChallenge = {
            ...submittedData,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        setChallenges([newChallenge, ...challenges]);
        setFormData({});
        setErrors({});
    };

    return (
        <div className="bg-gray-100">
            <div className="relative w-full h-[450px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/1448245572/video/in-the-hands-of-trees-growing-seedlings.mp4?s=mp4-640x640-is&k=20&c=2UOGdcDCDwMC63s-nhOAY_RDrxCc2bVn_ubHj-WCW3Q="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white flex items-center justify-center md:text-7xl text-5xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/20 animate__animated animate__fadeInLeft  font-extrabold">Add The New Challenges</h1>
                </div>
            </div>

            <MyContainer className="min-h-screen p-6">
                <h3 className='md:text-5xl text-3xl px-2 my-12  uppercase text-green-600 font-extrabold text-center'>Add the new challenges and Create Your Community Event </h3>
                <p className="text-lg font-semibold opacity-75 pb-16 border-b-2">
                    Eco Tracer encourages participants to track their daily environmental actions, reduce waste, conserve energy, and adopt sustainable habits, creating long-term awareness and promoting a cleaner, healthier planet through consistent mindful choices.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto bg-green-50 rounded-3xl  p-8 space-y-6"
                >
                    <h2 className="text-4xl  font-extrabold text-gray-800  text-center mb-6">Add Challenge</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Title */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Title</span>
                            </label>
                            <input
                                name="title"
                                placeholder="Challenge Title"
                                value={formData.title || ""}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.title ? "input-error" : ""}`}
                            />
                            {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
                        </div>

                        {/* Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Category</span>
                            </label>
                            <select
                                name="category"
                                value={formData.category || ""}
                                onChange={handleChange}
                                className={`select select-bordered w-full ${errors.category ? "select-error" : ""}`}
                            >
                                <option value="">Select Category</option>
                                <option>Waste Reduction</option>
                                <option>Energy Conservation</option>
                                <option>Water Conservation</option>
                                <option>Sustainable Transport</option>
                                <option>Green Living</option>
                            </select>
                            {errors.category && <span className="text-red-500 text-sm">{errors.category}</span>}
                        </div>

                        {/* Duration */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Duration (days)</span>
                            </label>
                            <input
                                name="duration"
                                type="number"
                                placeholder="Duration"
                                value={formData.duration || ""}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.duration ? "input-error" : ""}`}
                            />
                            {errors.duration && <span className="text-red-500 text-sm">{errors.duration}</span>}
                        </div>

                        {/* Participants */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Participants</span>
                            </label>
                            <input
                                name="participants"
                                type="number"
                                placeholder="Number of Participants"
                                value={formData.participants || ""}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.participants ? "input-error" : ""}`}
                            />
                            {errors.participants && <span className="text-red-500 text-sm">{errors.participants}</span>}
                        </div>

                        {/* Image URL */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Image URL</span>
                            </label>
                            <input
                                name="imageUrl"
                                placeholder="Image URL"
                                value={formData.imageUrl || ""}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.imageUrl ? "input-error" : ""}`}
                            />
                            {errors.imageUrl && <span className="text-red-500 text-sm">{errors.imageUrl}</span>}
                        </div>

                        {/* Description */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Description</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Short Description"
                                value={formData.description || ""}
                                onChange={handleChange}
                                className={`textarea textarea-bordered w-full ${errors.description ? "textarea-error" : ""}`}
                            />
                            {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
                        </div>

                        {/* Target */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Target</span>
                            </label>
                            <input
                                name="target"
                                placeholder="Target (e.g., Reduce plastic waste)"
                                value={formData.target || ""}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.target ? "input-error" : ""}`}
                            />
                            {errors.target && <span className="text-red-500 text-sm">{errors.target}</span>}
                        </div>

                        {/* Impact Metric */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Impact Metric</span>
                            </label>
                            <input
                                name="impactMetric"
                                placeholder="Impact Metric (e.g., kg plastic saved)"
                                value={formData.impactMetric || ""}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.impactMetric ? "input-error" : ""}`}
                            />
                            {errors.impactMetric && <span className="text-red-500 text-sm">{errors.impactMetric}</span>}
                        </div>

                        {/* Created By */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold">Created By</span>
                            </label>
                            <input
                                name="createdBy"
                                placeholder="Creator Email"
                                value={user?.email || ""}
                                readOnly
                                className="input input-bordered w-full"
                            />
                          
                        </div>

                        {/* Start Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Start Date</span>
                            </label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate || ""}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.startDate ? "input-error" : ""}`}
                            />
                            {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate}</span>}
                        </div>

                        {/* End Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">End Date</span>
                            </label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate || ""}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.endDate ? "input-error" : ""}`}
                            />
                            {errors.endDate && <span className="text-red-500 text-sm">{errors.endDate}</span>}
                        </div>
                    </div>

                    <button className="mt-6 button w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition transform duration-300">Add Challenge</button>
                </form>
            </MyContainer>

            {/* add event  */}
            <MyContainer className="py-24 px-2 md:px-0">
                <h2 className="md:text-5xl text-3xl px-2 my-12  uppercase text-green-600 font-extrabold text-center">Create Event:</h2>
                <p className="text-lg font-semibold text-center opacity-75 pb-16 border-b-2">
                    A community event brings people together to share ideas, support local activities, build connections, and create positive impact through teamwork, cultural exchange, learning opportunities, and meaningful participation that strengthens neighborhood unity and collaboration
                </p>
                <AddEvent></AddEvent>
            </MyContainer>
        </div>
    );
};

export default AddNewChallenge;
