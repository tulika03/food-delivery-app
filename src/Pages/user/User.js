import "./user.css";
import { useEffect, useState } from "react";

const User = (props) => {
  const { user } = props;
  const [count, setCount] = useState(0);
  // setCount(2);
  return (
    <div className="bg-white max-w-md w-lg border p-6 border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="user-card">
        <div className="card-content">
          <img src={user?.avatar_url}></img>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col">
            <span>Name </span>
            <span>Location </span>
            <span>Contact </span>
            <span>Count</span>
          </div>
          <div className="flex flex-col">
            <span> {user?.name}</span>
            <span> {user?.location}</span>
            <span>{user?.login}</span>
            <div className="flex flex-row gap-3">
              <button type="button" className="px-3 py-0 text-md font-medium text-center inline-flex items-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </button>
              <span>{count}</span>
              <button type="button" className="px-3 py-0 text-xs font-medium text-center inline-flex items-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
