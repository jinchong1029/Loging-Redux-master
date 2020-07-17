import { LOGOUT, GET_ERRORS, SETUSER } from "./types";

export function setUser(user) {
  return {
    type: SETUSER,
    payload:  user
  }
}

export function logoutUser() {
  return {
    type: LOGOUT
  }
}

export function getErrors(errors) {
  return {
    type: GET_ERRORS,
    payload: errors
  }
}
