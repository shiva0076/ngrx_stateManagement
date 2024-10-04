import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.store";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state)=>{
  return state.counter;
})
export const getDevName = createSelector(getCounterState, (state)=>{
  return state.DeveloperName;
})
 
