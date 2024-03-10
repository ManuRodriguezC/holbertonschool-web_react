import { Map } from 'immutable';

export function filterTypeSelected(state) {
  return state.get('filter');
}

export function getNotifications(state) {
  return state.getIn(['entities', 'notifications']) || Map();
}

export function getUnreadNotifications(state) {
  return (
    state.getIn(['entities', 'notifications']) || Map()
  ).filter(notification => !(notification.isRead));
}