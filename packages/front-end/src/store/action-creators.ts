import { Action, ActionType } from '.';

export const incrementCount = (): Action<ActionType.Increment | ActionType.Decrement> => {
  return (dispatch) => {
    dispatch({ type: ActionType.Increment });
    setTimeout(() => {
      dispatch({ type: ActionType.Decrement });
    }, 1000);
  };
};