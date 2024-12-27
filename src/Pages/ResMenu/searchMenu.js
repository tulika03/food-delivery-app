import { Link, useLocation, useNavigate } from "react-router-dom";
import {useState} from "react"
import ItemList from "./ItemList";
import { IoSearchSharp, IoArrowBack } from "react-icons/io5";

const SearchMenu = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('') 
  const categories = location.state.categories;
  const [filteredData, setFilteredData] = useState([]);
  const dishes = categories.map((category) =>  category.card.card.itemCards).flat()
    .reduce((acc, item) => {
    // Check if the item with the given ID already exists in the accumulator
    if (!acc.some(dish => dish?.card?.info?.id === item?.card?.info?.id)) {
      acc.push(item); // If not, add the item to the accumulator
    }
    return acc;
  }, []);;
  const resId = location.state.resId;
  const navigate = useNavigate();
  const navigateBackToRestaurant = () => {
     navigate("/restaurants/" + resId);
  }

  const handleDishSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    if(event.target.value === "") 
      return setFilteredData([]);
    let filteredDishes = dishes.filter((dish) => dish.card.info.name.toLowerCase().includes(searchQuery));
    console.log("filtered dishes", searchQuery, filteredDishes);
    setFilteredData(filteredDishes);
  };

  
  return (
    <div className="mx-auto flex justify-center flex-col">
      <div className="w-1/2 flex flex-col gap-6 mx-auto  mt-[20px]">
        <div className="relative w-full gap-2 py-4">
        <IoArrowBack className="absolute w-5 h-5 top-1/2 left-2.5 transform -translate-y-1/2 text-slate-600" 
          onClick={navigateBackToRestaurant} />
        <input
            type="text"
            className="w-full pl-10 pr-10 py-3 bg-transparent text-gray-600 text-sm border-b"
            placeholder="Search for dishes"
            value={searchQuery}
            onChange={handleDishSearch}
          />
          <IoSearchSharp className="absolute w-5 h-5 top-1/2 right-2.5 transform -translate-y-1/2 text-slate-600" />
        </div>
      </div>

      <div id="body-1" className="w-1/2 flex flex-col gap-6 mx-auto">
        <div className="pt-25">
          {filteredData.map((item) => (
            <ItemList item={item} key={item?.card?.info?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
