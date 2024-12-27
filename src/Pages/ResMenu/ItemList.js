import { addItem, removeItem, addRestaurantName, addLocation } from "../../../store/slices/cartSlice";
import { setAlert, setErrorMessage } from "../../../store/slices/toastSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { FaDrumstickBite } from "react-icons/fa6";

const ItemList = (props) => {
  const item = props?.item?.card?.info;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const handleAddItem = (item) => {
    dispatch(addRestaurantName(props.restaurantDetail.name));
    dispatch(addLocation(props.restaurantDetail.areaName));
    setQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(addItem(item));
    dispatch(setErrorMessage("Item added to cart"));
    dispatch(setAlert(true));
    
    setTimeout(() => {
      dispatch(setAlert(false));
    }, 3000);
  };

  const handleRemoveItem = (item) => {
    // dispatch an action
    setQuantity((prevQuantity) => prevQuantity - 1);
    dispatch(removeItem(item));
    dispatch(setErrorMessage("Item removed from cart"));
    dispatch(setAlert(true));
    setTimeout(() => {
      dispatch(setAlert(false));
    }, 3000);
  };

  return (
    <div>
          <div className="flex flex-row p-2">
      <div className="flex flex-col w-5/6 gap-1">
        
        <span className="text-lg font-sans tracking-normal font-medium text-black">
        {item?.isVeg ? <PiPlantFill className="text-green-600"/> : < FaDrumstickBite className="text-red-900" />} {item?.name} 
        </span>
        <span className="text-md font-sans tracking-normal font-medium text-black">
          ₹
          {item?.price
            ? item.price / 100
            : item.variantsV2.pricingModels[0].price / 100}
        </span>

        {item?.ratings?.aggregatedRating?.rating && (
          <div className="text-sm tracking-normal font-semibold flex flex-row">
            <MdOutlineStar className="mt-1  text-green-700" /> 
            <span className=" text-green-700">{item?.ratings?.aggregatedRating?.rating} </span>
            <span className="ml-1 text-black font-bold"> ({item?.ratings?.aggregatedRating?.ratingCountV2})
            </span>
          </div>
        )}

        <span className="text-xs font-sans tracking-normal font-medium text-gray-400 pt-2">
          {item?.description}
        </span>
      </div>
      <div className="border-box relative">
        <img
          alt="item image"
          className="rounded-md"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            item.imageId
          }
        ></img>
        {quantity == 0 ? (
          <div className="absolute button-box left-1/3 top-3/4">
            <button
              className="z-10 p-1  border-2 rounded-md  text-sm bg-white text-green-400"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
          </div>
        ) : (
          <div className="absolute left-1/4 top-3/4 button-box items-stretch .flex-no-wrap">
            <button
              className="z-10 p-2  border-2  text-sm bg-white text-black-400 .text-6xl disabled:bg-gray-400"
              disabled={quantity == 0}
              onClick={() => quantity > 0 && handleRemoveItem(item)}
            >
              -
            </button>
            <button className="z-10 p-2 border-2 text-sm bg-white text-green-600 .font-semibold">
              {quantity}
            </button>
            <button
              className="z-10 p-2 border-2 text-sm bg-white text-black-400 .text-6xl"
              onClick={() => handleAddItem(item)}
            >
              +
            </button>
          </div>
        )}
          
      </div>
      
    </div>
      <hr className="border-gray-300 m-1 py-4"></hr>
    </div>


  );
};

export default ItemList;
