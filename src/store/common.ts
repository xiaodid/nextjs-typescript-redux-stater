import { Reducer, Action } from "redux";
import { ThunkAction } from 'redux-thunk'

export interface ActionWithPayload extends Action {
  payload: any;
}

export interface ReducerHandlers<S = any, A extends ActionWithPayload = ActionWithPayload> {
  [typeIndex: string]: Reducer<S, A>;
}

export type actionCreatorFn = (type: string) => ActionWithPayload;
export type asyncActionCreateFn<R, S, E, A extends Action> = (payload: any) => ThunkAction<R, S, E, A>

export function createAction(actionType: string): actionCreatorFn {
  return (value: any) => {
    return {
      type: actionType,
      payload: value,
    };
  };
}

export function createReducer<S = any, A extends ActionWithPayload = ActionWithPayload>(
  initialState: S,
  ACTION_HANDLERS: ReducerHandlers<S>,
): Reducer<S, A> {
  return (state = initialState, action: A) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
  };
}
