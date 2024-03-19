import { LoginConstants } from "../../../system/constants/LoginConstants";
import { userServices } from "../../../services/user/user.services";
import { userConstants } from "../../../system/constants/GlobalConstants";
import { modalConstants } from "../../../system/constants/GlobalConstants";
import { ToastifyUtilities } from "../../../shared/utilities/systemUtilities/Toastify/toastifyUtilities";

export const createUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await userServices.createUser(data);
      if (response.statusText === LoginConstants.Created) {
        dispatch({
          type: userConstants.USER_CREATED,
          payload: response.data,
        });
        dispatch({  
          type: modalConstants.ModalOpen,
        });
        ToastifyUtilities.showSuccess("User Created Successfully");
      } else {
        ToastifyUtilities.showError(response.error);
      }
    } catch (error) {
      console.log({ error });
      ToastifyUtilities.showError("An Error Occured");
    }
  };
};

export const getUsers = (data) => {
  return async (dispatch) => {
    try {
      const response = await userServices.getUsers(data);
       if (response) {
        dispatch({
          type: userConstants.GET_USER,
          payload: response,
        });
      } else {
        ToastifyUtilities.showError("An Error Occured");
      }
    } catch (error) {
      console.log({ error });
    }
  };
};
export const updateUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await userServices.updateUser(data);
      if (response) {
        dispatch({
          type: userConstants.UPDATE_USER,
          payload: response,
        });
        dispatch({
          type: modalConstants.ModalOpen,
        });
        ToastifyUtilities.showSuccess("User Updated Successfully");
      } else {
        ToastifyUtilities.showError("An Error Occured");
      }
    } catch (error) {
      console.log({ error });
    }
  };
};
export const deleteUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await userServices.deleteUser(data);
      if (response) {
        dispatch({
          type: userConstants.DELETE_USER,
          payload: response,
        });
        dispatch({
          type: modalConstants.ModalOpen,
        });
        ToastifyUtilities.showSuccess("User Deleted Successfully");
      } else {
        ToastifyUtilities.showError("An Error Occured");
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const userActions = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
