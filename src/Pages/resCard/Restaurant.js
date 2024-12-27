import { FaStar } from "react-icons/fa";


const RestaurantCard = (props) => {
  let { resData, height } = props;
  return (
    <div className="rounded-lg hover:shadow-xl hover:border-1">
      <div className="relative">
        <img
          className={`w-full ${height} rounded-lg overflow-hidden`}
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.info.cloudinaryImageId}
          alt="cuisines"
        ></img>
        {/* to be implemented */}
        <div className="absolute bottom-5 left-0 right-0 h-20 text-white w-full grid-cols-1 pb-2 text-left content-end bg-gradient-to-b from-transparent to-gray-950">
          <div className="p-3 font-bold">
            {resData?.info.aggregatedDiscountInfoV3?.header} {resData?.info.aggregatedDiscountInfoV3?.subHeader}
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="font-bold text-gray-800">
        {resData?.info.name.length > 31 ? resData?.info.name.slice(0, 31) + "..." : resData?.info.name }      
        </div>

        <div className="flex-col justify-between">
          <span className="p-1 rounded-xl text-white text-xs align-middle bg-green-700 self-center">
            <FaStar size={11} className="inline pb-0.5 relative" />    
          </span> {resData?.info?.avgRatingString}  • {resData?.info?.sla?.slaString} &nbsp;
         </div>
        <div className="flex">
          <span className="mt-1 text-gray-500 dark:text-gray-400 text-sm" >
            { resData?.info?.cuisines.join(", ") }
          </span>
        </div>

        <div className="text-gray-500 flex text-sm pb-2">
          <div className="w-full">
            <span> {resData?.info.areaName}</span>
          </div>           
        </div>

      </div>
    </div>
  );
};

// higher order component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
       <label>Promoted</label>
      <RestaurantCard {...props}></RestaurantCard>
      </div>

    )
  }
}

export default RestaurantCard;

