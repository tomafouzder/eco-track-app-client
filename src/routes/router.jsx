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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/challenges",
                element: <Challenges />,
            },
            {
                path: "/addNewChallenge",
                element: (
                    <PrivateRoute>
                        <AddNewChallenge />
                    </PrivateRoute>
                ),
            },
            {
                path: "/challengeDetails/:id",
                element: (
                    <PrivateRoute>
                        <ChallengeDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/updateChallenge/:id",
                element: (
                    <PrivateRoute>
                        <UpdateChallenge />
                    </PrivateRoute>
                ),
            },
            {
                path: "/joinChallenge/:id",
                element: (
                    <PrivateRoute>
                        <JoinChallenge />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-activities",
                element: (
                    <PrivateRoute>
                        <MyActivities />
                    </PrivateRoute>
                ),
            },
            {
                path: "/tips",
                element: <Tips />,
            },
            {
                path: "/allEvent",
                element: <AllEvent></AllEvent>,
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