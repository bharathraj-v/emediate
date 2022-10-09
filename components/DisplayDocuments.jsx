const DisplayDocuments = ({
    firstName,
    lastName,
    state,
    caseId
}) => {
    return (
        <div className="flex overflow-y-scroll  items-center flex-col h-screen  mx-4 my-11">
            <div className="overflow-strict w-[63%] ">
                <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr>
                            <th scope="row" className="py-2 font-bold  text-gray-900 whitespace-nowrap">
                                First Name:
                            </th>
                            <td className="py-2 font-medium text-right text-gray-900 whitespace-nowrap">
                                {firstName}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="py-2 font-bold  text-gray-900 whitespace-nowrap">
                                Last Name:
                            </th>
                            <td className="py-2  font-medium text-right text-gray-900 whitespace-nowrap">
                                {lastName}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="py-2 font-bold  text-gray-900 whitespace-nowrap">
                                Mediator Name:
                            </th>
                            <td className="py-2 font-medium text-right text-gray-900 whitespace-nowrap">
                                Y Ashoka Varma
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="py-2  font-bold  text-gray-900 whitespace-nowrap">
                                State:
                            </th>
                            <td className="py-2 font-medium text-right text-gray-900 whitespace-nowrap">
                                {state}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="py-2 font-bold  text-gray-900 whitespace-nowrap">
                                Case ID:
                            </th>
                            <td className="py-2 font-bold text-right text-gray-900 whitespace-nowrap">
                                {caseId}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="py-2 font-bold  text-gray-900 whitespace-nowrap">
                                Date:
                            </th>
                            <td className="py-2  text-right font-medium text-gray-900 whitespace-nowrap">
                                {new Date().toJSON().slice(0,10).replace(/-/g,'/')}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                        
                    </tbody>
                </table>
            </div> */}
        <div className="flex flex-col items-center space-y-4 mb-40 mt-8 h-screen">
        <iframe    className="flex absolute w-[62%] h-full"
         src="https://e-mediate.s3.ap-south-1.amazonaws.com/WP(C)+1+of+2018.pdf"></iframe>
         </div>
       </div>
        
    )
}

export default DisplayDocuments