import {useState, React} from 'react';

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


const Register= () => {
    const [open, setOpen] = useState(false);

    if (open) {
    return (
        <div className="flex h-[90%] bg-white w-full  items-center justify-center">
            <div className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-44 mb-2">
                    <div className="w-full  px-3 mb-2 md:mb-0">
                        <label className="block text-gray-700 text-2xl font-bold mb-4" >
                            Register for Arbitration / Mediation:</label>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-44 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
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
                            type="text"
                            placeholder="XXX-000000"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
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
                            >
                                {STATES_OF_INDIA.map((state) => (
                                    <option key={state}>{state}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-state"
                        >
                            Case Type
                        </label>
                        <div className="relative">
                            <select
                                className="appearance-none block w-full
                                 bg-gray-200 text-gray-700 border
                                  border-gray-300 rounded py-[4.7%] px-4 mb-3 
                                  leading-tight focus:outline-none focus:bg-white
                                   focus:border-gray-500"
                            >
                                <option>Arbitration</option>
                                <option>Mediation</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-44 mb-2">
                    <div className="w-full  px-3 mb-2 md:mb-0">
                        <label className="block text-gray-700 text-m font-bold mb-2" >
                            Arbitrator Details:</label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-44 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
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
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
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
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Phone Number
                        </label>
                        <input
                            className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                              border-gray-300 rounded py-3 px-4 leading-tight
                               focus:outline-none focus:bg-white
                                focus:border-gray-500"
                            type="text"
                            
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-44 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            E-Mail
                        </label>
                        <input
                            className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                              border-gray-300 rounded py-3 px-4 mb-3
                               leading-tight focus:outline-none focus:bg-white"
                            type="email"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Password
                        </label>
                        <input
                            className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                              border-gray-300 rounded py-3 px-4 leading-tight
                               focus:outline-none focus:bg-white
                                focus:border-gray-500"
                            type="password"
                            placeholder='••••••••••••'
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                              border-gray-300 rounded py-3 px-4 leading-tight
                               focus:outline-none focus:bg-white
                                focus:border-gray-500"
                                type="password"
                                placeholder='••••••••••••'
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-44 mb-2">
                    <div className="w-full  px-3 mb-2 md:mb-0">
                        <label className="block text-gray-700 text-m font-bold mb-2" >
                            Party 1 Details:</label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-44 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
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
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
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
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Phone Number
                        </label>
                        <input
                            className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                              border-gray-300 rounded py-3 px-4 leading-tight
                               focus:outline-none focus:bg-white
                                focus:border-gray-500"
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-44 mb-2">
                    <div className="w-full  px-3 mb-2 md:mb-0">
                        <label className="block text-gray-700 text-m font-bold mb-2" >
                            Party 2 Details:</label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-44 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
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
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
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
                            type="text"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Phone Number
                        </label>
                        <input
                            className="appearance-none block w-full
                             bg-gray-200 text-gray-700 border
                              border-gray-300 rounded py-3 px-4 leading-tight
                               focus:outline-none focus:bg-white
                                focus:border-gray-500"
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center px-2 -mx-44 mb-2">
                <button 
                        className="appearance-none 
                        block w-full  bg-gray-600 text-white border 
                        border-gray-300
                        hover:bg-blue-900
                        hover:font-bold
                        rounded py-3 px-5 mb-3">
                        Submit
                        </button>
                </div>
                {/* <div className="flex flex-wrap -mx-44 mb-2">
                <div className="w-full md:w-3/4 px-3 mb-2 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Phone Number
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            maxLength={13}
                            placeholder="+91 XXXXXXXXXX"
                        />
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-2 md:mb-0">
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
                </div> */}
            </div>
        </div>
    )} else { 
        return (
            <div
            id="defaultModal"
            tabIndex={-1}
            className="flex h-[88%] items-center justify-center"
          >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/* Modal content */}
              <div className="relative rounded-lg shadow bg-gray-800">
                {/* Modal header */}
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl px-2 font-semibold text-gray-900 dark:text-white">
                    Register for an Arbitration / Mediation
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={()=>window.location="/"}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="p-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    E-Mediate is a self sustaining platform that provides data storage and Access
                    options for Arbitration and Mediation proceedings. The platform is designed to
                    provide a secure and transparent environment for the parties to the dispute to
                    access the documents of the proceedings.

                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    By clicking Accept, you hereby agree to act as the Arbitrator or Mediator depending
                    on the type of dispute and the type of proceedings selected by the parties. You are 
                    solely responsible for uploading the documents of the proceedings. You are also
                    responsible for the authenticity of the documents uploaded. You are hereby responsible
                    to give accurate details of each party names and any mistakes in the details will not
                    be entertained.
                  </p>
                </div>
                {/* Modal footer */}

                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button
                    data-modal-toggle="defaultModal"
                    type="button"
                    onClick={()=>setOpen(true)}
                    className="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Accept
                  </button>
                  <button
                    data-modal-toggle="defaultModal"
                    type="button"
                    onClick={() => window.location='/'}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        ) 
    }
}

export default Register;