import axios from "axios";
import { Url } from "../../system/constants/GlobalConstants";

const { USER_LIST, BASE_URL } = Url;

async function createUser(data) {
  return axios
    .post(`${BASE_URL}/${USER_LIST}`, {
      ...data,
      id: new Date().getTime().toString(),
    })
    .then((data) => data);
}

async function getUsers(data) {
  const response = await axios.get(`${BASE_URL}/${USER_LIST}`);
  return response.data.filter(
    (item) => item.currentUserId == data.currentUserId
  );
}

async function updateUser(data) {
  return axios
    .put(`${BASE_URL}/${USER_LIST}/${data.id}`, { ...data })
    .then(() => getUsers(data));
}

async function deleteUser(data) {
  return axios
    .delete(`${BASE_URL}/${USER_LIST}/${data.id}`, { ...data })
    .then(() => getUsers(data));
}

export const userServices = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
