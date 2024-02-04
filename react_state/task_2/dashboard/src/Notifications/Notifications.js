import React from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    menuItem: {
       margin: '0px',
       display: 'flex',
       justifyContent: 'end',
       fontWeight: '800',
       padding: '5px',
       margin: '0px 10px 5px 10px',
       cursor: 'pointer'
    },
    Notifications: {
       width: '55vmin',
       position: 'relative',
       border: '1px dashed rgb(225, 29, 63)',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'start',
       justifyContent: 'start',
       fontSize: '1.1rem',
       fontFamily: "'Times New Roman', Times, serif",
       fontWeight: '600',
    },
    button: {
       border: '0px',
       fontSize: '15px',
       position: 'absolute',
       right: '0px',
       marginRight: '3px',
    },
    p: {
       marginBottom: '0px',
    },
    ul: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'start',
    },
   });
   

class Notifications extends React.Component {

    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
      }

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.displayDrawer != this.props.displayDrawer || nextProps.listNotifications.length > this.props.listNotifications.length;
      }

    render() {
        const { handleDisplayDrawer, handleHideDrawer } = this.props;

        return (
            <div className='menuItem'>
                <p className={css(styles.menuItem)} onClick={handleDisplayDrawer}>Your notifications</p>
                {this.props.displayDrawer && (
                    <div className={css(styles.Notifications)}>
                        <button
                            className={css(styles.button)}
                            style={{float: 'right', display: 'inline'}}
                            aria-label='Close'
                            onClick={handleHideDrawer}
                        >x
                        </button>
                        <p className={css(styles.p)}>Here is the list of notifications</p>
                        <ul className={css(styles.ul)}>
                            {this.props.listNotifications.length > 0 ? this.props.listNotifications.map((noti, index) => {
                                return (
                                    <NotificationItem 
                                        key={noti.id}
                                        id={index}
                                        type={noti.type}
                                        html={noti.html}
                                        value={noti.value}
                                        markAsRead={this.markAsRead}
                                    />
                                )
                            }) : (
                                < NotificationItem key="no-new-notification" html={""} value='No new notification for now'/>
                            )}
                        </ul>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Notifications;



Notification.propTypes = {
    displayDrawer: PropTypes.bool
}

Notification.defaultProps = {
    displayDrawer: false
}
