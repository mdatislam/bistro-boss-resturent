import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const updateUser=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo})

    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

   useEffect(()=>{
    const unsubscribed=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('currentUser',currentUser)
            setLoading(false)

        })
    return ()=>{
        return unsubscribed()
    }
   },[])


    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;