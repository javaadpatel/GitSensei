import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import * as appReducer from './reducers';

export const rootReducer = combineReducers({ ...appReducer });

type CombinedState = ReturnType<typeof rootReducer>;

export type Action<A, R = void> = ThunkAction<R, CombinedState, void, { type: A }>;

export const enum ActionType {
    Increment = 'INCREMENT',
    Decrement = 'DECREMENT'
}