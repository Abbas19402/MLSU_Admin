import Forms from '@/components/Forms'
import React from 'react'

const NotificationPage = () => {
  const notificationDetails = {}
  return (
    <div className="p-4">
      <Forms.Notification notificationDetails={notificationDetails}/>
    </div>
  )
}

export default NotificationPage