export const AccountActionType = {
  Create: "create",
  Update: "update",
  Delete: "delete",
  Details: "details",
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
export const accountTypeList = [
  { id: 2, label: "Savings Account", value: "Savings Account" },
  { id: 3, label: "Piority Acoount", value: "Piority Acoount" },
  { id: 4, label: "Preferred Accun", value: "Preferred Accun" },
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

export const modalConstants = {
  ModalOpen: "modalOpen",
  SidebaroOpen: "sideBarOpen",
};

export const authConstants = {
  Failed: "failed",
  Success: "success",
};

export const Url = {
  BASE_URL: process.env.REACT_APP_BASE_API_URL,
  USER_LIST: "UserList",
  ACCOUNT_LIST: "AccountList",
  USER_GROUP_LIST: "UserGroupList",
};
