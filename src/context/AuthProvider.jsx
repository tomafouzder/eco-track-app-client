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
    const [loading, setLoading]=useState(true)
   

    const googleProvider = new GoogleAuthProvider();

    // Create user:
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // signIn:
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // google signin:
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }


    // signout:
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        user,
        loading,
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