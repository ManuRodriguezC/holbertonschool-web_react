import React from 'react';
import './Notifications.css'

export function Notification() {
    return <div className='Notifications'>
        <button
            style={{float: 'right', display: 'inline'}}
            aria-label='Close'
            onClick={() => {console.log('Close button has been clicked')}}
            >x
        </button>
        <p>Here is the list of notifications</p>
        <ul>
            <li data={"default"}>New course available</li>
            <li data={"urgent"}>New resume available</li>
            <li ><strong className='strong'>Urgent requirement</strong> - complete by EOD</li>
        </ul>
    </div>
}