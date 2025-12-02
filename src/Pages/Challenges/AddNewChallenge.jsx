import { use, useState } from "react";
import MyContainer from "../../components/Navbar/MyContainer";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import AddEvent from "../TipsAndEvent/AddEvent";
import toast from "react-hot-toast";

const AddNewChallenge = () => {
    const { user } = use(AuthContext)
    console.log(user);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [challenges, setChallenges] = useState([]);

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
        if (!formData.createdBy) newErrors.createdBy = "Creator email is required";
        if (!formData.startDate) newErrors.startDate = "Start date is required";
        if (!formData.endDate) newErrors.endDate = "End date is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // handleSubmit and new data collection : 
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title: e.target.title.value,
            category: e.target.category.value,
            duration: e.target.duration.value,
            participants: e.target.participants.value,
            imageUrl: e.target.imageUrl.value,
            description: e.target.description.value,
            target: e.target.target.value,
            impactMetric: e.target.impactMetric.value,
            createdBy: e.target.createdBy.value,
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
        }

        axios.post('http://localhost:3000/challenges', formData, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => {
                console.log(res);
                toast.success("Successfully added")
            })
            .catch(error => {
                console.log(error);
            })



        if (!validateForm()) return;

        const newChallenge = {
            ...formData,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        setChallenges([newChallenge, ...challenges]);
        setFormData({});
        setErrors({});
    };

    return (
        <div>
            <div className="relative w-full h-[500px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/1268227434/video/young-female-gardener-making-a-hole-and-planting-a-vegetable-plant-in-the-garden.mp4?s=mp4-640x640-is&k=20&c=ha9onOGVSlZxmxG3ooIePgRM573aRq9nw9Mk_eUVbhI="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white md:text-5xl text-4xl font-bold bg-black/40 p-4 animate__animated animate__fadeInLeft animate__delay-2s">
                        Add New Challenge
                    </h1>
                </div>
            </div>

            <MyContainer className="min-h-screen p-6">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6"
                >
                    <h2 className="text-4xl font-bold text-green-700 text-center mb-6">Add Challenge</h2>

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
                                value={formData.createdBy || ""}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.createdBy ? "input-error" : ""}`}
                            />
                            {errors.createdBy && <span className="text-red-500 text-sm">{errors.createdBy}</span>}
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

                    <button className="btn btn-success w-full mt-4">Add Challenge</button>
                </form>
            </MyContainer>

            {/* add event  */}
            <div className="my-24">
                <AddEvent></AddEvent>
            </div>
        </div>
    );
};

export default AddNewChallenge;
