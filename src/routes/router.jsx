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

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayouts,
        children: [
            {
                index: true,
                Component: Home
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
                element: <ChallengeDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/challenges/${params.id}`)
            },
            {
                path: "/updateChallenge/:id",
                element: <UpdateChallenge />,
                loader: ({ params }) => fetch(`http://localhost:3000/challenges/${params.id}`)
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