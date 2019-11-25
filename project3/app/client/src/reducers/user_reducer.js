import { LOGIN_USER, REGISTER_USER } from 'actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, register: action.payload };

    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    default:
      return state;
  }
}
