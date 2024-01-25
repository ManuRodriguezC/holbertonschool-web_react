import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css'

export default function NotificationItem({ type, html, value }) {
 return (
    <li data-notification-type={type}>
      <span dangerouslySetInnerHTML={{ __html: html + value }} />
    </li>
 );
};

NotificationItem.propTypes = {
  types: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};
