import {SET_CURRENT_USER} from "./user.actions";

const initialState = {
  currentUser: null
};

/**
 * Each action is an object with { type: string, payload: any };
 * where type represents WHAT we are trying to do.. and
 * payload will be the data we want to put in our store.
 * @param currentState
 * @param action
 */

const userReducer = (currentState = initialState, action) => {

  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: action.payload
      };
    default:
      return currentState;
  }
};

export default userReducer;
