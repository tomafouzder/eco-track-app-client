import React, { useContext, useEffect, useState } from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import MyChallenges from './MyChallenges';
import { AiOutlineClose } from 'react-icons/ai';
import Loading from '../../components/Loading/Loading';



const MyActivities = () => {

    const { user } = useContext(AuthContext);
    const [joins, setJoins] = useState([]);
    const [isOpen, setIsOpen] = useState(null);
    const [refetch, setRefetch] = useState(false)
   const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/join-challenge?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setJoins(data)
                    setLoading(false)
                })
        }
    }, [user, refetch])


    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const formData = {
            status: e.target.status.value,
            progress: e.target.progress.value,

        }

        axios.put(`http://localhost:3000/join-challenge/${isOpen._id}`, formData,
            {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
            .then(res => {
                Swal.fire({

                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
                setRefetch(!refetch)
            })
            .catch(error => {
                console.log(error);
            })
    };


    const handleRemoveJoin = (_id) => {
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

                axios.delete(`http://localhost:3000/join-challenge/${_id}`, {
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


                            const remainingData = joins.filter(join => join._id !== _id);
                            setJoins(remainingData)
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
        <div className='bg-gray-100 pb-24'>
            <div className="relative w-full h-[550px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/1268227434/video/young-female-gardener-making-a-hole-and-planting-a-vegetable-plant-in-the-garden.mp4?s=mp4-640x640-is&k=20&c=ha9onOGVSlZxmxG3ooIePgRM573aRq9nw9Mk_eUVbhI="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white flex items-center justify-center md:text-7xl text-5xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/20 animate__animated animate__fadeInLeft  font-extrabold">My Activities</h1>
                </div>
            </div>

            <MyContainer>
                <h1 className='md:text-5xl text-3xl px-2 py-24  uppercase text-green-600 font-extrabold text-center'>My Activities</h1>
                <h1 className='text-4xl border-b-2 font-extrabold text-gray-800  px-2 pb-12 md-0 md:mb-16 '>The Challenges I created :</h1>
                <MyChallenges />
            </MyContainer>

            <MyContainer>
                <h3 className='text-4xl border-b-2 font-extrabold text-gray-800 px-2 py-12 md:mt-24 md:mb-16'>Challenges I have participated in : {joins.length || 0}</h3>

                <div className="overflow-x-auto bg-green-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="hidden md:table-cell">SL No.</th>
                                <th >Participant Name</th>
                                <th className="hidden md:table-cell">Status</th>
                                <th >Progress</th>
                                <th>Update</th>
                                <th className="hidden md:table-cell">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                joins.map((join, index) => <tr key={join._id}>
                                    <th className="hidden md:table-cell">{index + 1} </th>
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
                                    <td className="hidden md:table-cell">
                                        {join.status === "Ongoing" ?
                                            <div className="badge badge-warning">{join.status}</div>
                                            :
                                            <div className="badge badge-success">{join.status}</div>

                                        }

                                    </td>
                                    <td >{join.progress}</td>
                                    <th>
                                        <button
                                            onClick={() => setIsOpen(join)}
                                            className="btn btn-outline btn-xs">Update</button>
                                    </th>
                                    <th className="hidden md:table-cell">
                                        <button
                                            onClick={() => handleRemoveJoin(join._id)}
                                            className="btn btn-outline btn-xs">Remove</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>

                    {isOpen && (
                        <div className="modal  modal-open">
                            <div className="modal-box relative">
                                {/* Close Icon */}
                                <button
                                    className="absolute top-3 right-3 text-gray-400 "
                                    onClick={() => setIsOpen(null)}
                                >
                                    <AiOutlineClose size={24} />
                                </button>


                                <div>
                                    <h2 className="text-3xl font-bold text-center ">
                                        Update Challenge
                                    </h2>

                                    <form
                                        onSubmit={handleUpdateSubmit}
                                        className="space-y-4">

                                        {/* status */}
                                        <div>
                                            <label className="block font-medium mb-1">Status</label>
                                            <select
                                                name='status'
                                                className="select select-bordered w-full">
                                                <option>Not Started</option>
                                                <option>Ongoing</option>
                                                <option>Finished</option>
                                            </select>
                                        </div>

                                        {/* progress */}
                                        <div>
                                            <label className="block font-medium mb-1">Progress (%)</label>
                                            <input
                                                name='progress'
                                                defaultValue={isOpen.progress}
                                                type="number"
                                                placeholder="0"
                                                className="input input-bordered w-full"
                                            />
                                        </div>


                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="btn btn-success w-full text-white"
                                        >
                                            Update Challenge
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    )}



                </div>
            </MyContainer>

        </div>
    );
};

export default MyActivities;

