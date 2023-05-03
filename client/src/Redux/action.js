import { GET_ID, SET_ID } from "./actionTypes";

export const getID = (data) => ({
  type: GET_ID,
  payload: data,
});

export const setID = (data) => ({
  type: SET_ID,
  payload: data,
});
