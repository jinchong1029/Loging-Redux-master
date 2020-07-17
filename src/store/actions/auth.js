import { logoutUser, setUser } from "./actionCreators";

/**
 * Login user action
 */
export const loginUser = (state) => dispatch => {
  let user = {
    email: state.email, 
    password: state.password
  };
  localStorage.setItem('user', JSON.stringify(user));
  dispatch(setUser(user));
  window.location.href="/dashboard";
}

/**
 * Logout action
 */
export const logout = () => dispatch => {
  localStorage.removeItem('user');
  dispatch(logoutUser());
  window.location.href="/";
}
