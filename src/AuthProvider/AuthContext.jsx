// import React, { createContext, useContext, useEffect, useState } from "react";
// /* eslint-disable react-refresh/only-export-components */
// import { auth, googleProvider } from "../FireBase/firebase.config";
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//     onAuthStateChanged,
//     signInWithPopup,
//     updateProfile,
//     sendPasswordResetEmail
// } from "firebase/auth";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const unsub = onAuthStateChanged(auth, (u) => {
//             setUser(u);
//             setLoading(false);
//         });
//         return () => unsub();
//     }, []);

//     const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
//     const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
//     const logout = () => signOut(auth);
//     const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
//     const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile);
//     const resetPassword = (email) => sendPasswordResetEmail(auth, email);

//     const value = { user, loading, signup, login, logout, signInWithGoogle, updateUserProfile, resetPassword };

//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };



import React, { createContext, useContext, useEffect, useState } from "react";
/* eslint-disable react-refresh/only-export-components */
import { auth, googleProvider } from "../FireBase/firebase.config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    updateProfile,
    sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => {
            setUser(u);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

    // ✅ Fixed: Update profile + instant state update (Navbar auto refresh)
    const updateUserProfile = async (profile) => {
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, profile);

            // 🔹 update local user state instantly for live UI
            setUser({
                ...auth.currentUser,
                ...profile,
            });
        }
    };

    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    const value = {
        user,
        loading,
        signup,
        login,
        logout,
        signInWithGoogle,
        updateUserProfile,
        resetPassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
