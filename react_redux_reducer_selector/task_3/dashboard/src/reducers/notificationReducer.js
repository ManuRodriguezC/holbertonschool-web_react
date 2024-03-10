import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

export const stateInit = {
  notifications: [],
  filter: 'DEFAULT',
};

export default function notificationReducer(state = stateInit, action) {
  if (!action) return state;

  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        notifications: action.data.map(notification => ({
          ...notification,
          isRead: false,
        })),
      };
    }
    case MARK_AS_READ: {
      return {
        ...state,
        notifications: state.notifications.map(notification => ({
          ...notification,
          isRead: notification.id === action.index ? true : notification.isRead,
        })),
      };
    }
    case SET_TYPE_FILTER: {
      return { ...state, filter: action.filter };
    }
    default: {
      return state;
    }
  }
}