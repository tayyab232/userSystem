import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const password = watch("password");

  const onSubmit = (data) => {
    console.log({ data });
    // dispatch(authActions.signUp(data, navigate));
  };

  return (
    <div className="bg-gray">
      <div className="d-flex justify-content-center h-100 min-vh-100 align-items-center">
        <div class="card p-5 rounded-0 border-0" style={{ width: "30rem" }}>
          <div class="card-body">
            <div className="border-left ">
              <div className=" ms-2 default-color fs-4 fw-bold">
                {" "}
                Hazel's Self Service Solutions Platform
              </div>
            </div>
            <form
              action="#"
              noValidate
              className="ViewUserContent mt-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div class="field fieldSignup mb-3">
                <Form.Label className="Form-labels light-black">Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1" className="rounded-0">
                    <i class="fa-regular fa-user color-gray"></i>{" "}
                  </InputGroup.Text>
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
              <div className="space"></div>
              <div class="field space fieldSignup mb-3">
                <Form.Label className="Form-labels light-black">Password </Form.Label>
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1" className="rounded-0">
                    <i class="fa-solid fa-key color-gray"></i>{" "}
                  </InputGroup.Text>
                  <input
                    className={`form-control light-black rounded-0 ${
                      errors.password ? "error-border" : ""
                    }`}
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
                </InputGroup>
                {errors.password && (
                  <p className=" error-text ">{errors.password.message}</p>
                )}
              </div>
              {/* <div class="field fieldSignup mb-3">
                <Form.Label className="Form-labels ">
                  Confirm Password
                </Form.Label>{" "}
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1" className="rounded-0">
                    @
                  </InputGroup.Text>
                  <Form.Control
                    className={`  rounded-0 ${
                      errors.password ? "error-border" : ""
                    }`}
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    id="password"
                    type="password"
                  />
                </InputGroup>
                {errors.confirmPassword && (
                  <p className=" error-text ">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div> */}

              <div class="mt-5 mb-2">
                <Button
                  className="submitButton btn btn-primary  "
                  type="submit"
                >
                  Login
                </Button>
              </div>
              <div class="signup-link mt-2 d-flex justify-content-center light-black">
                Don't have an Account?
              </div>
              <div class="signup-link mt-2 d-flex justify-content-center">
                <Link to="/signup">SignUp Now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
