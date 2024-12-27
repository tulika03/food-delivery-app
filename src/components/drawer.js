import { useState } from "react";
import Login from "../Pages/login/Login";

const Drawer = ({onClose}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDrawer = () => {
      setIsOpen(!isOpen)
      onClose();
    }
    return (
        <div>
          {/* Button to open/close the drawer */}
    
          {/* Drawer overlay */}
          <div 
            className={`fixed inset-0 bg-gray-500 bg-opacity-50 z-10 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={toggleDrawer}
          ></div>
    
          {/* Drawer itself */}
          <div 
            className={`fixed top-0 right-0 w-104 h-full bg-white shadow-lg z-20 transform transition-transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Drawer content */}
            <div className="p-4">
              <Login onClose={onClose}></Login>
            </div>
    
            {/* Close button */}
            <button 
              onClick={toggleDrawer} 
              className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              X
            </button>
          </div>
        </div>
      );

}


    
export default Drawer;