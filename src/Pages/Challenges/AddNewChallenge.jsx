import { useState } from "react";
import { FaLeaf, FaClock, FaUsers, FaRegImage, FaRegEdit } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import MyContainer from "../../components/Navbar/MyContainer";

const AddNewChallenge = () => {
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
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <h1 className="text-white flex items-center justify-center md:text-5xl text-4xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/40 animate__animated animate__fadeInLeft  animate__delay-2s font-bold">Add New Challenge</h1>
                </div>
            </div>

            <MyContainer className="min-h-screen p-6">
                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6"
                >
                    <h2 className="text-4xl font-bold text-green-700 text-center mb-6">
                        Add Challenge
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Title */}
                        <div className="form-control">
                            <label className="input-group">
                                <span><FaLeaf /></span>
                                <input
                                    name="title"
                                    placeholder="Title"
                                    value={formData.title || ""}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full ${errors.title ? "input-error" : ""}`}
                                />
                            </label>
                            {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
                        </div>

                        {/* Category */}
                        <div className="form-control">
                            <label className="input-group">
                                <span><MdCategory /></span>
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
                            </label>
                            {errors.category && <span className="text-red-500 text-sm">{errors.category}</span>}
                        </div>

                        {/* Duration */}
                        <div className="form-control">
                            <label className="input-group">
                                <span><FaClock /></span>
                                <input
                                    name="duration"
                                    type="number"
                                    placeholder="Duration (days)"
                                    value={formData.duration || ""}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full ${errors.duration ? "input-error" : ""}`}
                                />
                            </label>
                            {errors.duration && <span className="text-red-500 text-sm">{errors.duration}</span>}
                        </div>

                        {/* Participants */}
                        <div className="form-control">
                            <label className="input-group">
                                <span><FaUsers /></span>
                                <input
                                    name="participants"
                                    type="number"
                                    placeholder="Participants"
                                    value={formData.participants || ""}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full ${errors.participants ? "input-error" : ""}`}
                                />
                            </label>
                            {errors.participants && <span className="text-red-500 text-sm">{errors.participants}</span>}
                        </div>

                        {/* Image URL */}
                        <div className="form-control md:col-span-2">
                            <label className="input-group">
                                <span><FaRegImage /></span>
                                <input
                                    name="imageUrl"
                                    placeholder="Image URL"
                                    value={formData.imageUrl || ""}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full ${errors.imageUrl ? "input-error" : ""}`}
                                />
                            </label>
                            {errors.imageUrl && <span className="text-red-500 text-sm">{errors.imageUrl}</span>}
                        </div>

                        {/* Description */}
                        <div className="form-control md:col-span-2">
                            <label className="input-group">
                                <span><FaRegEdit /></span>
                                <textarea
                                    name="description"
                                    placeholder="Short Description"
                                    value={formData.description || ""}
                                    onChange={handleChange}
                                    className={`textarea textarea-bordered w-full ${errors.description ? "textarea-error" : ""}`}
                                />
                            </label>
                            {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
                        </div>
                    </div>

                    <button className="btn btn-success w-full mt-4">Add Challenge</button>
                </form>
            </MyContainer>

        </div>
    )
};

export default AddNewChallenge;
