import { appActions } from "./appActions";
import { playerActions } from "./playerActions";

const initialState = {
  isLoading: true,
  user: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions.USER_IS_ANONYMOUS:
      return { ...state, user: null, isLoading: false };
    case appActions.USER_IS_AUTHENTICATED:
      return { ...state, user: action.user };
    case playerActions.SET_PLAYER:
      return { ...state, isLoading: false };
    case appActions.APP_IS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
