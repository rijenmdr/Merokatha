import * as actionTypes from "./ToastType";

const initialState = {
  visible: false,
  title: "",
  message: "",
};

const utilReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOAST:
      return {
        ...state,
        visible: action.visible,
        title: action.title,
        message: action.message,
      };
    default:
      return state;
  }
};

export default utilReducer;
