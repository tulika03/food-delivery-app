import { useState, useEffect } from 'react';
import {BASE_URL} from "../utils/constants";

const useRestaurantList = () => {
    // fetch data
    const [resInfo, setResInfo] = useState([]);
    const [originalCopy, setOriginalCopy] = useState([]);
    const [whatsOnMind, setWhatsOnMind] = useState([]);
    const [bestCities, setBestCities] = useState([]);
    const [bestCuisines, setBestCuisines] = useState([]);
    const [nearByRestaurants, setNearByRestaurants] = useState([]);
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(BASE_URL +"ea853cdcc7cb0645eff5");
        const json = await data.json();
        console.log(json)
        console.log("==========>", json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setResInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOriginalCopy(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setWhatsOnMind(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        setBestCities(json?.data?.cards[6]?.card)
        setBestCuisines(json?.data?.cards[7]?.card)
        setNearByRestaurants(json?.data?.cards[8]?.card)
    }

    return {resInfo, originalCopy, whatsOnMind, bestCities, bestCuisines, nearByRestaurants};
}

export default useRestaurantList;