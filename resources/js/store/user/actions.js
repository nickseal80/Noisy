import actionTypes from './action-types';

export const setUserData = (user) => ({
  type: actionTypes.SET_USER_DATA,
  user,
});