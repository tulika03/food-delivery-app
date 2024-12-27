import { useState, useEffect } from 'react';
import {BASE_URL, MENU_URL} from "../utils/constants"
const useRestaurantMenu = (resId) => {
    // fetch data

    console.log(resId)
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu(resId);
    }, []);
    
    const fetchMenu = async (resId) => {
        const data = await fetch(MENU_URL +resId, {
            headers: {
                'x-cors-api-key': 'temp_359d13fc962ba8718c12b784784ab953'
            }
        });
        const json = await data.json();
        setResInfo(json?.data)
    }
    return resInfo;
}

export default useRestaurantMenu;