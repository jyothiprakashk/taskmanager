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
      {single_task && single_task.length > 0 ? (
        single_task.map((data, key) => (
          <ul key={key}>
            <li className="desc">{data.task_msg}</li>
            <li>{data.task_date}</li>
            <li>{data.task_time}</li>
          </ul>
        ))
      ) : (
        <div className="no-task">Something went wrong</div>
      )}
    </div>
  );
};

export default withRouter(SingleTaskComp);
