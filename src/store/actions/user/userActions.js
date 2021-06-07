import userActionTypes from "./userActionTypes";

const createUserRequest = (user) => {
  return {
    type: userActionTypes.CREATE_REQUEST,
    payload: { user },
  };
};

const createUserSuccess = (user) => {
  return {
    type: userActionTypes.CREATE_SUCCESS,
    payload: { user },
  };
};

export const userAction = {
  createUserRequest,
  createUserSuccess,
};
