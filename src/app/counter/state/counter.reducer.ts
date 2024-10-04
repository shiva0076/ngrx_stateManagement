import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.store";
import { customCounterInput, decrement, devNameChange, increment, reset } from "./counter.actions";
import { state } from "@angular/animations";
import { Action } from "rxjs/internal/scheduler/Action";

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

const _counterReducer = createReducer(initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
on(decrement, (state)=>{
  return{
    ...state,
    counter : state.counter - 1
  }
}),
on(reset, (state)=>{
  return{
    ...state,
    counter: 0
  }
}),
on(customCounterInput, (state, action)=>{
  return {
    ...state,
    counter: state.counter + action.value
  }
}),
on(devNameChange,state=>{
return{
  ...state,
  DeveloperName : 'roxta_shiva'
}
})
);
