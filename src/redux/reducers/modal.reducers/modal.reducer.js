import { modalConstants } from "../../../system/constants/GlobalConstants";
const initialState = {
  modalOpen: false,
  sidebarOpen: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalConstants.ModalOpen:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case modalConstants.SidebaroOpen:
      return {
        ...state,
        sidebarOpen: action.payload,
      };

    default:
      return state;
  }
};
export default modalReducer;
