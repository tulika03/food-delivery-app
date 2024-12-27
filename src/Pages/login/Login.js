import "./login.css";
import { Link } from "react-router-dom";
import {  useForm } from 'react-hook-form'
import UserContext from "../../../context/UserContext";
import { useContext } from "react";
const Login = ({onClose}) => {   
    const { setIsLoggedIn, setLoggedInUser } = useContext(UserContext);
    const {register, handleSubmit, formState: {errors} }= useForm();
    
    const submitForm = (data) => {
      console.log(data)
      setIsLoggedIn(true); // Set loggedIn state to true
      setLoggedInUser(data.username); // Set username
      onClose();
    }
 
  return (
    <div className="login-page">
      <div className="login-card">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="text-xl font-bold pb-11">LOGIN
          
        </div>

        <input
            type="text"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            {...register("username", {required: true, pattern: "/^[A-za-z0-9]+$/i", minLength: "3", maxLength: "12"})}
            name="username"           
            required
          ></input>
          {errors.username && <p className="text-red-700 text-xs">Username is required and must be valid</p>}
          <input
             className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="password"
            placeholder="password"
            name="password"
            {...register("password", {required: true, minLength: "8", maxLength: "16"})}
          ></input>
          {errors.password && <p className="text-red-700 text-xs">Password is required</p>}
          <button className="button my-4" type="submit">LOGIN</button>
        </form>

        <div className="text-xs">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</div>

        {/* <Link className="forgot">Forgot password?</Link> */}

      </div>
    </div>
  );
};

export default Login;
