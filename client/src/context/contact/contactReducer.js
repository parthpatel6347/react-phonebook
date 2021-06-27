/* eslint-disable import/no-anonymous-default-export */
import { ADD_CONTACT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    default:
      return state;
  }
};
