import { userConstants } from "../../../system/constants/GlobalConstants";

const initialState = {
  userData: {},
  userList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_CREATED:
      return {
        ...state,
        userData: action.payload,
      };
    case userConstants.GET_USER:
      return {
        ...state,
        userList: action.payload,
      };
    case userConstants.UPDATE_USER:
      return {
        ...state,
        userList: action.payload,
      };
    case userConstants.DELETE_USER:
      return {
        ...state,
        userList: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
