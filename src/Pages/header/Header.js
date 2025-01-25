import { LOGO_URL } from "../../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { useSelector } from "react-redux";
import logo from "../../images/food-delivery-logo.svg"
import Drawer from "../../components/drawer";
const Header = (color = 'primary', textColor = 'primaryText') => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser } = useContext(UserContext);

  const [showDrawer, setShowDrawer] = useState(false);
  const cartItems = useSelector((store) => {
    console.log("check cart items length: ", store.cart.items)
    return store.cart.items;
  });

  const handleButtonClick = () => {
    setShowDrawer(!showDrawer);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setLoggedInUser("");
    navigate("/home");
  }

  return (
    <>
        {showDrawer && <Drawer onClose={() => setShowDrawer(false)}></Drawer>}
        <header className="flex justify-around py-4 shadow-lg sticky">
        <div className="logo-container">
        <img className="logo h-20 w-20" alt="logo" src={logo} />  
        </div>
        <div className="nav-items align-middle">
          <ul>
            <Link className="link p-6" to="/home">
              Home
            </Link>
            <Link className="link p-6" to="/about">
              About Us
            </Link>
            {/* <Link className="link p-6" to="/contact">
              Contact Us
            </Link> */}
            <Link className="link p-6" to="/cart">
              <b> Cart ({cartItems.length})</b>              
            </Link>
           {!isLoggedIn && <button
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleButtonClick}
            >
              Sign in
            </button>}
            {isLoggedIn && <label
              className="text-black font-bold py-2 px-4"
              onClick={handleSignOut}
            >
              {loggedInUser}
            </label>}
            {isLoggedIn && <MdOutlinePowerSettingsNew 
              className="text-black font-bold display-inline text-orange-700" style={{fontSize: "1.5rem", display: "inline"}}
              onClick={handleSignOut}
            >
              Log out
            </MdOutlinePowerSettingsNew>}
            {/* <li>{loggedInUser}</li> */}
          </ul>
        </div>
      </header>

    </>

      

  );
};

export default Header;
