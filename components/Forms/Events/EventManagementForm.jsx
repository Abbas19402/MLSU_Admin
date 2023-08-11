import TextField from '@/components/TextField'
import React, { useState } from 'react'

const EventManagementForm = () => {
    const eventDetail = {}
    const date = new Date()
    return (
        <div className="w-full flex flex-col justify-start items-center">
            <div className='w-full h-72 flex flex-col gap-y-3'>
                <div className="w-full flex flex-col justify-center items-start gap-3 text-black px-2">
                    <label htmlFor="eventCreationDate" className="text-sm font-medium tracking-wide">Event title/message: </label>
                    <textarea name="" id="" cols="30" rows="4" className='w-full border-2'></textarea>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="w-fit flex flex-row justify-start items-center gap-x-3 text-black px-2">
                        <label htmlFor="eventCreationDate" className="text-sm font-medium tracking-wide">Event Creation Date: </label>
                        <input type="text" name="dob" id="dob" className='border-[2px] px-2 py-1 rounded-md w-80 pointer-events-none placeholder:text-black' onChange={(e)=> eventDetail['eventCreatedAt']=e.target.value} placeholder={date.toDateString()} disable />
                    </div>
                    <TextField.Ordinary
                        fieldName={'eventHashtag'}
                        label={'Hashtag'}
                        labelPosition={'right'}
                    />
                </div>
                <div className="w-full flex justify-end items-center px-2">
                    <div className="min-w-24 h-7 bg-[#111827] text-white flex justify-center items-center rounded-md hover:cursor-pointer font-medium tracking-wide px-3">
                        Create New Event
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventManagementForm