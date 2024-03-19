import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import { UserActionType } from "../../../system/constants/GlobalConstants";
import { userGroupActions } from "../../../redux/actions/userGroup.actions/userGroup.actions";
import {
  FormLabel,
  InputGrouptext,
} from "../../../shared/components/wrapperComponent/wrapperComponent";
import {
  SubmitButton,
  CancelButton,
} from "../../../shared/components/systemComponents/systemComponents";

const ModalUserGroup = (props) => {
  const [isEdit, setisEdit] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataObject = {
      userGroupName: data.userGroupName,
      currentUserId: props.userData.data.id,
    };
    if (props.action === UserActionType.Update) {
      return props.updateUserGroup({ ...dataObject, id: props.row.id });
    }
    props.createUserGroup(dataObject);
  };

  const handleCancel = () => {
    props.onHide();
  };

  useEffect(() => {
    props.action === UserActionType.Details
      ? setisEdit(true)
      : setisEdit(false);

    if (
      props.action === UserActionType.Update ||
      props.action === UserActionType.Details
    ) {
      setValue("userGroupName", props.row.userGroupName);
    }
  }, []);

  return (
    <section>
      <Form
        noValidate
        className="ViewUserContent"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="field fieldSignup mb-3">
          <FormLabel> User Group Name</FormLabel>
          <InputGroup>
            <InputGrouptext>
              <i class="fa-regular fa-user color-gray"></i>
            </InputGrouptext>
            <Form.Control
              className={`rounded-0 light-black ${
                errors.userGroupName ? "error-border" : ""
              }`}
              {...register("userGroupName", {
                required: "User Group Name is Required",
                pattern: {
                  value: /^[^\s]+(?:$|.*[^\s]+$)/,
                  message: "Enter valid Group Name",
                },
              })}
              disabled={isEdit}
              id="email"
            />
          </InputGroup>
          {errors.userGroupName && (
            <p className="error-text ">{errors.userGroupName.message}</p>
          )}
        </div>
        {props.action === UserActionType.Details ? (
          ""
        ) : (
          <div className="d-flex justify-content-center ">
            <SubmitButton>Submit</SubmitButton>
            <CancelButton onClick={handleCancel}> Cancel</CancelButton>
          </div>
        )}
      </Form>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createUserGroup: (data) => dispatch(userGroupActions.createUserGroup(data)),
  updateUserGroup: (data) => dispatch(userGroupActions.updateUserGroup(data)),
});
export default connect(null, mapDispatchToProps)(ModalUserGroup);
