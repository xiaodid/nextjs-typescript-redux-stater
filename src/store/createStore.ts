import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import counter, { CounterState, counterInitialState } from "../routes/counter/modules/counter";
import { ActionWithPayload } from "./common";

// define root state here
export interface RootState {
  counter:CounterState;
}

export type RootStore = Store<RootState & undefined, ActionWithPayload>

const rootInitialState: RootState = {
  counter: counterInitialState
}
const reducers = combineReducers<RootState>({
  counter,
});

export function initializeStore(initialStore: RootState = rootInitialState): RootStore {
  return createStore<RootState, ActionWithPayload, {}, undefined>(
    reducers,
    initialStore,
    applyMiddleware(thunkMiddleware),
  );
}
