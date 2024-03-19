export const UserActionType = {
  Create: "create",
  Update: "update",
  Delete: "delete",
  Details: "details",
};
export const actionFor = {
  USER_PAGE: "userPage",
  USER_GROUP_PAGE: "userGroupPage",
};
export const actionTypeConstant = {
  Deposite: "deposite",
  Withdraw: "withdraw",
};

export const educationLevelList = [
  { id: 2, label: "High School or Below", value: "High School or Below" },
  { id: 3, label: "Undergraduate", value: "Undergraduate" },
  { id: 4, label: "Masters Degree", value: "Masters Degree" },
];

export const genderList = [
  { id: 2, label: "Male", value: "Male" },
  { id: 3, label: "Female", value: "Female" },
  { id: 4, label: "Other", value: "Other" },
];
export const actionType = [
  { id: 2, label: "Deposite", value: "deposite" },
  { id: 3, label: "Withdraw", value: "withdraw" },
];

export const accountConstants = {
  AccountCreated: "AccountCreated",
  GetAccounts: "GetAccounts",
  DeleteAccount: "DeleteAccount",
  UpdateAccount: "UpdateAccount",
};

export const userGroupConstants = {
  USERGROUP_CREATED: "UserGroupCreated",
  GET_USERGROUP: "GetUserGroup",
  DELETE_USERGROUP: "DeleteUserGroup",
  UPDATE_USERGROUP: "UpdateUserGroup",
};
export const userConstants = {
  USER_CREATED: "UserCreated",
  GET_USER: "GetUser",
  DELETE_USER: "DeleteUser",
  UPDATE_USER: "UpdateUser",
};
export const modalConstants = {
  ModalOpen: "modalOpen",
  SidebaroOpen: "sideBarOpen",
};

export const authConstants = {
  Failed: "failed",
  Success: "success",
};
export const status = {
  Failed: "failed",
  Success: "success",
};
export const Url = {
  BASE_URL: process.env.REACT_APP_BASE_API_URL,
  USER_LIST: "UserList",
  ACCOUNT_LIST: "AccountList",
  USER_GROUP_LIST: "UserGroupList",
};

export const localStorageConstants = {
  CURRENT_USER: "currentUser",
};
