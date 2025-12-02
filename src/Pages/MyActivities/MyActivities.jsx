import React, { useContext, useEffect, useState } from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import MyChallenges from './MyChallenges';



const MyActivities = () => {

    const { user } = useContext(AuthContext);
    const [joins, setJoins] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/join-challenge?email=${user.email}`,{
                headers: {
                authorization: `Bearer ${user.accessToken}`
            }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setJoins(data)
                })
        }
    }, [user])


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

                axios.delete(`http://localhost:3000/join-challenge/${_id}`)
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
                    <h1 className="text-white flex items-center justify-center md:text-5xl text-4xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/40 animate__animated animate__fadeInLeft  animate__delay-2s font-bold">My Activities</h1>
                </div>
            </div>

            <MyContainer>
                <MyChallenges/>
            </MyContainer>

            <MyContainer>
                <h3 className='text-7xl text-center my-24'>My Activities : {joins.length}</h3>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Participant Name</th>
                                <th>Status</th>
                                <th>Progress</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                joins.map((join, index) => <tr key={join._id}>
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
                                        {join.status === "Ongoing" ?
                                            <div className="badge badge-warning">{join.status}</div>
                                            :
                                            <div className="badge badge-success">{join.status}</div>

                                        }

                                    </td>
                                    <td>{join.progress}</td>
                                    <th>
                                        <button
                                            onClick={() => handleRemoveJoin(join._id)}
                                            className="btn btn-outline btn-xs">Remove</button>
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

export default MyActivities;

