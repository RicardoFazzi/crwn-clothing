import USER_ACTION_TYPES from "./user.types";

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
  switch (action.type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...currentState,
        currentUser: action.payload,
        error: null
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...currentState,
        currentUser: null,
        error: null
      };
    case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
      return {
        ...currentState,
        error: action.payload
      };
    default:
      return currentState;
  }
};

export default userReducer;
