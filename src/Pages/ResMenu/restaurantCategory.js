import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, veg, nonVeg, bestseller, showItems, setShowIndex, restaurantDetail}) => {
  const category = data?.card?.card;
  const [showData, setShowData] = useState(true);
  const handleClick = () => {
    setShowIndex();
    setShowData(!showData);
  };

  const filteredItems = category?.itemCards.filter((item) => {
    if(!veg && !nonVeg)
        return category?.itemCards;
    const  isVeg = veg && item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
    const isNonVeg = nonVeg && item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"

    return isVeg || isNonVeg;
  })
  return (
    <div id="accordion-open" data-accordion="close" className="w-full">
    <h2 id="accordion-open-heading-1" onClick={handleClick}>
      <button
        type="button"
        className="flex flex-row items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-1 shadow-md border-gray-200 rounded-md dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        data-accordion-target="#accordion-open-body-1"
        aria-expanded="true"
        aria-controls="accordion-open-body-1"
      >
        <span className="flex items-center font-bold text-black">
          {category?.title} ({filteredItems?.length})
        </span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>

    <div id="accordion-open-body-1" aria-labelledby="accordion-open-heading-1">
      {showItems && showData &&(<div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          {filteredItems.map((item) => (<ItemList item={item} key={item?.card?.info?.id} restaurantDetail={restaurantDetail} /> ))}
          
        </div>
      )}
    </div>
  </div>
  );
};

export default RestaurantCategory;
