import React, { useEffect, useRef, useState } from "react";
import { FaUsers, FaCalendarAlt, FaRecycle } from "react-icons/fa";
import 'animate.css';
import MyContainer from "../../components/Navbar/MyContainer";
import { Link, useLoaderData } from "react-router";
import JoinChallenge from "./JoinChallenge";
import { ImCancelCircle } from "react-icons/im";




const ChallengeDetails = () => {
    const data = useLoaderData()
    const challenge = data.result;
    const [joining, setJoining] = useState([]);
    const joinModalRef = useRef(null)

    useEffect(() => {
        fetch(`http://localhost:3000/challenges/join-challenge/${challenge._id}`)
            .then(res => res.json())
            .then(data => {
                console.log("total joining people for this challenge", data)
                setJoining(data);
            })
    }, [challenge._id])

    const handleJoinModalOpen = () => {
        joinModalRef.current.showModal()
    }


    // const challenge = {
    //     _id: "123456",
    //     title: "Plastic-Free July",
    //     category: "Waste Reduction",
    //     description: "Avoid single-use plastic for one month",
    //     duration: 30,
    //     target: "Reduce plastic waste",
    //     participants: 120,
    //     impactMetric: "kg plastic saved",
    //     createdBy: "admin@ecotrack.com",
    //     startDate: "2024-07-01",
    //     endDate: "2024-07-31",
    //     imageUrl: "https://example.com/image.jpg",
    // };

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
                    <h1 className="text-white flex items-center justify-center md:text-5xl text-4xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/40 animate__animated animate__fadeInLeft  animate__delay-2s font-bold">Challenge details : {challenge.title}</h1>
                </div>
            </div>
            {/* details */}
            <MyContainer className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                {/* Image */}
                <div className="w-full h-64 overflow-hidden rounded-xl mb-6">
                    <img
                        src={challenge.imageUrl}
                        alt={challenge.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Title & Category */}
                <div className="mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">{challenge.title}</h2>
                    <span className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {challenge.category}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4">{challenge.description}</p>

                {/* Details */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 text-gray-600">
                    <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-green-500" />
                        <span>
                            {challenge.startDate} - {challenge.endDate}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaUsers className="text-green-500" />
                        <span>{challenge.participants} Participants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaRecycle className="text-green-500" />
                        <span>Impact: {challenge.impactMetric}</span>
                    </div>
                </div>

                {/* Target */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-1">Target</h3>
                    <p className="text-gray-700">{challenge.target}</p>
                </div>

                {/* Join Button */}

                <button
                    onClick={handleJoinModalOpen}
                    className="btn btn-success w-full md:w-auto px-6 py-3 text-white font-semibold">
                    Join Challenge
                </button>



                <Link to={`/updateChallenge/${challenge._id}`}>
                    <button className="btn btn-success w-full md:w-auto px-6 py-3 text-white font-semibold">
                        Update Challenge
                    </button>
                </Link>

                {/*Join modal */}
                <dialog
                    ref={joinModalRef}
                    className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form method="dialog" className="flex justify-end items-center">
                            <button className="">
                                <ImCancelCircle />
                            </button>
                        </form>

                        <JoinChallenge
                            challengeId={challenge._id}
                            joinModalRef={joinModalRef}
                            joining={joining}
                            setJoining={setJoining}
                        ></JoinChallenge>
                    </div>
                </dialog>

            </MyContainer>

            {/* Give me your tips and ideas */}
            <MyContainer className="my-40">
                <div className="hero bg-base-200 min-h-screen">
                    <div className=" flex-col lg:flex-row-reverse">
                        <div className="text-center p-4 lg:text-left">
                            <h1 className="text-5xl font-bold">Write Dwon Your Tips And Ideas</h1>
                            <p className="py-6">
                               Share your eco-friendly ideas to inspire meaningful action and help others make sustainable choices. When we exchange knowledge, small changes grow into powerful movements. Your creativity can spark real environmental impact, support a greener community, and motivate people everywhere to protect the planet for future generations.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full">
                            <form className="card-body">
                                <fieldset className="fieldset">

                                    <fieldset className="relative flex justify-center items-center md:justify-end p-4 md:bg-gray-100  rounded-lg">

                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvys_qbdj--TGqit23T4tjze9FtHUBZUyxdw&s"
                                            alt=""
                                            className="w-28 md:w-40 md:absolute md:top-2 md:right-2 object-cover"
                                        />

                                    </fieldset>


                                    {/* AuthorName */}
                                    <label className="label text-lg font-semibold">AuthorName :</label>
                                    <input type="text" className="input" placeholder="authorName" />

                                    {/* title */}
                                    <label className="label text-lg font-semibold">Content Title :</label>
                                    <input type="text" className="input" placeholder="content title" />
                                    <div />


                                    {/* Content */}
                                    <label className="label text-lg font-semibold">Content :</label>
                                    <textarea className="textarea w-full h-24 " type="text" placeholder="write your content"></textarea>

                                    <button className="btn btn-primary text-lg mt-4 ">Share Your Content</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </MyContainer>

            {/* total joining people this challenge */}
            <MyContainer>
                <div>
                    <h1 className="text-4xl ">Total Joining People In This Challenge:{joining.length} </h1>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Status</th>
                                <th>Challenge Name</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                joining.map((join, index) => <tr>
                                    <th>{index + 1} </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={join.userImage}
                                                        alt="User Image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{join.
                                                    userName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {join.status}
                                    </td>
                                    <td>{join.progress}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </MyContainer>

        </div>
    );
};

export default ChallengeDetails;



