import React from 'react'

const OrdinaryField = ({
    label, 
    placeholder = `${label} here...`, 
    fieldName, 
    value, 
    labelPosition, 
    fieldLength, 
    type,
    w
  }) => {
  return (
    <div className={`w-${w} h-fit flex flex-${labelPosition == 'right' || labelPosition == 'left' ? 'row items-center' : 'col items-start'} justify-start ${(labelPosition == 'right' || labelPosition == 'left')?  'gap-x-3' : 'gap-1'} p-2`}>
        <div className="text-black w-20">
          <label htmlFor={fieldName} className='text-sm font-medium tracking-wide whitespace-nowrap '>{label}: </label>
        </div>
        <input 
          className={`border-[2px] rounded-md focus:outline-[2px] outline-black flex justify-start items-center p-1.5 text-sm font-medium tracking-wide ${type == 'text' && 'capitalize' } ${fieldLength == 'long' ? 'w-80' : 'w-56'}`}
          name={fieldName}
          placeholder={placeholder}
          onChange={(e)=> value[`${fieldName}`] = e.target.value}
          type={type}
        />
    </div>
  )
}

export default OrdinaryField