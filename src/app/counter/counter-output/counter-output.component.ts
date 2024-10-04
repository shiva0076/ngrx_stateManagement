import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from 'src/app/counter/state/counter.selectors';
import { CounterState } from 'src/app/counter/state/counter.store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{
   //counter:number | undefined;
  counter$!:Observable<number>;

constructor(private counterStore : Store<{counter : CounterState}>){

}

  ngOnInit(): void {
    // this.counterStore.select(getCounter).subscribe(data =>{
    //   console.log('counter Obsr Called');
    //   this.counter = data;
    // });
    //note - here we're subscribing the counter, then we need to unscribe it too. so instead we can directly use observable.

   this.counter$ = this.counterStore.select(getCounter);
  }
}
