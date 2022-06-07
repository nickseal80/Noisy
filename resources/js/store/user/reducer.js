import actionTypes from './action-types';

const initialState = {
  data: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SET_USER_DATA:
      return {...state, data: action.user};

    default:
      return state;

  }
};

export default user;