import { ActionType } from '.';

export const count = (state = 0, action: { type: ActionType.Increment | ActionType.Decrement }) => {
  switch (action.type) {
    case ActionType.Increment:
      return state + 1;
    case ActionType.Decrement:
        return state - 1;
    default:
      return state;
  }
};