import { createAction, props } from "@ngrx/store";

export const INCREMENT = createAction('INCREMENT');
export const DECREMENT = createAction('DECREMENT');
export const RESET = createAction('RESET');
export const SETCOUNTVALUE = createAction('SETCOUNTVALUE',props<{value:number}>());

