export const count = (state = 0, action: { type: 'INCREMENT' }) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};