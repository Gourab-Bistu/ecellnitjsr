import React from "react";
import "../styles/CoreMember.css";

export const CoreMember = () => {
  return (
    <>
      <div id="coremember bg-black">
        <div className="w-full text-center text-3xl font-bold p-5 text-red-600">
          Core Members
        </div>
        <div className="flex justify-center w-full text-center">
        <div className="flex flex-wrap max-w-max text-center justify-between">
        
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-80 m-5">
          <a href="/">
            <img class="rounded-t-lg" src="https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg" alt="" />
          </a>
          <div class="p-2 text-center">
            <a href="/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">XYZ</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">GEN SEC</p>
            
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-80 m-5">
          <a href="/">
            <img class="rounded-t-lg" src="https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg" alt="" />
          </a>
          <div class="p-2 text-center">
            <a href="/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">XYZ</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">GEN SEC</p>
            
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-80 m-5">
          <a href="/">
            <img class="rounded-t-lg" src="https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg" alt="" />
          </a>
          <div class="p-2 text-center">
            <a href="/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">XYZ</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">GEN SEC</p>
            
          </div>
        </div>

        
        </div>
        </div>



      </div>
    </>
  );
};
export default CoreMember;
