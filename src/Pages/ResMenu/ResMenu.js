import useRestaurantMenu from "../../../hooks/useRestaurantMenu";
import ShimmerUI from "../../components/shimmer";
import { Link, useNavigate, useParams } from "react-router-dom";
import RestaurantCategory from "./restaurantCategory";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IMAGE_URL } from "../../../utils/constants";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import CouponTimer from "../../components/CouponTimer";

const ResMenu = () => {
  const navigate = useNavigate();
  const { resId } = useParams();
  const [veg, setVeg] = useState(true);
  const [nonVeg, setNonVeg] = useState(true);
  const [bestseller, setBestseller] = useState(false);
  // const [categoriesCopy, setCategoriesCopy] = useState([]);
  const resData = useRestaurantMenu(resId);
  const dealsPerPage = 2;
  const scrollBy = 1;
  const [startIndex, setStartIndex] = useState(0);
  let couponList = [];
  const [showIndex, setShowIndex] = useState(null);
  let dealsData =
    resData?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];
  const categories =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // Define handleSearchClick function here inside the component body
  const handleSearchClick = () => {
    navigate("/search", { state: { categories: categories, resId: resId } });
  };
  // Handler for the next button
  const handleNext = () => {
    if (startIndex + scrollBy < whatsOnMind.length) {
      setStartIndex(startIndex + scrollBy);
    }
  };

  // Handler for the previous button
  const handlePrevious = () => {
    if (startIndex - scrollBy >= 0) {
      setStartIndex(startIndex - scrollBy);
    }
  };


  const restaurantDetail = resData?.cards[2]?.card?.card?.info;

  couponList = dealsData.slice(startIndex, startIndex + dealsPerPage);
  if (resData === null) {
    return <ShimmerUI />;
  }

  return (
    <div className="mx-auto flex justify-center flex flex-col w-full">
      <div className="menu w-1/2  flex flex-col gap-6 mx-auto  mt-[20px]">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white align-text-top">
          {restaurantDetail?.name}
        </h5>
        {/* card */}
        <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex-col justify-between  w-full">
            <span className="p-1 rounded-xl text-white text-xs align-middle bg-green-700 self-center">
              <FaStar size={11} className="inline pb-0.5 relative" />
            </span>{" "}
            <b>
              {restaurantDetail?.avgRatingString} (
              {restaurantDetail?.totalRatingsString}) •{" "}
              {restaurantDetail?.costForTwoMessage}&nbsp;
            </b>
          </div>

          <div className="flex-col justify-between w-full pb-3">
            <a className="p-1 rounded-xl text-orange-600 text-sm underline font-bold">
              {restaurantDetail.labels[2]?.message}
            </a>
          </div>

          <div className="flex flex-row w-full">
            <div className="flex flex-col w-10">
              <div className="w-2 h-2 bg-gray-300 radius-2 rounded-lg bottom-0 m-0"></div>
              <div className="w-[1px] h-7 bg-gray-300 radius-0 bottom-0 m-0 ml-[3px]"></div>
              <div className="w-2 h-2 bg-gray-300 radius-2 rounded-lg bottom-0 m-0"></div>
            </div>

            <div className="flex flex-col w-full align-top">
              <div className="-mt-1 pb-2">
                <span className="text-black text-sm font-bold pr-4">
                  Outlet
                </span>
                <span className="text-gray-500 text-sm">
                  {restaurantDetail?.areaName}
                </span>
              </div>
              <div className="text-black text-sm font-bold pr-4">
                {" "}
                {restaurantDetail?.sla?.slaString.toLowerCase()}{" "}
              </div>
            </div>
          </div>
        </div>
        {/* Deals */}
        {dealsData && (
          <div id="deals">
            <div className="w-full py-0 flex items-center">
              <div className="w-4/5">
                <h5 className="mb-2 text-2xl py-1 font-bold tracking-tight text-gray-900 dark:text-white">
                  Deals for you
                </h5>
              </div>
              {/* buttons */}

              <div className="buttons w-1/5 flex justify-end">
                <button
                  disabled={startIndex <= 0}
                  type="button"
                  onClick={handlePrevious}
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
                  disabled={startIndex + dealsPerPage >= dealsData.length}
                  type="button"
                  onClick={handleNext}
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
            <div className="flex gap-5 mx-auto my-5 ">
              {couponList.map((e) => (
                <div className="border rounded-md w-full h-20 flex flex-row items-center p-4 gap-2">
                  <img
                    src={IMAGE_URL + e.info.offerLogo}
                    className="h-16 w-auto object-contain flex-shrink-0" alt={e.info.header}
                  ></img>
                  <div className="flex flex-col justify-center">
                    <div className="font-bold">{e.info.header}</div>
                    <div className="font-normal text-sm text-gray-500"><CouponTimer expirationTime={e.info.expirationTime} > </CouponTimer></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Menu */}

        <div className="flex justify-center align-middle text-gray-400">
          <MdOutlineHorizontalRule /> <ImSpoonKnife />{" "}
          <span className="px-2"> MENU</span> <ImSpoonKnife />{" "}
          <MdOutlineHorizontalRule />
        </div>

        {/* Search menu */}
        <div className="bg-gray-200 w-full rounded-3xl flex flex-row p-2  justify-center align-middle">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full pl-3 pr-2 py-2 bg-transparent placeholder:text-gray-600 text-gray-600 text-sm border border-slate-200 transition duration-300 ease focus:outline-none focus:border-slate-200 hover:border-slate-200"
              placeholder="Search for dishes" onClick={handleSearchClick}
            />
            <IoSearchSharp className="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600" />
          </div>
        </div>

        {/* Toggle filter */}
        <div className="p-1 grid grid-cols-3 gap-2 w-2/5">

          {/* veg chip */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow flex justify-center items-center p-1">
            <div className="relative ">
              <input
                checked={veg}
                onChange={() => setVeg(!veg)}
                id="switch-component-veg"
                type="checkbox"
                className="peer appearance-none w-11 h-4 bg-slate-100 rounded-full checked:bg-green-600 cursor-pointer transition-colors duration-300"
              />
              <label
                for="switch-component-veg"
                className="absolute top-0 left-0 w-5 h-5 bg-white rounded-md border border-green-800 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-green-800 cursor-pointer flex items-center justify-center"
              >
                <div className="h-3 w-3 bg-green-600 rounded-3xl"></div>
              </label>
            </div>
          </div>

          {/* non veg chip */}
          <div className="p-1 bg-white border border-gray-200 rounded-3xl shadow flex justify-center items-center">
            <div className="relative">
              <input
                checked={nonVeg}
                onChange={() => setNonVeg(!nonVeg)}
                id="switch-component-non-veg"
                type="checkbox"
                className="peer appearance-none w-11 h-4 bg-slate-100 rounded-full checked:bg-red-600 cursor-pointer transition-colors duration-300"
              />
              <label
                for="switch-component-non-veg"
                className="absolute top-0 left-0 w-5 h-5 bg-white rounded-md border border-red-800 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-red-800 cursor-pointer flex items-center justify-center"
              >
                <div className="h-3 w-3 bg-red-600 rounded-3xl"></div>
              </label>
            </div>
          </div>

          {/* bestseller */}
          {/* <button className="p-2 bg-white border border-gray-200 rounded-3xl shadow flex justify-center align-middle text-sm">
            Bestseller
          </button> */}
        </div>
        <hr className="m-0"></hr>

        {/* Top picks */}
        <div></div>
        {/* card menu */}
        <div className="w-full">
          <div className="justify-start flex-col font-semibold text-lg text-gray-700">
            <div>
              <span>{resData?.cards[0]?.card?.card?.info?.name}</span>
            </div>
            <div></div>
          </div>
        </div>

        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category}
            veg={veg}
            nonVeg={nonVeg}
            bestseller={bestseller}
            showItems={index === showIndex}
            restaurantDetail={restaurantDetail}
            setShowIndex={() => {
              return setShowIndex(index);
            }}
          />
        ))}
      </div>
        
      <div className="mx-auto w-1/2 mt-5 p-5 border-gray-400 dark:bg-gray-400 ">
      <label className="mb-2 text-sm tracking-tight text-gray-600 dark:text-white align-text-top">FSSAI  License No. xxxxxxxxxxxx</label>
      <hr className="my-4"></hr>
      <h5 className="mb-2 text-md font-bold tracking-tight text-gray-600 dark:text-white align-text-top">
          {restaurantDetail?.name}
        </h5>
    </div>
      
    </div>
  );
};

export default ResMenu;
