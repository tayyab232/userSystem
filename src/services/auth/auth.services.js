import axios from "axios";
import { Url } from "../../system/constants/GlobalConstants";

const { BASE_URL, ACCOUNT_LIST } = Url;

export function getAccountList(data) {
  return axios
    .get(`${BASE_URL}/${ACCOUNT_LIST}`)
    .then((accountList) =>
      accountList.data.find((item) => item.email == data.email)
    );
}

async function signUp(data) {
  delete data.confirmPassword;
  const isExist = await getAccountList(data);
  if (isExist) {
    return { status: "failed", error: "Email Already Registered" };
  }
  return {
    status: "success",
    error: null,
    data: axios
      .post(`${BASE_URL}/${ACCOUNT_LIST}`, {
        ...data,
        id: new Date().getTime().toString(),
      })
      .then((data) => data),
  };
}

async function login(data) {
  const isExist = await getAccountList(data);
  if (!isExist) {
    return { status: "failed", error: "Email Not Exist" };
  }
  if (isExist.password === data.password) {
    return {
      status: "success",
      error: null,
      data: isExist,
    };
  } else {
    return { status: "failed", error: "Invalid Credentials" };
  }
}

const logout = () => {
  localStorage.clear();
};

export const authService = {
  signUp,
  login,
  logout,
  getAccountList,
};
