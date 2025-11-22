import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword, getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    // Create user:
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // signIn:
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signout:
    const userSignOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        userSignIn,
        userSignOut,

    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;