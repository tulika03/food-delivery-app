import { IMAGE_URL } from "../../../utils/constants";
import { useState, useContext, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "../resCard/Restaurant";
import { Link } from "react-router-dom";
const RestaurantsChain = (props, { val = "default" }) => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  let { restaurantsList } = props;
  return (
    <>
      <h5 className="mb-2 text-2xl py-2 font-bold tracking-tight text-gray-900 dark:text-white">
        Restaurants with online food delivery in Delhi
      </h5>
      <div className="grid grid-cols-4 gap-8 ">
        {restaurantsList.map((restaurant) => (
          <Link
            className="restaurant"
            to={"/restaurants/" + restaurant.info?.id}
            key={restaurant.info.id}
          >
            {
              /* If a restaurant is promoted add promoted label to it */
              restaurant.promoted ? (
                <RestaurantCardPromoted resData={restaurant} height="h64" />
              ) : (
                <RestaurantCard
                  resData={restaurant}
                  height="h-64"
                ></RestaurantCard>
              )
            }
          </Link>
        ))}
      </div>
    </>
  );
};

export default RestaurantsChain;
