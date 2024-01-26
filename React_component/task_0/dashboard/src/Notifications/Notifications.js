import React from 'react';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'

export function Notification({ displayDrawer, listNotifications = [] }) {

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
                        {listNotifications.length > 0 ? listNotifications.map((noti) => {
                            return (
                                <NotificationItem 
                                    key={noti.id}
                                    type={noti.type}
                                    html={noti.html}
                                    value={noti.value}
                                />
                            )
                        }) : (
                            < NotificationItem html={""} value='No new notification for now'/>
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
