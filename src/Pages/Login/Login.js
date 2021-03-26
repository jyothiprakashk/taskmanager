import React, { useState } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../Actions/Taskmanager";
import "bootstrap/dist/css/bootstrap.css";

function LoginPage(props) {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handlePasswordChange = (e) => {
    setState({ ...state, password: e.target.value });
  };
  const EmailChange = (e) => {
    setState({ ...state, email: e.target.value });
  };

  const LoginSubmission = async (e) => {
    e.preventDefault();
    dispatch(Login(state));
  };

  return (
    <React.Fragment>
      <div className="Login_container">
        <div className="Login_form row d-flex flex-column col-md-4 col-sm-12">
          <div className="Login_header">
            <h2>Login</h2>
          </div>
          <div>
            <form onSubmit={LoginSubmission}>
              <input
                name="email"
                onChange={EmailChange}
                className="textInput"
                placeholder="Email Address"
                size="50"
                required
                value={state.email}
              />
              <input
                name="password"
                onChange={handlePasswordChange}
                className="textInput"
                placeholder="Password"
                size="50"
                type={hidden ? "password" : "text"}
                required
                value={state.password}
              />

              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
