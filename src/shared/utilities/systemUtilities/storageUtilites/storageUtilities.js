import { localStorageConstants } from "../../../../system/constants/GlobalConstants";

export const getCurrentUserLocalStorage = () => {
  return JSON.parse(localStorage.getItem(localStorageConstants.CURRENT_USER));
};

export const setCurrentUserLocalStorage = (response) => {
  return localStorage.setItem(
    localStorageConstants.CURRENT_USER,
    JSON.stringify(response)
  );
};
