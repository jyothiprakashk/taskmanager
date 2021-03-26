import React, { useEffect, useState } from "react";
import { UserID, AddTask, GetTask, EditTask } from "../../Actions/Taskmanager";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../Constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tasks.css";
import { Button } from "@material-ui/core";
import GetTasksComponent from "../GetTasks/GetTasks";
var moment = require("moment");

export default function Task(props) {
  const [Task, SetTask] = useState({
    description: "",
    task_date: "",
    task_time: "",
    task_id: "",
    edit: false,
  });
  const { user_data, delete_status } = useSelector(({ reducer }) => reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserID());
    dispatch({ type: ActionType.TITLE_SUCCESS, payload: "Home" });
  }, []);
  const handleChange = (e) => {
    SetTask({ ...Task, [e.target.name]: e.target.value });
  };
  const TaskSubmission = (e) => {
    e.preventDefault();
    if (Task.edit) {
      dispatch(EditTask(Task));
      StateClear();
    } else {
      dispatch(AddTask(Task));
      StateClear();
    }
  };
  useEffect(() => {
    dispatch(GetTask());
  }, []);
  const StateClear = () => {
    SetTask({ description: "", task_date: "", task_time: "", edit: false });
  };
  useEffect(() => {
    var data = new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
    )
      .toISOString()
      .substr(0, 10);

    console.log(data);
    SetTask({ ...Task, task_date: data });
  }, [user_data]);
  const Edit = (id, msg, date, time) => {
    const maindata = moment(time, "HH").format("HH:mm");
    SetTask({
      description: msg,
      task_date: date,
      task_time: maindata,
      task_id: id,
      edit: true,
    });
  };

  return (
    <div>
      <div className="Task-container">
        <h1>Task Management</h1>
        <form onSubmit={TaskSubmission}>
          <input
            name="description"
            onChange={handleChange}
            className="textInput"
            placeholder="Description"
            size="50"
            required
            value={Task.description}
          />
          <input
            name="task_date"
            onChange={handleChange}
            className="textInput"
            placeholder="Date"
            size="50"
            required
            type="date"
            data-date-format="YYYY-MM-DD  "
            value={Task.task_date}
          />
          <input
            name="task_time"
            onChange={handleChange}
            className="textInput"
            placeholder="Time"
            size="50"
            type="time"
            required
            value={Task.task_time}
          />
          <div className="Task-submission">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="Clear-submission"
              onClick={StateClear}
            >
              Clear
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
      <GetTasksComponent
        userdata={user_data}
        Edit={Edit}
        delete_status={delete_status}
        props={props}
      />
    </div>
  );
}
