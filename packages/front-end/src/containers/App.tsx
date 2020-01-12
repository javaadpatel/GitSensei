import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount } from '../store/action-creators';

export const App = () => {
  const count = useSelector<{ count: number }, number>(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello World, from GitSensei! ✌</h1>
      <button onClick={_ => dispatch(incrementCount())}>
        Increment {count}
      </button>
    </div>
  );
};

export default App;