import { SET_ID } from "./actionTypes";

const init = { userId: "" };

export const reducer = (state = init, { type, payload }) => {
  console.log("state from redu:", state);
  switch (type) {
    case SET_ID:
      console.log("payload:", payload);
      return {
        ...state,
        userId: payload,
      };

    default:
      return state;
  }
};
