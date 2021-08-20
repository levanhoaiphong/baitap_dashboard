import { actionType } from "../Action/type";

const initialState = {
  credentials: null,
  userList: null,
  page: 1,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      state.userList = action.payload;
      return { ...state };
    case actionType.SET_SIGNIN:
      state.credentials = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default userReducer;
