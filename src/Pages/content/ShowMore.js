import { useState, useEffect } from "react";
const ShowMore = (props) => {
  let { bottomData } = props;
  fix_content = 11;
  const [topEleven, setTopEleven] = useState(
    bottomData.card.brands.slice(0, fix_content)
  );
  if (topEleven.length === 11)
    topEleven.push({ link: null, text: "Show More" });
  const updateContentList = () => {
    setTopEleven(bottomData?.card?.brands);
  };
  return (
    <>
      <h5 className="mb-2 text-2xl py-2 font-bold tracking-tight text-gray-900 dark:text-white">
        {bottomData?.card?.title}
      </h5>
      <div className="grid grid-cols-4 gap-8">
        {topEleven.map((buttonData) =>
          buttonData.link != null ? (
            <button className="bg-transparent rounded-md text-gray-600 py-2 px-4 border border-gray-300  inline-flex justify-center">
              {" "}
              {buttonData.text}{" "}
            </button>
          ) : (
            <button
              className="bg-transparent rounded-md text-gray-600 py-2 px-4 border border-gray-300  inline-flex justify-center"
              onClick={updateContentList}
            >
              {buttonData?.text}
              <svg
                className="w-6 h-6 self-center pl-2"
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
            </button>
          )
        )}
      </div>
    </>
  );
};

export default ShowMore;
