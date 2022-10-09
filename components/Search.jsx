import React, { useState } from "react";
import Link from "next/link";
import cases from "../data.json";


const DisplayCases = ({displayItems}) => {
    const arr = displayItems.slice(0, 7);
    if (arr.length > 0) {
    return(
        <div className="w-[65%] overflow-x-auto relative shadow-md sm:rounded-2xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs dark:bg-opacity-80 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        Case ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Arbitrator
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Party-1
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Party-2
                    </th>
                    <th scope="col" className="py-3 px-6">
                        <span className="sr-only">Show</span>
                    </th>
                </tr>
            </thead>
            {
            arr.map((item) => (
            <tbody key={item.caseID}>
                <tr key={item.caseID+"tr"} className="bg-white border-b  dark:bg-opacity-85 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th key={item.caseID+"id"} scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.caseID}
                    </th>
                    <td key={item.caseID+"arbname"} className="py-4 px-6">
                        {item.arbitrator.firstName} {item.arbitrator.lastName}
                    </td>
                    <td key={item.caseID+"p1name"} className="py-4 px-6">
                        {item.party1.firstName} {item.party1.lastName}
                    </td>
                    <td key={item.caseID+"p2name"} className="py-4 px-6">
                        {item.party2.firstName} {item.party2.lastName}
                    </td>
                    <td key={item.caseID+"docs"} className="py-4 px-6 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Show</a>
                    </td>
                </tr>
            </tbody>
            ))}
        </table>
    </div>
    )
    }
}


const Search = () => {
    const [optionSelected, setOptionSelected] = useState("Name");
    const [options, setOptions] = useState(["Name", "Case ID"]);
    const [showDropdown, setShowdropdown] = useState(false);
    const [search, setSearch] = useState("");
    const [displayItems, setDisplayItems] = useState("");

    const submitSearch = (value) => {
        setShowdropdown(false);
        
        if (value !== "") {
            if (optionSelected === "Case ID") {
            setDisplayItems(
                cases.filter((caseData) => caseData.caseID.toString().startsWith(value))
                );
        }
            else if (optionSelected == "Name") {
                setDisplayItems(
                    cases.filter((caseData) => 
                    caseData.arbitrator.firstName.toLowerCase().startsWith(value.toLowerCase()) ||
                    caseData.arbitrator.lastName.toLowerCase().startsWith(value.toLowerCase()) ||
                    caseData.party1.firstName.toLowerCase().startsWith(value.toLowerCase()) ||
                    caseData.party1.lastName.toLowerCase().startsWith(value.toLowerCase()) ||
                    caseData.party2.firstName.toLowerCase().startsWith(value.toLowerCase()) ||
                    caseData.party2.lastName.toLowerCase().startsWith(value.toLowerCase())
                ))
            }
        }
        else {
            setDisplayItems("");
        }
    }

    const handleSearch = ({target}) => {
        var value = target.value;
        setSearch(value);
        console.log(value)
        submitSearch(value);
    };

    return (
        <div className="h-[88%]">
        <div className="flex  mt-52 justify-center">

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
    onChange={(e)=>{
        handleSearch(e)
    }}
    value={search}
    className="block p-3 w-full z-20 text-sm bg-gray-800 bg-opacity-80 text-white  rounded-r-full focus:border-gray-900 focus:outline-none focus:ring-0"
    placeholder={"Search using " + optionSelected}
    required=""
    onKeyPress={(e) => {
        if (e.key === "Enter") {
            submitSearch();
        }
     }}
  />
  <button
    type="submit"
    onClick = {()=>submitSearch()}
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
                                    setOptions([options[1], options[0]])
                                    setShowdropdown(false)
                                }}
                            >
                                {options[1]}
                                </button>
                    </ul>
                </div>
                )}
            </div>
        </div>
        <div className="flex justify-center items-center mt-10">
        <DisplayCases displayItems={displayItems}/>
        </div>
    </div>
        
    );
}

export default Search;