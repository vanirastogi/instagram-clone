"use client";

import Posts from "./Posts";
import Story from "./story";
import RecentlyViewed from "./RecentlyViewed";
const Homepage = () => {
  return (
    <div className="flex flex-col h-full ml-60 p-10 overflow-y-auto overflow-x-hidden"> 
      {/* Allows vertical scrolling but prevents horizontal scrolling */}
      <div className="flex w-full  space-x-4  pr-8"> 
        {/* Story section */}
        <Story />
      </div>
      <div className="flex p-10">
        <div className="flex w-3/6 mt-6"> 
        {/* Posts section */}
        <Posts />
        
      </div>
      <div className="flex w-2/5 mt-6"> 
        {/* Posts section */}
        <RecentlyViewed/>
        
      </div>
      </div>
      
     
    </div>
  );
};

export default Homepage;
