import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/counter/state/counter.actions';
import { CounterState } from 'src/app/counter/state/counter.store';

@Component({
  selector: 'app-counter-btns',
  templateUrl: './counter-btns.component.html',
  styleUrls: ['./counter-btns.component.scss']
})
export class CounterBtnsComponent {


  constructor(private Counterstore : Store<{counter : CounterState}>) {

  }
  onReset(){
    this.Counterstore.dispatch(reset());
  }
  onDecrement(){
    this.Counterstore.dispatch(decrement());
  }
  onIncrement(){
    this.Counterstore.dispatch(increment());
  }
}
