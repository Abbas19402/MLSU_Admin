import React from 'react'

const StudentTable = ({ data }) => {
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
                Course
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Semester
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white border-b text-center">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4">{item.generalDetails.course_enrolled}</td>
                <td className="px-6 py-4">{item.academicDetails.current_semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default StudentTable