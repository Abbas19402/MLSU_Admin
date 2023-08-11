import React from 'react'
import Forms from '@/components/Forms'

const EventPage = () => {
  const eventDetails = {}
  return (
    <div className="p-4">
        <Forms.Event eventDetails={eventDetails}/>
    </div>
  )
}

export default EventPage