import React from "react";
import "./Login.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleInputChange,
  performLogin,
  INPUT_NAME,
  INPUT_PASS,
} from "../redux/reducers/userSlice";

const Login = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const referenceName = useRef(null);
  const referencePass = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      performLogin({
        username: user.inputs[INPUT_NAME],
        password: user.inputs[INPUT_PASS],
      })
    );
  };

  return (
    <>
     <div className="forma">
      {!user.user_id ? (
   
        <form method='post' onSubmit={(e) => handleSubmit(e)}>
         
          <div className='loginPage  '>
            <h1>Login</h1>
            <div className='emailContainer' >
              <div>Enter your name here: </div>
              <input
              className="mail"
                type='text'
                ref={referenceName}
                onChange={() =>
                  dispatch(
                    handleInputChange({
                      val: referenceName.current.value,
                      type: INPUT_NAME,
                    })
                  )
                }
                value={user.inputName}></input>
            </div>
            <br></br>
          
            <div className='passwordContainer'>
          
              <div>Enter your password here: </div>

              <input
              className="pass"
                type='text '
                ref={referencePass}
                onChange={() =>
                  dispatch(
                    handleInputChange({
                      val: referencePass.current.value,
                      type: INPUT_PASS,
                    })
                  )
                }
                value={user.inputPass}></input>
            </div>
            {user.loginStatus !== "" && <p>{user.loginStatus}</p>}
            <br></br>
            <input
              className='button '
              type='submit'
              value='Click here to login'
            />
          </div>
        </form>
        
        
      ) : (
        navigate("/home", { replace: true })
      )}
      </div>
    </>
  );
};

export default Login;
