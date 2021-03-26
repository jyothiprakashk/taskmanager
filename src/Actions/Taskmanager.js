import { PATH, APP_URL, ActionType } from "../Constants";
import axios from "axios";
export const Login = (state) => async (dispatch, getState) => {
  try {
    const login = await axios.post(`${APP_URL}${PATH.Login}`, state);
    if (login.status === 200) {
      dispatch({
        type: ActionType.TOKEN_SUCESS,
        payload: login.data.results.token,
      });
      dispatch({ type: ActionType.EMAIL, payload: state.email });
      dispatch(UserID());
    }
  } catch (error) {
    if (error && error.response) {
      alert(error);
    }
  }
};
export const UserID = () => async (dispatch, getState) => {
  const { token } = getState().reducer;
  try {
    const userid = await axios(`${APP_URL}${PATH.User}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    if (userid.status === 200) {
      dispatch({ type: ActionType.USERID, payload: userid.data.results.id });
    }
  } catch (error) {
    if (error && error.response) {
      alert(error.response.data.desc);
    }
  }
};

export const AddTask = (Task) => async (dispatch, getState) => {
  const { token, userid } = getState().reducer;
  const taskdata = {
    assigned_user: userid,
    task_date: Task.task_date,
    task_time: parseInt(Task.task_time),
    task_msg: Task.description,
    is_completed: 1,
  };
  try {
    const task = await axios(`${APP_URL}${PATH.Task}`, {
      method: "POST",
      data: taskdata,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (task.status === 200) {
      dispatch(GetTask());
    }
  } catch (error) {
    if (error && error.response) {
      alert(error.response.data.desc);
    }
  }
};
export const GetTask = (Task) => async (dispatch, getState) => {
  const { token, userid } = getState().reducer;
  try {
    const task = await axios(`${APP_URL}${PATH.Task}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (task.status === 200) {
      dispatch({ type: ActionType.GET_USER_DATA, payload: task.data.results });
    }
  } catch (error) {
    if (error && error.response) {
      alert(error.response.data.desc);
    }
  }
};

export const DeleteTask = (data) => async (dispatch, getState) => {
  const { token, userid } = getState().reducer;
  try {
    const task = await axios(`${APP_URL}${PATH.Delete}${data}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (task.status === 200) {
      dispatch(GetTask());
      dispatch({ type: ActionType.DELETE_S, payload: true });
    }
  } catch (error) {
    if (error && error.response) {
      alert(error.response.data.desc);
    }
  }
};

export const SingleTask = (data) => async (dispatch, getState) => {
  const { token, userid, single_key } = getState().reducer;
  try {
    const task = await axios(`${APP_URL}${PATH.Edit}${single_key}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (task.status === 200) {
      console.log(task);
      dispatch({ type: ActionType.SINGLE_TASK, payload: task.data.results });
    }
  } catch (error) {
    if (error && error.response) {
      alert(error.response.data.desc);
    }
  }
};
export const EditTask = (data) => async (dispatch, getState) => {
  const { token, userid } = getState().reducer;
  const taskdata = {
    assigned_user: userid,
    task_date: data.task_date,
    task_time: parseInt(data.task_time),
    task_msg: data.description,
    is_completed: 1,
  };
  try {
    const task = await axios(`${APP_URL}${PATH.Edit}${data.task_id}`, {
      method: "PUT",
      data: taskdata,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (task.status === 200) {
      dispatch(GetTask());
    }
  } catch (error) {
    if (error && error.response) {
      alert(error.response.data.desc);
    }
  }
};
export const UserLogout = (data) => async (dispatch, getState) => {
  dispatch({ type: ActionType.LOGOUT });
};
