import { useContext, createContext, useState, useEffect } from "react";
const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const handleSignInUser = (info) => {
        console.log(process.env.REACT_APP_MANAGER_USER);
        if (info.userId === process.env.REACT_APP_MANAGER_USER && info.pw === process.env.REACT_APP_MANAGER_PW){
            setUser({manager: true});
            console.log("Manager login fired");
        }
        else{
            console.log("Not manager login");
        }
    }

    return(
        <AuthContext.Provider value={{ user, setUser, handleSignInUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}