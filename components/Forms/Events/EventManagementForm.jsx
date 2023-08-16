import TextField from '@/components/TextField'
import React from 'react'
import axios from 'axios'

const EventManagementForm = ({ eventDetails }) => {
    const date = new Date()

    const postEvents = async() => {
        console.log(eventDetails)
        await axios.request({
            method: 'POST',
            url: 'https://server-mlsu-majorproject.vercel.app/api/events/post',
            data: eventDetails
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="w-full flex flex-col justify-start items-center">
            <div className='w-full h-72 flex flex-col gap-y-3'>
                <div className="w-full flex flex-col justify-center items-start gap-3 text-black px-2">
                    <label htmlFor="eventCreationDate" className="text-sm font-medium tracking-wide">Event title/message: </label>
                    <textarea name="eventTitle" id="eventTitle" cols="30" rows="4" className='w-full border-2' onChange={(e)=> eventDetails['title'] = e.target.value}></textarea>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between items-center">
                    <div className="w-fit flex flex-col lg:flex-row justify-start items-start lg:items-center gap-x-3 gap-y-2 text-black px-2">
                        <label htmlFor="eventCreationDate" className="text-sm font-medium tracking-wide">Event Creation Date: </label>
                        <input type="text" name="ecd" id="ecd" className='border-[2px] px-2 py-1 rounded-md w-80 pointer-events-none placeholder:text-black' placeholder={date.toDateString()} disable={true} />
                    </div>
                    <div className="text-black">
                        <TextField.Ordinary
                            fieldName={'hashtag'}
                            label={'Hashtag'}
                            placeholder={'Enter hashtag'}
                            value={eventDetails}
                            fieldLength={'long'}
                            type={'text'}
                            w={'full'}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end items-center px-2">
                    <div className="min-w-24 h-7 bg-[#111827] text-white flex justify-center items-center rounded-md hover:cursor-pointer font-medium tracking-wide px-3" onClick={()=> {
                        eventDetails['date'] = date.toDateString()
                        postEvents()
                    }}>
                        Create New Event
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventManagementForm