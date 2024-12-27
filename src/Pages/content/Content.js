import RestaurantCard, { withPromotedLabel } from "../resCard/Restaurant";
import ShimmerUI from "../../components/shimmer";
import TopRestaurant from "./TopRestaurant";
import useRestaurantList from "../../../hooks/useRestaurantList";
import WhatsOnMind from "./WhatsOnMind";
import RestaurantsChain from "./restaurantsChain";
import ShowMore from "./ShowMore";

const Content = () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const data = useRestaurantList();
  let restaurantsList = data.resInfo;
  console.log("data: ====> ", data);
  let { whatsOnMind, bestCities, bestCuisines, nearByRestaurants } = data;

  return (
    <div className=" mx-auto flex justify-center content w-3/4 max-w-full pt-3">
      {restaurantsList.length === 0 ? (
        <ShimmerUI></ShimmerUI>
      ) : (
        <div className="place-content-around">
          <div className="whats_on_your_mind">
            <WhatsOnMind whatsOnMind={whatsOnMind}></WhatsOnMind>
          </div>
          <hr className="m-4"></hr>
          <div>
            {/* For top restaurants in city */}
            <div className="top_restaurants">
              <TopRestaurant topRestaurants={restaurantsList}></TopRestaurant>
            </div>
            <hr className="m-6"></hr>
            {/* Restaurants chain */}
            <div className="res-container">              
              <RestaurantsChain restaurantsList={restaurantsList}> {" "} </RestaurantsChain>
            </div>
            <hr className="m-6"></hr>
            {/* Best cities list */}
            <div className="bottom-content">              
              <ShowMore bottomData={bestCities}> {" "} </ShowMore>
            </div>
            <hr className="m-6"></hr>
            <div className="bottom-content">              
              <ShowMore bottomData={bestCuisines}> {" "} </ShowMore>
            </div>
            <hr className="m-6"></hr>
            <div className="bottom-content pb-11">              
              <ShowMore bottomData={nearByRestaurants}> {" "} </ShowMore>
            </div>
            {/* <hr className="m-6 "></hr> */}
          </div>
          
         
        </div>
      )}
    </div>
  );
};

export default Content;
