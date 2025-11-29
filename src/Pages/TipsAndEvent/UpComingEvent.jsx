import React from "react";
import { FiClock } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const UpComingEvent = () => {
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
            <div className="relative max-w-6xl mx-auto px-4">

                {/* Title + Button */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        UpComing Events
                    </h2>

                    <button className="btn btn-outline btn-sm rounded-full text-white border-green-400 hover:bg-green-500 hover:border-green-500">
                        All Events
                    </button>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* LEFT BIG CARD */}
                    <div className="border border-green-900 rounded-lg shadow-lg overflow-hidden bg-[#0f2b20]/60 backdrop-blur">
                        <img
                            className="w-full h-64 object-cover"
                            src="https://i.ibb.co/3R6rf0D/fitness.jpg"
                            alt="event"
                        />

                        <div className="p-6 text-white">
                            <p className="opacity-80">Organizer: Tom Maddy</p>

                            <h3 className="text-xl font-bold mt-2 mb-3">
                                A Walk for Healthy Environment
                            </h3>

                            <p className="text-sm opacity-80 mb-4">
                                Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.
                                Sed rutrum libero non pretium tristique, arcu mi sollicitudin…
                            </p>

                            {/* Footer */}
                            <div className="flex items-center gap-4 text-sm text-green-300">
                                <div className="flex items-center gap-1">
                                    <FiClock />
                                    Started On: 11.00am
                                </div>

                                <div className="flex items-center gap-1">
                                    <GoLocation />
                                    New Grand Street, California
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SMALL CARDS */}
                    <div className="flex flex-col gap-6">

                        {/* Small Card 1 */}
                        <div className="border border-green-900 rounded-lg shadow-lg p-5 flex bg-[#0f2b20]/60 backdrop-blur">
                            <img
                                className="w-32 h-28 object-cover rounded"
                                src="https://i.ibb.co/fQ5Wp7m/plastic.jpg"
                                alt="recycle"
                            />

                            <div className="ml-4 text-white">
                                <p className="opacity-80">Organizer: Tom Maddy</p>

                                <h3 className="text-lg font-bold mt-1">Recycling Plastic Bottle</h3>

                                <p className="text-sm opacity-80 mt-1 mb-3">
                                    Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue…
                                </p>

                                <div className="flex items-center gap-4 text-sm text-green-300">
                                    <div className="flex items-center gap-1">
                                        <FiClock /> 11.00am
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <GoLocation /> New Grand Street, California
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small Card 2 */}
                        <div className="border border-green-900 rounded-lg shadow-lg p-5 flex bg-[#0f2b20]/60 backdrop-blur">
                            <img
                                className="w-32 h-28 object-cover rounded"
                                src="https://i.ibb.co/2jKQfML/green.jpg"
                                alt="green"
                            />

                            <div className="ml-4 text-white">
                                <p className="opacity-80">Organizer: Tom Maddy</p>

                                <h3 className="text-lg font-bold mt-1">Green Construction Practice</h3>

                                <p className="text-sm opacity-80 mt-1 mb-3">
                                    Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue…
                                </p>

                                <div className="flex items-center gap-4 text-sm text-green-300">
                                    <div className="flex items-center gap-1">
                                        <FiClock /> 11.00am
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <GoLocation /> New Grand Street, California
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpComingEvent;
