import React from 'react';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'

export function Notification({ displayDrawer }) {
    const notifications = [
        { type: "default", html: "", value: "New course available" },
        { type: "urgent", html: "", value: "New resume available" },
        { type: "", html: "<strong class='strong'>Urgent requirement</strong>", value: " - complete by EOD" }
    ];

    return (
        <div className='menuItem'>
            <p>Your notifications</p>
            {displayDrawer && (
                <div className='Notifications'>
                    <button
                        style={{float: 'right', display: 'inline'}}
                        aria-label='Close'
                        onClick={() => {console.log('Close button has been clicked')}}
                        >x
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {notifications.map((notification, i) => 
                            <NotificationItem 
                            key={i} 
                            type={notification.type} 
                            html={notification.html} 
                            value={notification.value} 
                            />
                            )}
                    </ul>
                </div>
                )
            }
        </div>
    )
}

Notification.propTypes = {
    displayDrawer: PropTypes.bool
}

Notification.defaultProps = {
    displayDrawer: false
}
