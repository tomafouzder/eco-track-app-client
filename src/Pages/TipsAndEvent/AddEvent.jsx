import React  from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import axios from 'axios';
import { AuthContext } from '../../context/AuthProvider';

const AddEvent = () => {



    const handleSubmitForEvent = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const location = form.location.value;
        const organizer = form.organizer.value;
        const imageUrl = form.imageUrl.value;


        const eventData = {
            title,
            description,
            date,
            location,
            organizer,
            imageUrl,
            maxParticipants: 0,
            currentParticipants: 0,
        };


        axios.post('https://eco-track-app-server.vercel.app/events', eventData)
            .then(res => {
                console.log(res);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })

    }



    return (
        <div>
            <MyContainer className="mt-24">
                <div className="hero bg-green-100 min-h-screen">
                    <div className="flex-col lg:flex-row-reverse">

                        {/* LEFT TEXT */}
                        <div className="text-center p-4 lg:text-left">
                            <h1 className="text-4xl  font-extrabold text-gray-800 ">Create Your Community Event</h1>
                            <p className="py-6">
                                Share your community clean-up event details to inspire teamwork and
                                help people take meaningful action. Together we can build a cleaner,
                                greener environment for everyone.
                            </p>
                        </div>

                        {/* RIGHT FORM CARD */}
                        <div className="card bg-green-50 w-full">
                            <form onSubmit={handleSubmitForEvent} className="card-body">
                                <fieldset className="fieldset">

                                    {/* BANNER IMAGE */}
                                    <fieldset className="relative flex justify-center items-center md:justify-end p-4 md:bg-green-100 rounded-lg">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvys_qbdj--TGqit23T4tjze9FtHUBZUyxdw&s"
                                            alt=""
                                            className="w-28 md:w-40 md:absolute md:top-2 md:right-2 object-cover"
                                        />
                                    </fieldset>

                                    {/* TITLE */}
                                    <label className="label text-lg font-semibold">Event Title :</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="input input-bordered"
                                        placeholder="Event title"
                                    />

                                    {/* DESCRIPTION */}
                                    <label className="label text-lg font-semibold">Description :</label>
                                    <textarea
                                        name="description"
                                        className="textarea textarea-bordered w-full h-24"
                                        placeholder="Short description"
                                    />

                                    {/* DATE */}
                                    <label className="label text-lg font-semibold">Event Date & Time :</label>
                                    <input
                                        type="datetime-local"
                                        name="date"
                                        className="input input-bordered"
                                    />


                                    {/* LOCATION */}
                                    <label className="label text-lg font-semibold">Location :</label>
                                    <input
                                        type="text"
                                        name="location"
                                        className="input input-bordered"
                                        placeholder="Event location"
                                    />

                                    {/* ORGANIZER */}
                                    <label className="label text-lg font-semibold">Organizer Email :</label>
                                    <input
                                        type="email"
                                        name="organizer"
                                        className="input input-bordered"
                                        placeholder="Email"
                                    />

                                    {/* Image URL */}
                                    <label className="label text-lg font-semibold">Image URL</label>
                                    <input
                                        name="imageUrl"
                                        placeholder="Image URL"
                                        type="photo"
                                        className="input input-bordered w-1/2"
                                    />

                                    <button type="submit" className="btn btn-primary text-lg mt-4">
                                        Create Event
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </MyContainer>


        </div>


    );
};

export default AddEvent;


