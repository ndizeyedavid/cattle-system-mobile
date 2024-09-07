import Table from "./Table"
const Reports = () => {
    return (
        <div className="h-full p-2 overflow-y-auto">
            <div class="font-sans px-4">
                <ul class="flex w-max border-b space-x-4 overflow-hidden">
                    <li id="homeTab"
                        class="tab active text-gray-600 font-semibold bg-gray-200 text-center text-sm py-2 px-6 rounded-tl-2xl rounded-tr-2xl cursor-pointer">
                        Details</li>
                    <li id="settingTab"
                        class="tab text-gray-600 font-semibold bg-gray-200 text-center text-sm py-2 px-6 rounded-tl-2xl rounded-tr-2xl cursor-pointer">
                        Analytics</li>
                </ul>
            </div>
            <div className="p-2 border-2 rounded-md">

                <Table />

            </div>
        </div>
    )
}

export default Reports
