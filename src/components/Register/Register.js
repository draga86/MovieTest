import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleInputChange,
  performRegister,
  INPUT_FIRSTNAME,
  INPUT_LASTNAME,
  INPUT_EMAIL,
  INPUT_NAME,
  INPUT_PASS,
  INPUT_PASS_PASS,
} from "../redux/reducers/userSlice";

const Register = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const referenceFirstName = useRef(null);
  const referenceLastName = useRef(null);
  const referenceEmail = useRef(null);
  const referenceName = useRef(null);
  const referencePass = useRef(null);
  const referencePassPass = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      performRegister({
        name: user.inputs[INPUT_FIRSTNAME],
        surname: user.inputs[INPUT_LASTNAME],
        email: user.inputs[INPUT_EMAIL],
        username: user.inputs[INPUT_NAME],
        password: user.inputs[INPUT_PASS],
      })
    );
  };

  return (
    <>
      {!user.user_id ? (
        <form
          className="mx-1 mx-md-4"
          method="post"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="text"
                id="firstname"
                className="form-control"
                ref={referenceFirstName}
                onChange={() =>
                  dispatch(
                    handleInputChange({
                      val: referenceFirstName.current.value,
                      type: INPUT_FIRSTNAME,
                    })
                  )
                }
                value={user[INPUT_FIRSTNAME]}
              ></input>
              <label className="form-label" for="firstname">
                Firstname:
              </label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="text"
                id="lastname"
                className="form-control"
                ref={referenceLastName}
                onChange={() =>
                  dispatch(
                    handleInputChange({
                      val: referenceLastName.current.value,
                      type: INPUT_LASTNAME,
                    })
                  )
                }
                value={user[INPUT_LASTNAME]}
              ></input>
              <label className="form-label" for="lastname">
                Lastname:
              </label>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="email"
                id="email"
                className="form-control"
                ref={referenceEmail}
                onChange={() =>
                  dispatch(
                    handleInputChange({
                      val: referenceEmail.current.value,
                      type: INPUT_EMAIL,
                    })
                  )
                }
                value={user[INPUT_EMAIL]}
              ></input>
              <label className="form-label" for="email">
                Email:
              </label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="text"
                id="name"
                className="form-control"
                ref={referenceName}
                onChange={() =>
                  dispatch(
                    handleInputChange({
                      val: referenceName.current.value,
                      type: INPUT_NAME,
                    })
                  )
                }
                value={user[INPUT_NAME]}
              ></input>
              <label className="form-label" for="name">
                Username:
              </label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                id="pass"
                className="form-control"
                ref={referencePass}
                onChange={() =>
                  dispatch(
                    handleInputChange({
                      val: referencePass.current.value,
                      type: INPUT_PASS,
                    })
                  )
                }
                value={user[INPUT_PASS]}
              ></input>
              <label className="form-label" for="pass">
                Password
              </label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                id="passpass"
                className="form-control"
                ref={referencePassPass}
                onChange={() =>
                  dispatch(
                    handleInputChange({
                      val: referencePassPass.current.value,
                      type: INPUT_PASS_PASS,
                    })
                  )
                }
                value={user[INPUT_PASS_PASS]}
              ></input>
              <label className="form-label" for="passpass">
                Repeat your password
              </label>
            </div>
          </div>

          {user.loginStatus !== "" && <p>{user.loginStatus}</p>}

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <input
              className="btn btn-primary btn-lg"
              type="submit"
              value="Click here to register"
            />
          </div>
        </form>
      ) : (
        navigate("/dashboard", { replace: true })
      )}
    </>
  );
};

export default Register;
