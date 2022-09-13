const Register= () => {
    return (
        <div className="flex h-[88%]  items-center justify-center">
            <div className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-12 mb-6">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block py-3 text-gray-700 text-2xl font-bold mb-2" >
                            Register for Arbitration / Mediation:</label>
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
                            >
                                <option>Andhra Pradesh</option>
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
            </div>
        </div>
    )
}

export default Register;