import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, addItem } from "../../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const restaurantName = useSelector((store) => {
    return store.cart.restaurantName;
  });

  const location = useSelector((store) => {
    return store.cart.location;

  });

 
  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

    // Update the state with the new total
    setTotal(newTotal);
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  }

  if (!cartItems.length) {
    return (
      <div className="flex flex-col w-full m-auto justify-center max-w-xl p-11 gap-6 my-11 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Cart is Empty
          </h5>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              navigate("/home");
            }}
          >
            Menu
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row w-1/2 m-auto gap-9 bg-white">
      <div className="flex flex-col w-full m-auto max-w-xl p-11 gap-6 my-11 bg-white border border-gray-200 rounded-sm shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Cart items
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          onClick={handleClearCart}
        >
          Clear cart
        </a>
      </div>
      
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {cartItems.map((item, index) => (
            <li className="lg:py-4" key={item.id}>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-50 h-50 rounded-full"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                      item.imageId
                    }
                    alt="Neil image"
                  ></img>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {item.description}
                  </p>
                  <div className="button-box flex justify-between left-1/4 top-3/4 pt-3 pl-1 flex-row">
                  <div>
                  <button
                      className="z-10 p-2  border-2  text-sm bg-white text-black-400 .text-6xl disabled:bg-gray-400"
                      onClick={() => item.quantity > 0 && handleRemoveItem(item)}
                    >
                      -
                    </button>
                    <button className="z-10 p-2 border-2 text-sm bg-white text-green-600 .font-semibold" >
                      {item.quantity}
                    </button>
                    <button
                      className="z-10 p-2 border-2 text-sm bg-white text-black-400 .text-6xl"
                      onClick={() => handleAddItem(item)}
                    >
                      +
                    </button>
                  </div>
  
                   <div className="self-center">₹{item.totalPrice}</div> 
                </div>


                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>


    <div className=" w-full m-auto max-w-xl p-11 gap-6 my-11 bg-white border border-gray-200 rounded-sm shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col">
        <label className="font-bold">{restaurantName} </label>
        <label className="mb-4 flex-row text-sm text-gray-700">{location}</label>
      </div>

      <div className="flow-root">
          <label className="font-bold pb-5">Bill details</label>
          <div className="flex flex-col text-xs pb-3 text-gray-500 gap-3">
              <div className="flex flex-row justify-between">
                  <label>Item total</label>
                  <label>{total}</label>
              </div>

              <hr></hr>
              <div className="flex flex-row justify-between">
                  <label>Delivery Fee | 5.0 kms</label>
                  <label>₹69</label>
              </div>
              <div className="flex flex-row justify-between">
                  <label>Festive season platform fee</label>
                  <label>₹10</label>
              </div>

              <div className="flex flex-row justify-between">
                  <label>GST and Restaurant Charges</label>
                  <label>₹71.20</label>
              </div>
              <hr className="font-bold text-black"></hr>

              <div className="flex flex-row justify-between font-bold text-black">
                  <label>TO PAY</label>
                  <label>₹{total+ + 10 + 71.20 + 69}</label>
              </div>

          </div>

    
      </div>
    </div>
    </div>
    
  );
};

export default Cart;
