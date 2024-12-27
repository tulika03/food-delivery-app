import {createContext} from "react"

const UserContext = createContext({
    "loggedInUser": "",
    "isLoggedIn": false,
    setIsLoggedIn: () => {},
    setLoggedInUser: () => {},
});

export default UserContext;