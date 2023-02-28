import { useContext, createContext, useState, useEffect } from "react";
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../services/index"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    const [user, setUser ] = useState({})
    const navigate = useNavigate()

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        
       }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


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
            signIn,
            createUser,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(AuthContext)
}