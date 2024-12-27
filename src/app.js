import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import Header from "./Pages/header/Header";
import Content from "./Pages/content/Content";
import About from "./Pages/about/about";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './components/Error'
import Contact from "./Pages/contact/Contact";
import ResMenu from "./Pages/ResMenu/ResMenu";
import useOnlineStatus from "../hooks/useOnlineStatus"
import Login from "./Pages/login/Login";
import ShimmerUI from "./components/shimmer";
import Cart from "./Pages/cart/cart"
import Loading from "./components/Loading";
import UserContext from "../context/UserContext";
import {Provider} from "react-redux";
import appStore from "../store/appStore";
import StickyNav from "./components/stickyNav";
import SearchMenu from "./Pages/ResMenu/searchMenu";
const About = lazy(() => import("./Pages/about/about"));

const AppComponent = () => {
  const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState("Default User");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in

  
  const [userName, setUsername] = useState("")
    useEffect(() => {
      const data = {
        name: "User"
      };

     setTimeout(() => setLoading(false), 1000);
    }, [])
    

  const onlineStatus = useOnlineStatus();
  // if(loading)
  //   return <ShimmerUI />

  if(onlineStatus === false)
    return <h1>Looks like you are offline. Please check your internet connection</h1>

  return (
    <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn, setIsLoggedIn }}>
    <div className="app">
      <Header />
      {/* if path is / then load body else if path is /about the About component and so on */}
      
      <StickyNav />
      <Outlet />

    </div>
    </UserContext.Provider>
    </Provider>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Content />
      },
      {
        path: "/home",
        element: <Content />
      },
      {
        path: "/about",
        element: <Suspense fallback={<ShimmerUI></ShimmerUI>}><About /></Suspense>
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />
      },
      {
        path: "/search",
        element: <SearchMenu />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

// It is used to render react element
root.render(<RouterProvider router={appRouter}></RouterProvider>);
