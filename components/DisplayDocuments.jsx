const DisplayDocuments = ({
    firstName,
    lastName,
    state,
    caseId
}) => {
    return (
        <div className="flex overflow-y-scroll flex-col h-screen mx-2 my-11">
        <div className="flex space-x-[25%] justify-between items-center mx-2">
            <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr>
                            <th scope="row" class="py-2 px-6 font-bold  text-gray-900 whitespace-nowrap">
                                First Name:
                            </th>
                            <td class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {firstName}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="py-2 px-6 font-bold  text-gray-900 whitespace-nowrap">
                                Last Name:
                            </th>
                            <td class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {lastName}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="py-2 px-6 font-bold  text-gray-900 whitespace-nowrap">
                                Mediator Name:
                            </th>
                            <td class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap">
                                Y Ashoka Varma
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr>
                            <th scope="row" class="py-2 px-6 font-bold  text-gray-900 whitespace-nowrap">
                                State:
                            </th>
                            <td class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {state}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="py-2 px-6 font-bold  text-gray-900 whitespace-nowrap">
                                Case ID:
                            </th>
                            <td class="py-2 px-6 font-bold text-gray-900 whitespace-nowrap">
                                {caseId}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="py-2 px-6 font-bold  text-gray-900 whitespace-nowrap">
                                Date:
                            </th>
                            <td class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {new Date().toJSON().slice(0,10).replace(/-/g,'/')}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="flex flex-col items-center space-y-4 mb-40 mt-8 h-screen">
        <iframe    className="flex absolute w-[90%] h-full"
         src="https://e-mediate.s3.ap-south-1.amazonaws.com/WP(C)+1+of+2018.pdf"></iframe>
         </div>
       </div>
        
    )
}

export default DisplayDocuments