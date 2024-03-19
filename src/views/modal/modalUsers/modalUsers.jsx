import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import {
  UserActionType,
  genderList,
} from "../../../system/constants/GlobalConstants";
import { userActions } from "../../../redux/actions/user.actions/user.actions";
import {
  FormLabel,
  InputGrouptext,
} from "../../../shared/components/wrapperComponent/wrapperComponent";
import {
  SubmitButton,
  CancelButton,
} from "../../../shared/components/systemComponents/systemComponents";

const ModalUsers = (props) => {
  const [isEdit, setisEdit] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataObject = {
      ...data,
      currentUserId: props.userData.data.id,
    };
    if (props.action === UserActionType.Update) {
      return props.updateUser({ ...dataObject, id: props.row.id });
    }
    props.createUser(dataObject);
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
      setValue("email", props.row.email);
      setValue("firstName", props.row.firstName);
      setValue("lastName", props.row.lastName);
      setValue("gender", props.row.gender);
      setValue("phoneNumber", props.row.phoneNumber);
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
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div class="field fieldSignup mb-3">
              <FormLabel> First Name</FormLabel>
              <InputGroup>
                <InputGrouptext>
                  <i class="fa-regular fa-user color-gray"></i>
                </InputGrouptext>
                <Form.Control
                  className={`rounded-0 light-black ${
                    errors.firstName ? "error-border" : ""
                  }`}
                  {...register("firstName", {
                    required: "First Name is Required",
                    pattern: {
                      value: /^[^\s]+(?:$|.*[^\s]+$)/,
                      message: "Enter valid First Name",
                    },
                  })}
                  disabled={isEdit}
                />
              </InputGroup>
              {errors.firstName && (
                <p className="error-text ">{errors.firstName.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div class="field fieldSignup mb-3">
              <FormLabel> Last Name</FormLabel>
              <InputGroup>
                <InputGrouptext>
                  <i class="fa-regular fa-user color-gray"></i>
                </InputGrouptext>
                <Form.Control
                  className={`rounded-0 light-black ${
                    errors.lastName ? "error-border" : ""
                  }`}
                  {...register("lastName", {
                    required: "Last Name is Required",
                    pattern: {
                      value: /^[^\s]+(?:$|.*[^\s]+$)/,
                      message: "Enter valid Last Name",
                    },
                  })}
                  disabled={isEdit}
                />
              </InputGroup>
              {errors.lastName && (
                <p className="error-text ">{errors.lastName.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            {" "}
            <div class="field fieldSignup mb-3">
              <FormLabel>Email</FormLabel>

              <Form.Label className="Form-labels light-black">Email</Form.Label>
              <InputGroup>
                <InputGrouptext>
                  <i class="fa-solid fa-envelope color-gray"></i>
                </InputGrouptext>
                <Form.Control
                  className={`rounded-0 light-black ${
                    errors.email ? "error-border" : ""
                  }`}
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/i,
                      message: "Invalid Email",
                    },
                  })}
                  id="email"
                  type="email"
                />
              </InputGroup>
              {errors.email && (
                <p className="error-text ">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div class="field fieldSignup mb-3">
              <FormLabel> Phone Number</FormLabel>
              <InputGroup>
                <InputGrouptext>
                  <i class="fa-solid fa-phone color-gray"></i>
                </InputGrouptext>
                <Form.Control
                  className={`rounded-0 light-black ${
                    errors.phoneNumber ? "error-border" : ""
                  }`}
                  {...register("phoneNumber", {
                    required: "Phone Number is Required",
                  })}
                  disabled={isEdit}
                />
              </InputGroup>
              {errors.phoneNumber && (
                <p className="error-text ">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div class="field fieldSignup mb-3">
              <FormLabel> User Group</FormLabel>
              <InputGroup>
                <InputGrouptext>
                  <i class="fa-solid fa-user-friends color-gray"></i>
                </InputGrouptext>
                <Form.Select
                  className={`rounded-0 light-black ${
                    errors.userGroupName ? "error-border" : ""
                  }`}
                  {...register("userGroupName", {
                    required: "User Group Name is Required",
                  })}
                  aria-label="Default select example"
                  disabled={isEdit}
                >
                  <option value="">Select User Group</option>
                  {props.userGroupList.map((userGroup) => (
                    <option key={userGroup.id} value={userGroup.userGroupName}>
                      {userGroup.userGroupName}
                    </option>
                  ))}
                </Form.Select>
              </InputGroup>
              {errors.userGroupName && (
                <p className="error-text ">{errors.userGroupName.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {" "}
            <div class="field fieldSignup mb-3">
              <FormLabel> Gender</FormLabel>
              <InputGroup>
                <InputGrouptext>
                  <i class="fa-solid fa-user-friends color-gray"></i>
                </InputGrouptext>
                <Form.Select
                  className={`rounded-0 light-black ${
                    errors.userGroupName ? "error-border" : ""
                  }`}
                  {...register("gender", {
                    required: "Gender is Required",
                  })}
                  aria-label="Default select example"
                  disabled={isEdit}
                >
                  <option value="">Select Gender</option>
                  {genderList.map((gender) => (
                    <option key={gender.id} value={gender.value}>
                      {gender.value}
                    </option>
                  ))}
                </Form.Select>
              </InputGroup>
              {errors.gender && (
                <p className="error-text ">{errors.gender.message}</p>
              )}
            </div>
          </div>
        </div>
        {props.action === UserActionType.Details ? (
          ""
        ) : (
          <div className="d-flex justify-content-center mt-2 ">
            <SubmitButton>Submit</SubmitButton>
            <CancelButton onClick={handleCancel}> Cancel</CancelButton>
          </div>
        )}
      </Form>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createUser: (data) => dispatch(userActions.createUser(data)),
  updateUser: (data) => dispatch(userActions.updateUser(data)),
});
export default connect(null, mapDispatchToProps)(ModalUsers);
