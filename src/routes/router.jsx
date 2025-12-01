import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Challenges from "../Pages/Challenges/Challenges";
import MyActivities from "../Pages/MyActivities/MyActivities";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import ForgotPassword from "../Pages/AuthPages/ForgotPassword";
import GoogleLogIn from "../Pages/AuthPages/GoogleLogIn";
import AddNewChallenge from "../Pages/Challenges/AddNewChallenge";
import ChallengeDetails from "../Pages/Challenges/ChallengeDetails";
import UpdateChallenge from "../Pages/Challenges/UpdateChallenge";
import JoinChallenge from "../Pages/Challenges/JoinChallenge";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Tips from "../Pages/TipsAndEvent/Tips";
import AllEvent from "../Pages/TipsAndEvent/AllEvent";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayouts,
        children: [
            {
                index: true,
                element:<Home/>
            },
            {
                path: "/challenges",
                Component: Challenges,
                loader: () => fetch('http://localhost:3000/challenges')
            },
            {
                path: "/addNewChallenge",
                element: <AddNewChallenge />
            },
            {
                path: "/challengeDetails/:id",
                element: (
                    <PrivateRoute>
                        <ChallengeDetails />
                    </PrivateRoute>
                ),
                // loader: ({ params }) => fetch(`http://localhost:3000/challenges/${params.id}`,{
                //     headers:{
                //         authorization:"hello"
                //     }
                // })
            },
            {
                path: "/updateChallenge/:id",
                element: <UpdateChallenge />,
                // loader: ({ params }) => fetch(`http://localhost:3000/challenges/${params.id}`)
            },
            {
                path: "/joinChallenge/:id",
                element: <JoinChallenge />
            },
            {
                path: "/my-activities",
                element: <MyActivities />
            },
            {
                path: "/tips",
                element: <Tips />,
                loader: () => fetch('http://localhost:3000/tips')
            },
            {
                path: "/allEvent",
                element: <AllEvent></AllEvent>,
                loader: () => fetch('http://localhost:3000/events')
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "/googleLogin",
                element: <GoogleLogIn />
            }
        ]
    },
]);

export default router;