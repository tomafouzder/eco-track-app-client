import React, { useContext, useEffect, useRef, useState } from "react";
import { FaUsers, FaCalendarAlt, FaRecycle } from "react-icons/fa";
import 'animate.css';
import MyContainer from "../../components/Navbar/MyContainer";
import { Link, useNavigate, useParams } from "react-router";
import JoinChallenge from "./JoinChallenge";
import { ImCancelCircle } from "react-icons/im";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import { FiClock } from "react-icons/fi";
import Swal from 'sweetalert2';
import Loading from "../../components/Loading/Loading";



const ChallengeDetails = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const [challenge, setChallenge] = useState(null);
    const [loading, setLoading] = useState(true);
    const [joining, setJoining] = useState([]);
    const [refetch, setRefetch] = useState(false)
    const joinModalRef = useRef(null)
    const navigate =useNavigate()


    useEffect(() => {
        if (!id) return;
        fetch(`https://eco-track-app-server.vercel.app/challenges/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.success && data.result) {
                    setChallenge(data.result);
                    setLoading(false)
                } 
            })
            .catch(err => console.log(err));


    }, [id, user, refetch])

    useEffect(() => {

        if (!challenge?._id) return;
        fetch(`https://eco-track-app-server.vercel.app/challenges/join-challenge/${challenge._id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setJoining(data);
            })
            .catch(err => console.log(err));
    }, [challenge?._id, user])

    const handleJoinModalOpen = () => {
        joinModalRef.current.showModal()
    }

    const handleSubmitForTips = (e) => {
        e.preventDefault();

        const form = e.target;
        const authorName = form.authorName.value;
        const title = form.title.value;
        const content = form.content.value;
        const author = user ? user.email : '';
        const image = user ? user.photoURL : '';

        const tipsData = {
            title,
            content,
            category: challenge.category,
            author,
            authorName,
            image,
            upVotes: 0,
            createdAt: new Date().toISOString()
        };
       

        axios.post('https://eco-track-app-server.vercel.app/tips', tipsData)
            .then(res => {
                console.log(res);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://eco-track-app-server.vercel.app/challenges/${_id}`, {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    }
                })
                    .then(res => {
                        const data = res.data;
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            navigate("/challenges")
                        }
                       
                    })
                    .catch(error => {
                        console.log(error);
                    })


            }
        });

    }
    if (loading) return <Loading />;

    return (
        <div className="bg-gray-100">

            <div className="relative w-full h-[450px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/2199515129/video/poster-highlighting-tree-planting-movement-for-a-sustainable-future.mp4?s=mp4-640x640-is&k=20&c=pGL01g6d7vbPPTp0o_eCiBXqxHqa7yFG4-GoMZoYccs="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white flex items-center justify-center md:text-7xl text-5xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/20 animate__animated animate__fadeInLeft  font-extrabold">Challenge Details </h1>
                </div>
            </div>
            
            {/* details */}
            <MyContainer className="px-2 md:px-0 ">
                <h3 className='md:text-5xl text-3xl px-2 my-12 md:mt-24 md:mb-16  uppercase text-green-600 font-extrabold text-center'>Challenge Details </h3>

                <div className="border border-green-900 bg-white md:border-none  shadow-lg overflow-hidden backdrop-blur mt-24 flex flex-col h-full">

                    <div className="relative p-1">
                        <img
                            className="w-full h-96 object-cover"
                            src={challenge.imageUrl}
                            alt="event"
                        />

                        <span className="absolute bottom-1 left-1 bg-green-500 text-white text-sm font-semibold flex items-center gap-2 px-2 py-1 rounded-lg">
                            <FaUsers />
                            Current Participants : {challenge.participants}
                        </span>
                        <span className="absolute bottom-1 right-1 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-lg">
                            Category :  {challenge.category}
                        </span>
                    </div>

                    {/* card body */}
                    <div className="p-6 text-gray-900 flex-1 flex flex-col justify-between">
                        <div className="text-center">
                            <h2 className="text-3xl mt-2  font-bold text-gray-800">{challenge.title}</h2>

                            <div className="flex items-center border-gray-200 border-b-2 opacity-90 justify-center py-2 mb-4 space-x-2">
                                <FaRecycle className="text-green-500" />
                                <span >Impact: {challenge.impactMetric}</span>
                            </div>

                            <p className="text-gray-700  mb-8">{challenge.description}</p>
                        </div>

                        <div className="flex justify-between items-center p-4  mt-2">
                            <div className="">
                                <h3 className="font-bold text-xl text-gray-800 mb-1">Target</h3>
                                <p className="text-gray-600 font-semibold">{challenge.target}</p>
                            </div>
                            <div className="">
                                <h3 className="font-bold text-xl text-gray-800 mb-1">Duration</h3>
                                <p className="text-gray-600 font-semibold">Days : {challenge.duration}</p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-500 border-gray-300 border p-4 mt-auto">

                            <div className="">
                                <p className="flex items-center gap-1 pb-2">
                                    <FiClock />
                                    Created At :{challenge.createdAt}
                                </p>
                                <p className="flex items-center gap-1">
                                    <FiClock />
                                    UpdatedAt :{challenge.updatedAt}
                                </p>
                            </div>

                            <div className="">
                                <p className="flex items-center gap-2 pb-2">
                                    <FiClock />
                                    Started On :{challenge.startDate}
                                </p>
                                <p className="flex items-center gap-2">
                                    <FiClock />
                                    EndDate : {challenge.endDate}
                                </p>
                            </div>
                        </div>


                        {/* Button */}
                        <div className="flex justify-between items-center mt-8 ">
                            <div>
                                <button
                                    onClick={handleJoinModalOpen}
                                    className="button px-6 w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full  shadow-lg hover:scale-[1.02] transition transform duration-300">
                                    Join
                                </button>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* update button */}
                                {
                                    user?.email == challenge.
                                        createdBy ? <button
                                            className="button px-6 w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full  shadow-lg hover:scale-[1.02] transition transform duration-300"
                                        >
                                        <Link to={`/updateChallenge/${challenge._id}`}>
                                            Update
                                        </Link>
                                    </button>

                                        : " "
                                }

                                {/* Delete button */}
                                {
                                    user?.email == challenge.
                                        createdBy ?
                                        <button
                                            onClick={() => handleDelete(challenge._id)}
                                            className="button px-6 w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full  shadow-lg hover:scale-[1.02] transition transform duration-300">
                                            Delete
                                        </button>

                                        : " "
                                }
                            </div>
                        </div>
                    </div>

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
                                setRefetch={setRefetch}
                            ></JoinChallenge>
                        </div>
                    </dialog>

                </div>
            </MyContainer>

            {/* Give me your tips and ideas */}
            <MyContainer className="my-40 ">
                <div className="hero bg-base-200 min-h-screen">
                    <div className=" flex-col lg:flex-row-reverse">
                        <div className="text-center p-4 lg:text-left">
                            <h1 className="text-5xl font-bold">Write Down Your Tips And Ideas</h1>
                            <p className="py-6">
                                Share your eco-friendly ideas to inspire meaningful action and help others make sustainable choices. When we exchange knowledge, small changes grow into powerful movements. Your creativity can spark real environmental impact, support a greener community, and motivate people everywhere to protect the planet for future generations.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full">
                            <form onSubmit={handleSubmitForTips}
                                className="card-body">
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
                                    <input
                                        type="text"
                                        name="authorName"
                                        className="input"
                                        placeholder="author name" />

                                    {/* title */}
                                    <label className="label text-lg font-semibold">Content Title :</label>
                                    <input type="text"
                                        className="input"
                                        name="title"
                                        placeholder="content title" />
                                    <div />

                                    {/* Content */}
                                    <label className="label text-lg font-semibold">Content :</label>
                                    <textarea
                                        className="textarea w-full h-24 "
                                        name="content"
                                        type="text"
                                        placeholder="write your content"></textarea>

                                    <button
                                        type="submit"
                                        className="btn btn-primary text-lg mt-4 ">Share Your Content</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </MyContainer>

            {/* total joining people this challenge */}
            <MyContainer>
                <h3 className='text-4xl border-b-2 font-extrabold text-gray-800 px-2 py-12 md:mt-24 md:mb-16'>Total Joining People In This Challenge : {joining.length}</h3>

                <div className="overflow-x-auto bg-green-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="hidden md:table-cell">SL No.</th>
                                <th>Participant Name</th>
                                <th>Status</th>
                                <th >Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                joining.map((join, index) => <tr key={join._id}>
                                    <th className="hidden md:table-cell">{index + 1} </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="">
                                                <div className="mask hidden md:table-cell mask-squircle h-12 w-12">
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
                                    <td className="">
                                        {join.status === "Ongoing" ?
                                            <div className="badge badge-warning">{join.status}</div>
                                            :
                                            <div className="badge badge-success">{join.status}</div>

                                        }

                                    </td>
                                    <td >{join.progress || 0}%</td>
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



