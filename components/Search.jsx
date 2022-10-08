import React, { useState } from "react";
import Link from "next/link";

const Search = () => {
    const [optionSelected, setOptionSelected] = useState("Case ID");
    const [options, setOptions] = useState(["Case ID", "Name", "Phone No."]);
    const [showDropdown, setShowdropdown] = useState(false);
    return (
        <div className="flex h-[88%] mt-44 justify-center">

            <div className="w-[65%] space-y-2">
                <div className="flex col">
                <button
                    onClick = {()=>setShowdropdown(!showDropdown)}
                    className="text-white h-23 justify-between w-44 bg-opacity-40 bg-blue-600 hover:bg-blue-700 font-medium rounded-l-full text-sm px-4 py-2.5 text-center inline-flex items-center"
                >
                    {optionSelected}{" "}
                    <svg
                        className="ml-2 w-4 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                <div className="relative w-full">
  <input
    type="search"
    className="block p-3 w-full z-20 text-sm bg-gray-800 bg-opacity-80 text-white  rounded-r-full focus:border-gray-900 focus:outline-none focus:ring-0"
    placeholder={"Search using " + optionSelected}
    required=""
  />
  <button
    type="submit" 
    className="absolute top-0 right-0 p-3 mr-2 text-sm font-medium text-white rounded-r-full focus:ring-0 focus:outline-none focus:ring-blue-300"
  >
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
    <span className="sr-only">Search</span>
  </button>
</div>

                </div>
                {showDropdown && (
                <div
                    className=" z-10 w-36 rounded-2xl divide-y divide-gray-100 shadow bg-opacity-80 bg-gray-800"
                >
                    <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefault"
                    >
                            <button
                                className="block w-36 py-2 px-4 text-start rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => {
                                    setOptionSelected(options[1])
                                    setOptions([options[1], options[0], options[2]])
                                    setShowdropdown(false)
                                }}
                            >
                                {options[1]}
                                </button>
                                <button
                                className="block w-36 py-2 px-4 text-start rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => {
                                    setOptionSelected(options[2])
                                    setOptions([options[2], options[1], options[0]])
                                    setShowdropdown(false)
                                }}
                            >
                                {options[2]}
                                </button>
                    </ul>
                </div>
                )}
            </div>
        </div>
    );
}

export default Search;