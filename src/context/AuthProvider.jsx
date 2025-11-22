import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword, getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const googleProvider = new GoogleAuthProvider();

    // Create user:
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // signIn:
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // google signin:
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
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
        googleSignIn,
        userSignOut,

    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;