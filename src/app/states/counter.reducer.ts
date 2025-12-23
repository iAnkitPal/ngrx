import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { DECREMENT, INCREMENT, RESET } from "./counter.actions";

// export const countReducer = createReducer(
//   initialState,
//   on(INCREMENT, (state) => {
//     return { ...state, count: state.count + 1 }
//   },
//   ),
//   on(DECREMENT, (state) => {
//     return { ...state, count: state.count - 1 }
//   },
//   ),
//   on(RESET, (state) => {
//     return { ...state, count: 0 }
//   },
//   ),

// )

export const countReducer = createReducer(
  initialState,
  on(INCREMENT, state => ({ ...state, count: state.count + 1 })),
  on(DECREMENT, state => ({ ...state, count: state.count - 1 })),
  on(RESET, state => ({ ...state, count: 0 }))
);
