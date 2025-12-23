import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Count } from "../components/counter/counter.types";

const getCounterState = createFeatureSelector<Count>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state;
});