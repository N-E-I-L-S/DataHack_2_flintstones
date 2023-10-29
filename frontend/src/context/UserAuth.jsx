import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase_config'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
} from "firebase/auth";

const UserContext = createContext();
export function UserProvider({ children }) {

    const [user, setUser] = useState("");
    const [usertype, setUserType] = useState("")

    function login(uname, pwd) {
        console.log(uname);
        return signInWithEmailAndPassword(auth, uname, pwd)
    }
    function signup(uname, pwd) {
        console.log(uname)
        return createUserWithEmailAndPassword(auth, uname, pwd)
    }

    function logout(){
        setUser(null);
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, login, signup, logout, usertype, setUserType }}>
            {children}
        </UserContext.Provider>
    )
}
function UserAuth() {
    return useContext(UserContext)
}


export default UserAuth