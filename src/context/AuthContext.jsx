import { useContext, createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/index"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    const [user, setUser ] = useState({})
    const navigate = useNavigate()

    const googleSingIn = ()=>{

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const logOut = ()=>{
        signOut(auth)
        navigate("/")
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })

        return()=>{
            unsubscribe()
        }

    },[])


    return(
        <AuthContext.Provider value={{
            googleSingIn,
            logOut,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(AuthContext)
}