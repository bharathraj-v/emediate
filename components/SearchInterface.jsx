import React, { useEffect, useState } from 'react';
import DisplayDocuments from './DisplayDocuments';

const STATES_OF_INDIA = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
];


const SearchInterface = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpStatus, setOtpStatus] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [caseId, setCaseId] = useState("");
    const [state, setState] = useState("");

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handlefirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handlelastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handleCaseIdChange = (e) => {
        setCaseId(e.target.value);
    };
    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const sendOtp = () => { 
        console.log(phoneNumber.length);
        if (phoneNumber.length < 10) {
            window.alert("Please Enter a Valid Phone Number!");
        } else if (firstName.length < 2){
            window.alert("Please Enter a Valid First Name!");
        } else if (lastName.length < 2){
            window.alert("Please Enter a Valid Last Name!");
        } else if (caseId.length < 2){
            window.alert("Please Enter a Valid Case ID!");
        } else {
            setOtpStatus(1);
        }
    }

    if (!otpStatus){
      return (
        <div className="flex h-[88%]  items-center justify-center">
            <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-12 mb-6">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block py-3 text-gray-700 text-2xl font-bold mb-2" >
                            Search your Case Documents:</label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-12 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                              border-gray-300 rounded py-3 px-4 mb-3
                               leading-tight focus:outline-none focus:bg-white"
                            value={firstName}
                            onChange={handlefirstNameChange}
                            type="text"
                        />
                        <p className="text-blue-500 text-xs">(Enter according to your Aadhar ID details)</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                              border-gray-300 rounded py-3 px-4 leading-tight
                               focus:outline-none focus:bg-white
                                focus:border-gray-500"
                            value={lastName}
                            onChange={handlelastNameChange}
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-12 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Case ID
                        </label>
                        <input
                            className="appearance-none 
                            block w-full bg-gray-200 
                            text-gray-700 border border-gray-300 
                            rounded py-3 px-4 mb-3 leading-tight 
                            focus:outline-none focus:bg-white 
                            focus:border-gray-500"
                            value={caseId}
                            onChange={handleCaseIdChange}
                            type="text"
                            placeholder="XXX-000000"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-state"
                        >
                            State
                        </label>
                        <div className="relative">
                            <select
                                className="appearance-none block w-full
                                 bg-gray-200 text-gray-700 border
                                  border-gray-300 rounded py-[4.7%] px-4 mb-3 
                                  leading-tight focus:outline-none focus:bg-white
                                   focus:border-gray-500"
                                value={state}
                                onChange={handleStateChange}
                            >
                                {STATES_OF_INDIA.map((state) => (
                                    <option key={state}>{state}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current rotate-180 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-12 mb-6">
                <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Phone Number
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            type="text"
                            maxLength={13}
                            placeholder="+91 XXXXXXXXXX"
                        />
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">.</label>
                        <button 
                        className="appearance-none 
                        block w-full bg-gray-600 text-white border 
                        border-gray-300
                        hover:bg-blue-900
                        hover:font-bold
                        rounded py-3 px-4 mb-3"
                        onClick={() => sendOtp()}>
                            Send OTP
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
    } else if (otpStatus === 1){

        return (
            <div className="flex h-[88%] items-center justify-center">
            <div className="container mx-auto">
              <div className="max-w-sm mx-auto md:max-w-lg">
                <div className="w-full">
                  <div className="bg-white h-64 py-3 rounded text-center">
                    <h1 className="text-2xl font-bold">OTP Verification</h1>
                    <div className="flex flex-col mt-4">
                      <span>Enter the OTP you received at</span>
                      <span className="font-bold">+91 *******{phoneNumber.slice(-3)}</span>
                    </div>
                    <div
                      id="otp"
                      className="flex flex-row justify-center text-center px-2 mt-5"
                    >
                      <input
                        className="m-2 border tracking-widest border-gray-400 h-10 w-30 text-center form-control rounded"
                        type="text"
                        placeholder='_ _ _ _ _ _'
                        maxLength={6}
                        id="first"/>
          
                    </div>
                    <div className="flex justify-center text-center mt-5">
                      <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                        <span className="font-bold">Resend OTP</span>
                        <i className="bx bx-caret-right ml-1" />
                      </a>
                    </div>
                    <div className="flex justify-center text-center mt-5">

                    <button 
                        className="appearance-none 
                        block bg-blue-800 text-white border 
                        border-gray-300 rounded py-3 px-4 mb-3"
                        onClick={()=>setOtpStatus(2)}>
                            Submit
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )
    } else {
        return (
            <DisplayDocuments 
            firstName={firstName}
            lastName={lastName}
            state={state}
            caseId={caseId}
            phoneNumber={phoneNumber}
            />
        )
    }
}

export default SearchInterface