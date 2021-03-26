import React, { useState, useEffect } from "react";
import "./GetTasks.css";
import { DeleteTask, SingleTask } from "../../Actions/Taskmanager";
import { useDispatch, useSelector } from "react-redux";
import Editicon from "../../Images/edit.svg";
import deleteimage from "../../Images/delete-button.svg";
import DeleteComponent from "../../Components/Logout";
import { ActionType } from "../../Constants";
const GetTasks = ({ userdata, Edit, props }) => {
  const [deleteid, setDeleteId] = useState("");
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const Delete = (id) => {
    dispatch(DeleteTask(deleteid));
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };
  const [showModal, setShowModal] = useState(false);
  const handleClick = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const GettingSingleTask = (id) => {
    dispatch({ type: ActionType.SINGLE_KEY, payload: id });
    // window.location.assign("/tasks");
    console.log(props);
    props.history.push("/tasks");
  };
  return (
    <div className="user-data">
      <h4>{userdata && userdata.length > 0 ? "Tasks" : ""}</h4>
      {userdata && userdata.length > 0 ? (
        userdata.map((data, key) => (
          <ul key={key}>
            <li className="desc">
              <a onClick={() => GettingSingleTask(data.id)}>{data.task_msg}</a>
            </li>
            <li>{data.task_date}</li>
            <li
              onClick={() =>
                Edit(data.id, data.task_msg, data.task_date, data.task_time)
              }
            >
              <img src={Editicon} />
            </li>
            {/*
            <li onClick={() => Delete(data.id)}>
              <img src={deleteimage} />
            </li>
            */}
            <li onClick={() => handleClick(data.id)}>
              <img src={deleteimage} />
            </li>
          </ul>
        ))
      ) : (
        <div className="no-task">😄 OOps!! No Tasks are Present</div>
      )}
      {showModal ? (
        <DeleteComponent
          handleClick={handleClick}
          handleClose={handleClose}
          desc={"Are you sure you want to Delete this Task? "}
          header={"Confirm Delete"}
          modal={showModal}
          logout={Delete}
          task={"delete"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default GetTasks;
