import { userGroupConstants } from "../../../system/constants/GlobalConstants";

const initialState = {
  userGroupData: {},
  userGroupList: [],
};

const userGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case userGroupConstants.USERGROUP_CREATED:
      return {
        ...state,
        userGroupData: action.payload,
      };
    case userGroupConstants.GET_USERGROUP:
      return {
        ...state,
        userGroupList: action.payload,
      };
    case userGroupConstants.UPDATE_USERGROUP:
      return {
        ...state,
        userGroupList: action.payload,
      };
    case userGroupConstants.DELETE_USERGROUP:
      return {  
        ...state,
        userGroupList: action.payload,
      };

    default:
      return state;
  }
};

export default userGroupReducer;
