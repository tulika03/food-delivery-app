import { IMAGE_URL } from "../../../utils/constants";
import { useState, useContext, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "../resCard/Restaurant";
import { Link } from "react-router-dom";
const TopRestaurant = (props, { val = "default" }) => {
  const dishesPerPage = 5;
  const scrollBy = 2
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const [startIndex, setStartIndex] = useState(0);

  console.log("check top restaurants: ", props);
  let { topRestaurants } = props;
  console.log("topRestaurants: ", topRestaurants)
  let topRestaurantsList = [];

    // Handler for the next button
    const handleNext = () => {
      if (startIndex + scrollBy < topRestaurants.length) {
        setStartIndex(startIndex + scrollBy);
      }
    };
  
    // Handler for the previous button
    const handlePrevious = () => {
      if (startIndex - scrollBy >= 0) {
        setStartIndex(startIndex - scrollBy);
      }
    };

  topRestaurantsList = topRestaurants.slice(
    startIndex,
    startIndex + dishesPerPage
  );
  console.log(topRestaurantsList);

  return (
    <div className=" bg-white border-white-200 rounded-lg  dark:bg-gray-100 dark:border-gray-100">
      <div className="w-full py-1 flex items-center">
        <div className="w-4/5">
          <h5 className="mb-2 text-2xl py-1 font-bold tracking-tight text-gray-900 dark:text-white">
              Top restaurant chains in Delhi
          </h5>
        </div>
        {/* buttons */}

        <div className="buttons w-1/5 flex justify-end p-4">
        <button
        disabled={startIndex <= 0}
        type="button" onClick={handlePrevious}
        className="text-black bg-gray-200 focus:ring-4 font-medium rounded-full text-sm p-2.5 inline-flex me-2  justify-self-end disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400"
      >
        <svg
          className="w-4 h-4 align-middle"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0L5 9m-4-4L5 1"
      />
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
      {/* Next button */}
      <button
        disabled={(startIndex + dishesPerPage) >= topRestaurants.length}
        type="button" onClick={handleNext}
        className="text-black bg-gray-200 focus:ring-4 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8 ">
        {topRestaurantsList.map((restaurant) => (
          <Link
            className="restaurant"
            to={"/restaurants/" + restaurant.info?.id}
            key={restaurant.info.id}
          >
            {
              /* If a restaurant is promoted add promoted label to it */
              restaurant.promoted ? (
                <RestaurantCardPromoted resData={restaurant} height="h-45" />
              ) : (
                <RestaurantCard resData={restaurant} height="h-45"></RestaurantCard>
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurant;
