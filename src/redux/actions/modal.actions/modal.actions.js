import { modalConstants } from "../../../system/constants/GlobalConstants";

export const handleModal = () => {
  return async (dispatch) => {
     dispatch({
      type: modalConstants.ModalOpen,
    });
  };
};
export const handleSidebar = (data) => {
  return async (dispatch) => {
    dispatch({
      type: modalConstants.SidebaroOpen,
      payload: data,
    });
  };
};
export const modalActions = {
  handleModal,
  handleSidebar,
};
