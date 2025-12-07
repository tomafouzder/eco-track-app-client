import React, { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import MyContainer from "../../components/Navbar/MyContainer";
import Loading from "../../components/Loading/Loading";

const AllEvent = () => {


    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://eco-track-app-server.vercel.app/events')
            .then(res => res.json())
            .then(data => {
           
                setEvents(data)
                setLoading(false);

            })

    }, [])

    if (loading) return <Loading />

    return (
        <div>
            <div className="relative w-full h-[450px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/2202052577/video/business-team-collaborating-on-eco-friendly-project-promoting-sustainability-growth-with.mp4?s=mp4-640x640-is&k=20&c=HoIPlQm5iL3jEONet-RMgi3V_BTx5P55PksBFrMuvsk="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white flex items-center justify-center md:text-7xl text-5xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/20 animate__animated animate__fadeInLeft  font-extrabold">All Events</h1>
                </div>
            </div>

            {/* MAIN CONTENT */}

            <div className="max-w-6xl mx-auto px-4">

                <MyContainer className="my-24">

                    <div className=" mb-24  text-center">
                        <h2 className="md:text-5xl text-3xl uppercase text-green-600 font-extrabold text-center">
                            All Events
                        </h2>
                        <p className="text-lg pt-10 font-semibold text-gray-500 ">
                            Join our eco events to protect the planet and create a sustainable future. Participate in tree planting, clean-ups, recycling drives, and environmental workshops. Learn, collaborate, and inspire change in your community while reducing waste, conserving nature, and making a real impact. Everyone can contribute to a greener world.
                        </p>
                    </div>

                    {/* event card */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {
                            events.map(event => <div key={event._id}>
                                <div className="border border-green-900 md:border-none rounded-lg shadow-lg overflow-hidden backdrop-blur flex flex-col h-full">
                                    <div className="relative">
                                        <img
                                            className="w-full h-64 object-cover"
                                            src={event.imageUrl}
                                            alt="event"
                                        />

                                        <span className="absolute bottom-1 left-1 bg-[#0f2b20]/90 text-white text-sm font-semibold px-2 py-1 rounded-lg">
                                            Current Participants : {event.currentParticipants}
                                        </span>
                                        <span className="absolute bottom-1 right-1 bg-[#0f2b20]/90 text-white text-sm font-semibold px-2 py-1 rounded-lg">
                                            Max Participants : {event.maxParticipants}
                                        </span>
                                    </div>

                                    <div className="p-6 text-gray-900 flex-1 flex flex-col justify-between">
                                        <div>
                                            <p className="text-sm">Created At: {event.createdAt}</p>
                                            <p className="text-sm">Organizer: {event.organizer}</p>
                                            <h3 className="text-2xl font-bold mt-2 mb-3">
                                                {event.title}
                                            </h3>


                                            <p className="text-sm opacity-60 mb-4">
                                                {event.description}
                                            </p>
                                        </div>

                                        {/* Footer */}
                                        <div className="flex items-center gap-4 text-sm text-blue-600  mt-auto">
                                            <div className="flex items-center gap-1">
                                                <FiClock />
                                                Started On: {event.date}
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <GoLocation />
                                                {event.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }




                    </div>
                </MyContainer>
            </div>

        </div>
    );
};

export default AllEvent;
