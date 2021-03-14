import { initFirebase, listenAuthChanged } from "../firebase/firebase";
import { appActions } from "./appActions";
import { getPlayerData } from "./playerEffects";

export const launchApp = () => (dispatch) => {
  dispatch({ type: appActions.APP_JUST_LAUNCHED });

  initFirebase();

  const handleUser = (user) => {
    dispatch({ type: appActions.USER_IS_AUTHENTICATED, user });

    dispatch(getPlayerData());
  };
  const handleAnonymous = () => {
    dispatch({ type: appActions.USER_IS_ANONYMOUS });
  };
  listenAuthChanged(handleUser, handleAnonymous);
};
