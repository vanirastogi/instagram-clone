"use client";

import Posts from "./Posts";
import Story from "./Story";
import RecentlyViewed from "./RecentlyViewed";
const Homepage = () => {
  return (
    <div className="flex flex-col h-full ml-20 md:ml-40  lg:ml-60 p-10 overflow-y-auto overflow-x-hidden"> 
      <div className="flex w-full  space-x-4  pr-8"> 
        <Story />
      </div>

      <div className="flex p-10">
        <div className="flex w-3/6 mt-6"> 
        <Posts />
        </div>

        <div className="flex w-2/5 mt-6"> 
          <RecentlyViewed/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
