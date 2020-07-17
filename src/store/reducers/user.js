import { SETUSER, LOGOUT } from "../actions/types";

const user = (state={}, action) => {
  switch (action.type) {
    case SETUSER:
      return {
        isAuthenticated: true,
        profile: action.payload
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        profile: {}
      };
    default:
      state = {
        isAuthenticated: localStorage.getItem('user') ? true : false,
        profile: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
      }
      return state;
  }
}

export default user;
