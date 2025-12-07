import React, { use, useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router";
import MyContainer from "../../components/Navbar/MyContainer";

const UpComingEvent = () => {
   
     const [events , setEvents] = useState([]);
        
        
            useEffect(() => {
        
               fetch("https://eco-track-app-server.vercel.app/upcoming-events")
                    .then(res => res.json())
                    .then(data => {
               
                        setEvents(data)
        
                    })
        
            }, [])

    if (!Array.isArray(events)) return null;

    const bigEvent = events[0];            
    const smallEvents = events.slice(1);   

    return (
        <div
            className="relative py-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://media.gettyimages.com/id/1429455409/photo/solar-energy-and-wind-turbines-in-fog-seen-from-the-air.jpg?s=1024x1024&w=gi&k=20&c=dChfV-u9mY6BeR1dFtf5TZXkiDb8EzoxS_KSObxnTB0=')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80 bg-opacity-70"></div>

            {/* MAIN CONTENT */}
            <MyContainer className="relative px-4">
                {/* Title + Button */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        UpComing Events
                    </h2>

                    <Link to="/allEvent" className="btn btn-outline rounded-full text-white hover:bg-green-500  hover:border-green-500">
                        All Events
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {
                        bigEvent && (
                            <div className="border p-5 md:p-0 border-green-900 rounded-lg shadow-lg overflow-hidden backdrop-blur">
                                <img
                                    className="w-full h-80 object-cover"
                                    src={bigEvent.imageUrl}
                                    alt="event"
                                />

                                <div className="p-6 text-white">
                                    <p className="opacity-80">Organizer : {bigEvent.organizer}</p>

                                    <h3 className="text-xl font-bold mt-2 mb-3">
                                        {bigEvent.title}
                                    </h3>

                                    <p className="text-sm line-clamp-2  mb-4">
                                        {bigEvent.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex border border-green-900 py-4 px-2 items-center gap-4 text-sm text-green-300">
                                        <div className="flex items-center gap-1">
                                            <FiClock />
                                            Started On: {bigEvent.date} 
                                        </div>

                                        <div className="flex  items-center gap-1">
                                            <GoLocation />
                                            {bigEvent.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                  


                    {/* RIGHT SMALL CARDS */}
                    <div className="flex flex-col gap-6">

                        {
                            smallEvents.map(event => <div key={event._id} className="border border-green-900 rounded-lg shadow-lg p-5 flex flex-col md:flex-row backdrop-blur">
                                <img
                                    className="md:w-36 md:h-36 w-full h-56  object-cover rounded"
                                    src={event.imageUrl}
                                    alt="recycle"
                                />

                                <div className="ml-4 text-white">
                                    <p className="opacity-80">Organizer: {event.organizer}</p>

                                    <h3 className="text-lg font-bold mt-1">{event.title}</h3>

                                    <p className="text-sm line-clamp-2 mt-1 mb-3">
                                      {event.description}
                                    </p>

                                    <div className="flex border border-green-900 py-2 px-1 items-center gap-4 text-sm text-green-300">
                                        <div className="flex items-center gap-1">
                                            <FiClock /> Started On : {event.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <GoLocation />{event.location}
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>

                </div>



            </MyContainer>
        </div>
    );
};

export default UpComingEvent;
