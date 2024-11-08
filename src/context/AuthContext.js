import { useContext, createContext, useState, useEffect } from "react";
const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const scheduler_server_link = "https://jjscheduleserver.onrender.com";

    const handleSignInUser = (info) => {
        if (info.userId === process.env.REACT_APP_MANAGER_USER && info.pw === process.env.REACT_APP_MANAGER_PW){
            setUser({manager: true});
            console.log("Manager login fired");
        }
        else{
            console.log("Not manager login");
        }
    }

    const handleDeleteShift = () => {
        console.log("delete shift fired");
    }

    return(
        <AuthContext.Provider value={{ user, setUser, handleSignInUser, handleDeleteShift, scheduler_server_link }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}