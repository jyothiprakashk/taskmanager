import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Header/Header.css";

const Modal = ({
  handleClick,
  handleClose,
  desc,
  header,
  logout,
  email,
  task,
}) => {
  return (
    <div>
      <div>
        <Dialog
          open={handleClick}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="logout_popup"
        >
          <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {email && email.split("@")[0]}
              {desc}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <React.Fragment>
              <Button onClick={logout} color="primary">
                {task ? "Delete" : "Logout"}
              </Button>
              <div>|</div>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </React.Fragment>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Modal;
