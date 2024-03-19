import { LoginConstants } from "../../../system/constants/LoginConstants";
import { userGroupServices } from "../../../services/userGroup/userGroup.services";
import { userGroupConstants } from "../../../system/constants/GlobalConstants";
import { modalConstants } from "../../../system/constants/GlobalConstants";
import { ToastifyUtilities } from "../../../shared/utilities/systemUtilities/Toastify/toastifyUtilities";
import { status } from "../../../system/constants/GlobalConstants";

export const createUserGroup = (data) => {
  return async (dispatch) => {
    try {
      const response = await userGroupServices.createUserGroup(data);
      if (response.statusText === LoginConstants.Created) {
        dispatch({
          type: userGroupConstants.USERGROUP_CREATED,
          payload: response.data,
        });
        dispatch({
          type: modalConstants.ModalOpen,
        });
        ToastifyUtilities.showSuccess("User Group Created Successfully");
      } else {
        ToastifyUtilities.showError(response.error);
      }
    } catch (error) {
      console.log({ error });
      ToastifyUtilities.showError("An Error Occured");
    }
  };
};

export const getUsersGroup = (data) => {
  return async (dispatch) => {
    try {
      const response = await userGroupServices.getUsersGroup(data);
      if (response) {
        dispatch({
          type: userGroupConstants.GET_USERGROUP,
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
export const updateUserGroup = (data) => {
  return async (dispatch) => {
    try {
      const response = await userGroupServices.updateUserGroup(data);
      if (response) {
        dispatch({
          type: userGroupConstants.UPDATE_USERGROUP,
          payload: response,
        });
        dispatch({
          type: modalConstants.ModalOpen,
        });
        ToastifyUtilities.showSuccess("User Group Updated Successfully");
      } else {
        ToastifyUtilities.showError("An Error Occured");
      }
    } catch (error) {
      console.log({ error });
    }
  };
};
export const deleteUserGroup = (data) => {
  return async (dispatch) => {
    try {
      const response = await userGroupServices.deleteUserGroup(data);
      if (response.status == status.Success) {
        dispatch({
          type: userGroupConstants.DELETE_USERGROUP,
          payload: response.data,
        });
        dispatch({
          type: modalConstants.ModalOpen,
        });
        ToastifyUtilities.showSuccess("User Group Deleted Successfully");
      } else {
        ToastifyUtilities.showError(response.error);
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const userGroupActions = {
  createUserGroup,
  getUsersGroup,
  updateUserGroup,
  deleteUserGroup,
};
