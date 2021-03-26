import React, { useState } from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import Logout from "../Logout";
import { UserLogout } from "../../Actions/Taskmanager";
function Header() {
  const dispatch = useDispatch();
  const { title, email } = useSelector(({ reducer }) => reducer);
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const logout = () => {
    dispatch(UserLogout());
  };
  return (
    <div className="header">
      <div className="d-flex flex-column">
        <div>{title}</div>
      </div>
      <div className="d-flex align-items-center">
        <div onClick={handleClick}>Logout</div>
        <div style={{ marginLeft: "20px" }}>SpiceBlue</div>
      </div>
      {showModal ? (
        <Logout
          handleClick={handleClick}
          handleClose={handleClose}
          desc={", Are you sure you want to logout from Task Manager? "}
          header={"Confirm Logout"}
          modal={showModal}
          logout={logout}
          email={email}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
