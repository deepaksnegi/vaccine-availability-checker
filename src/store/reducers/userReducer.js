import userActionTypes from "../actions/user/userActionTypes";

const user = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  user,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.CREATE_SUCCESS:
      return { ...state, ...action.payload };

    case userActionTypes.GET:
      return { ...state };

    default:
      return { ...state };
  }
};

export default userReducer;
