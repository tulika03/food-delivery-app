import { useEffect, useState } from "react";
import {GITHUB_URL} from "../utils/constants";
const useUsersList = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetchUsersList();
    }, []);
  
    const fetchUsersList = async ()  =>{
      console.info("parent componentDidMount")
      const data = await fetch(GITHUB_URL +"users/tulika03");
      const usersList = await  data.json();
      console.log(usersList);
      setUserInfo(usersList);
    }

    return userInfo;
}

export default useUsersList;