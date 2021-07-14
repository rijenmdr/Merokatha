import * as actionTypes from "./ToastType";

export const setToastState = (state, title, message) => {
  return {
    type: actionTypes.SET_TOAST,
    visible: state,
    title: title,
    message: message,
  };
};
