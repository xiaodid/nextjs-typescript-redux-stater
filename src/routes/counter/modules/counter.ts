import { ReducerHandlers, createAction, createReducer, ActionWithPayload, asyncActionCreateFn } from "../../../store/common";
export interface CounterState {
  counter: number;
}

export const counterInitialState: CounterState = {
  counter: 10,
};

const INCREMENT = "INCREMENT";
const INCREMENT_ASYNC = "INCREMENT_ASYNC";

const increment = createAction(INCREMENT);

const doubleAsync: asyncActionCreateFn<Promise<any>, CounterState, {}, ActionWithPayload> = (payload: any) => {
  return (dispatch) => {
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        dispatch({
          type: INCREMENT_ASYNC,
          payload: payload.time,
        })
        resolve()
      }, 500)
    })
  }
}

export const counterActions = {
  increment,
  doubleAsync,
}

const reducers: ReducerHandlers<CounterState> = {
  [INCREMENT]: (state: CounterState | undefined, action: ActionWithPayload): CounterState =>
    Object.assign({}, state, { counter: action.payload.counter + state!.counter }),
  [INCREMENT_ASYNC]: (state: CounterState | undefined, action: ActionWithPayload): CounterState =>
    Object.assign({}, state, { counter: action.payload * state!.counter }),
};

export default createReducer(counterInitialState, reducers);
