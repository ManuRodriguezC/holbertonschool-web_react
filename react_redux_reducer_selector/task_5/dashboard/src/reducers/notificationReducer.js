import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = fromJS({
  filter: 'DEFAULT',
  result: [],
  entities: { },
});

export default function notificationReducer(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const mapped = action.data.map(notification => ({ ...notification, isRead: false }));
      const normalized = notificationsNormalizer(mapped);
      const immutableNormalized = fromJS(normalized);
      const mergedState = state.merge(immutableNormalized);

      return mergedState;
    }
    case MARK_AS_READ: {
      return state.setIn(['entities', 'notifications', action.index.toString(), 'isRead'], true);
    }
    case SET_TYPE_FILTER: {
      return state.set('filter', action.filter);
    }
    default: {
      return state;
    }
  }
}