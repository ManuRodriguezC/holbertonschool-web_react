import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { map } from 'inmutable'

export const stateInit = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: { },
};

export default function uiReducer(state = stateInit, action) {
  
  state = Map(state)
  if (!action) return state;

  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', true );
    }
    case HIDE_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', false );
    }
    case LOGIN_SUCCESS: {
      return state.set('isUserLoggedIn', true );
    }
    case LOGIN_FAILURE: {
      return state.set('isUserLoggedIn', false );
    }
    case LOGOUT: {
      return state.set('isUserLoggedIn', false );
    }
    default: {
      return state;
    }
  };
}