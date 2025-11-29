import React from "react";
import { FiClock } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { useLoaderData } from "react-router";
import MyContainer from "../../components/Navbar/MyContainer";

const AllEvent = () => {
    const events = useLoaderData()
    console.log(events)

    return (
        <div>

            <div
                className="relative py-16 h-[500px] bg-center bg-cover"
                style={{
                    backgroundImage: "url('https://media.gettyimages.com/id/1383393717/photo/grandmother-with-granddaughter-picking-peppers-in-garden-together.jpg?s=1024x1024&w=gi&k=20&c=O6N4SgG8yZWbMT0tcNGFcn-FcGK8_sHQ--6SxcqpB9I=')",
                }}
            >
                <div className="absolute inset-0 bg-black/5"></div>

                <div className="relative z-10 flex items-center justify-start h-full">
                    <h1 className="text-white flex items-center justify-center md:text-7xl text-5xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/20 animate__animated animate__fadeInLeft  font-extrabold">All Events</h1>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto px-4">

                <MyContainer className="mt-24">

                    <div className=" mb-24  text-center">
                        <h2 className="text-3xl text-[#0f2b20]/95 md:text-5xl font-bold">
                            All Events
                        </h2>
                        <p className="text-lg text-[#0f2b20]/60">
                            Join our eco events to protect the planet and create a sustainable future. Participate in tree planting, clean-ups, recycling drives, and environmental workshops. Learn, collaborate, and inspire change in your community while reducing waste, conserving nature, and making a real impact. Everyone can contribute to a greener world.
                        </p>
                    </div>

                    {/* event card */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {
                            events.map(event => <div key={event._id}>
                                <div className="border border-green-900 rounded-lg shadow-lg overflow-hidden bg-[#0f2b20]/60 backdrop-blur flex flex-col h-full">
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

                                    <div className="p-6 text-white flex-1 flex flex-col justify-between">
                                        <div>
                                            <p className="opacity-80">Organizer: {event.organizer}</p>
                                            <p className="opacity-80">Created At: {event.createdAt}</p>

                                            <h3 className="text-xl font-bold mt-2 mb-3">
                                                {event.title}
                                            </h3>

                                            <p className="text-sm opacity-80 mb-4">
                                                {event.description}
                                            </p>
                                        </div>

                                        {/* Footer */}
                                        <div className="flex items-center gap-4 text-sm text-green-300 mt-auto">
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
