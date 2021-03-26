import { ActionType } from "../Constants";
const initialState = {
  title: "Home",
  post_loader: false,
  delete_status: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOKEN_SUCESS:
      return { ...state, token: action.payload };
    case ActionType.USERID:
      return { ...state, userid: action.payload };
    case ActionType.GET_USER_DATA:
      return { ...state, user_data: action.payload };
    case ActionType.EMAIL:
      return { ...state, email: action.payload };
    case ActionType.DELETE_S:
      return { ...state, delete_status: action.payload };
    case ActionType.SINGLE_TASK:
      return { ...state, single_task: [action.payload] };
    case ActionType.SINGLE_KEY:
      return { ...state, single_key: action.payload };
    case ActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
