import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

const Table = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/report/view')
                .then(d => {
                    const result = d.json()
                        .then(data => {
                            const out = data.cont;
                            setTableData(out);
                        })
                })
        }


        fetchHistory()
    })

    async function deleteThis(id) {
        let allow = confirm('Do you really want to remove this??');
        if (allow) {
            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/report/delete?id=' + id)
                .then(d => {
                    let result = d.json()
                        .then(data => {
                            if (data.status == 200) {
                                toast.success("History removed successfully");
                            } else {
                                toast.error("An error occured");
                            }
                        })
                })
        }
    }

    return (
        <>
            <Toaster />

            <div className="font-[sans-serif] overflow-x-hidden">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 whitespace-nowrap">
                        <tr>
                            <th className="p-4 text-sm font-medium text-left text-white">
                                #
                            </th>
                            <th className="p-4 text-sm font-medium text-left text-white">
                                Details
                            </th>
                            <th className="p-4 text-sm font-medium text-left text-white">
                                Date
                            </th>
                            <th className="p-4 text-sm font-medium text-left text-white">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="whitespace-nowrap">
                        {tableData.length == 0 ? <tr><td colSpan="4" className="p-2 text-center">No history saved yet!</td></tr> : null}
                        {tableData.map((data, index) => (

                            <tr className="even:bg-blue-50" key={index}>
                                <td className="p-4 text-sm text-center text-black">{index + 1}</td>
                                <td className="p-4 text-sm text-black text-wrap w-[700px]">{data.details}</td>
                                <td className="p-4 text-sm text-black">{data.date}</td>
                                <td className="p-4">
                                    <button className="mr-4" title="Delete" onClick={() => deleteThis(data.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-900" viewBox="0 0 24 24"><path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000" /> <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000" /> </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div >
        </>
    )
}

export default Table
