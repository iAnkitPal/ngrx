import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { DECREMENT, INCREMENT, RESET, SETCOUNTVALUE } from "./counter.actions";

export const countReducer = createReducer(
  initialState,
  on(INCREMENT, state => ({ ...state, count: state.count + 1 })),
  on(DECREMENT, state => ({ ...state, count: state.count - 1 })),
  on(RESET, state => ({ ...state, count: 0 })),
  on(SETCOUNTVALUE, (state,payload) => ({ ...state, count: payload.value }))
);
