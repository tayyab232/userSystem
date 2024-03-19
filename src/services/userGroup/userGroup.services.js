import axios from "axios";
import { Url } from "../../system/constants/GlobalConstants";
import { userServices } from "../user/user.services";

const { USER_GROUP_LIST, BASE_URL } = Url;

async function createUserGroup(data) {
  const response = await getUsersGroup(data);
  const isExist = response.find(
    (item) => item.userGroupName == data.userGroupName
  );
  if (isExist) {
    return { status: "failed", error: "User Group Already Exist" };
  }
  return axios
    .post(`${BASE_URL}/${USER_GROUP_LIST}`, {
      ...data,
      id: new Date().getTime().toString(),
    })
    .then((data) => data);
}

async function getUsersGroup(data) {
  const response = await axios.get(`${BASE_URL}/${USER_GROUP_LIST}`);
  return response.data.filter(
    (item) => item.currentUserId == data.currentUserId
  );
}

async function updateUserGroup(data) {
  return axios
    .put(`${BASE_URL}/${USER_GROUP_LIST}/${data.id}`, { ...data })
    .then(() => getUsersGroup(data));
}

async function deleteUserGroup(data) {
  const usersList = await userServices.getUsers(data);
  const isExist = usersList.find(
    (item) => item.userGroupName == data.userGroupName
  );
  if (isExist) {
    return {
      status: "failed",
      error: "This enitity is associated with another entity in users",
    };
  }

  return {
    status: "success",
    data: await axios
      .delete(`${BASE_URL}/${USER_GROUP_LIST}/${data.id}`, { ...data })
      .then(() => getUsersGroup(data)),
  };
}

export const userGroupServices = {
  createUserGroup,
  getUsersGroup,
  updateUserGroup,
  deleteUserGroup,
};
