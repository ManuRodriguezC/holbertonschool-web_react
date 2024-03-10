import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseActionTypes';
import uiReducer, { initialState } from './uiReducer';

describe('uiReducer', () => {
  it('return `stateInit` when nor passed state', () => {
    expect(uiReducer()).toStrictEqual(initialState);
  });
  it('return `stateInit` when a `SELECT_COURSE` action is passed', () => {
    expect(uiReducer(initialState, { type: SELECT_COURSE, index: -908 })).toStrictEqual(initialState);
  });
  it('return new state with isNotificationDrawerVisible=true, when a `DISPLAY_NOTIFICATION_DRAWER` action is passed', () => {
    expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER }).isNotificationDrawerVisible).toBe(true);
  });
});