import React from 'react'
import TextField from '@/components/TextField'
import axios from 'axios'

const NotificationManagementForm = ({ notificationDetails }) => {
    const date = new Date()
    const postNotifications = async() => {
        console.log(notificationDetails)
        await axios.request({
            method: 'POST',
            url: 'https://server-mlsu-majorproject.vercel.app/api/notification/post',
            data: notificationDetails
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
                    <label htmlFor="notificationMessage" className="text-sm font-medium tracking-wide">Notification message: </label>
                    <textarea name="notificationMessage" id="notificationMessage" cols="30" rows="4" className='w-full border-2' onChange={(e)=> notificationDetails['message'] = e.target.value}></textarea>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between items-center">
                    <div className="w-fit flex flex-col lg:flex-row justify-start items-start lg:items-center gap-x-3 gap-y-2 text-black px-2">
                        <label htmlFor="notificationCreationDate" className="text-sm font-medium tracking-wide">Notification Creation Date: </label>
                        <input type="text" name="ncd" id="ncd" className='border-[2px] px-2 py-1 rounded-md w-80 pointer-events-none placeholder:text-black' placeholder={`${date.toDateString()}`} disable={true} />
                    </div>
                    <div className="text-black">
                        <TextField.Ordinary
                            fieldName={'sender'}
                            label={'Sender Name'}
                            placeholder={'Enter sender name'}
                            value={notificationDetails}
                            fieldLength={'long'}
                            type={'text'}
                            w={'full'}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end items-center px-2">
                    <div className="min-w-24 h-7 bg-[#111827] text-white flex justify-center items-center rounded-md hover:cursor-pointer font-medium tracking-wide px-3" onClick={()=> {
                        notificationDetails['date'] = `${date.toDateString()}`
                        postNotifications()
                    }}>
                        Update Notification
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NotificationManagementForm