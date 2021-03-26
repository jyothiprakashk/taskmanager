import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SingleTask.css";
import Back from "../../Images/back.svg";
import { withRouter } from "react-router-dom";
import { SingleTask } from "../../Actions/Taskmanager";
const SingleTaskComp = (props) => {
  const dispatch = useDispatch();
  //   const history = createBrowserHistory();

  const { single_task } = useSelector(({ reducer }) => reducer);
  console.log(single_task);
  const Redirect = () => {
    props.history.push("/");
  };
  useEffect(() => {
    dispatch(SingleTask());
  }, []);
  return (
    <div className="single-task">
      <div className="d-flex align-items-center" onClick={Redirect}>
        <img src={Back} />
        <div className="back">Back</div>
      </div>
      {Object.keys(single_task) === undefined ? (
        "Something went wrong"
      ) : Object.keys(single_task).length > 0 ? (
        <ul>
          <li className="desc">{single_task.task_msg}</li>
          <li>{single_task.task_date}</li>
          <li>{single_task.task_time}</li>
        </ul>
      ) : (
        <div className="no-task">Something went wrong</div>
      )}
    </div>
  );
};

export default withRouter(SingleTaskComp);
