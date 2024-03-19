import { combineReducers } from "redux";

import authReducer from "./auth.reducer/auth.reducer";
import modalReducer from "./modal.reducers/modal.reducer";
import userGroupReducer from "./userGroup.reducers/userGroup.reducers";
import userReducer from "./user.reducers/user.reducers";

const rootReducer = combineReducers({
  authReducer: authReducer,
  modalReducer: modalReducer,
  userGroupReducer: userGroupReducer,
  userReducer: userReducer,
});

export default rootReducer;
