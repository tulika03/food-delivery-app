import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const StickyNav = () => {
  const navigate = useNavigate();
  const  {pathname} = useLocation();
  console.log("path name: ", pathname);
  let nav = "";

  const cartData = useSelector((store) => {
    return store.cart;
  });

  if(!pathname.includes("/restaurants/"))
  return <></>

  if (cartData.items.length) {
    nav = (
      <div className="grid h-10 m-0 grid-cols-2 bg-green-600 p-3 w-full gap-80">
         <div className="text-white justify-start items-start">
          <span>
            {cartData.items.length}{cartData.items.length > 1 ? " items" : " item"} added
          </span>
        </div>

        <button
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex justify-end text-white" onClick={() => {navigate("/cart")}}
        >
            <b>VIEW CART</b> &nbsp;&nbsp;

            <svg fill="#FFFFFF" className="h-5 w-5"version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="73px" height="73px" viewBox="0 0 902.86 902.86"  stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
        </button>

      </div>
    );
  }

  return (
    <div className="fixed bottom-0 z-50 w-auto -translate-x-1/2 left-1/2 p-2">
      <div>
        <div
          className="px-16 grid max-w-xs grid-cols-1 gap-1 p-1 mx-auto my-2 rounded-xl dark:bg-gray-600 mt-1"
          role="group"
        >
          <button
            type="button"
            className="px-2 py-3 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg"
            onClick={() => {
              navigate("/home");
            }}
          >
            Browse Menu
          </button>
        </div>
      </div>
      {nav}
    </div>

  );
};

export default StickyNav;
