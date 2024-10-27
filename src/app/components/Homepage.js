"use client";

import Posts from "./Posts";
import Story from "./story";

const Homepage = () => {
  return (
    <div className="flex flex-col h-full ml-60 p-10 overflow-y-auto overflow-x-hidden"> 
      {/* Allows vertical scrolling but prevents horizontal scrolling */}
      <div className="flex w-full items-center space-x-4  pr-8"> 
        {/* Story section */}
        <Story />
      </div>
      <div className="flex w-3/5 mt-6"> 
        {/* Posts section */}
        <Posts />
      </div>
    </div>
  );
};

export default Homepage;
