import React, { useEffect } from 'react'

const FacultyDocumentTable = ({ documents }) => {
    useEffect(()=>{
        console.log(documents);
    }, [documents])
    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                <tr className='text-center'>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    S. No.
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Degree
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Document
                </th>
                </tr>
            </thead>
            <tbody>
                {documents?.map((item, index) => (
                <tr key={index} className="bg-white border-b text-center text-black hover:cursor-pointer">
                    <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                    {index + 1}
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap capitalize">{item.qType}</td>
                    <td className="px-6 py-4">{item.degreeName}</td>
                    <td className="px-6 py-4 underline underline-offset-4 text-sky-700">{item.document?.name}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default FacultyDocumentTable