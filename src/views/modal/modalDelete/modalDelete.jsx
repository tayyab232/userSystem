import { connect } from "react-redux";

import { userActions } from "../../../redux/actions/user.actions/user.actions";
import { userGroupActions } from "../../../redux/actions/userGroup.actions/userGroup.actions";
import { actionFor } from "../../../system/constants/GlobalConstants";
import {
  SubmitButton,
  CancelButton,
} from "../../../shared/components/systemComponents/systemComponents";

const ModalDelete = (props) => {
  const handleCancel = () => {
    props.onHide();
  };

  const handleDelete = () => {
    if (props.dataFor === actionFor.USER_GROUP_PAGE) {
      return props.deleteUserGroup(props.row);
    } else {
      return props.deleteUser(props.row);
    }
  };

  return (
    <div className="d-flex justify-content-center ">
      <SubmitButton onClick={handleDelete}>Submit</SubmitButton>
      <CancelButton onClick={handleCancel}> Cancel</CancelButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (data) => dispatch(userActions.deleteUser(data)),
  deleteUserGroup: (data) => dispatch(userGroupActions.deleteUserGroup(data)),
});
export default connect(null, mapDispatchToProps)(ModalDelete);
