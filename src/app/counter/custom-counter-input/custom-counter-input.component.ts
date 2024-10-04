import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { customCounterInput, devNameChange } from 'src/app/counter/state/counter.actions';
import { getDevName } from 'src/app/counter/state/counter.selectors';
import { CounterState } from 'src/app/counter/state/counter.store';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit{

  value!: number;
  //devName!:string;
  devName$! :Observable<string>;
  constructor(private store : Store<{counter: CounterState}>){}
  ngOnInit(){
    // this.store.select(getDevName).subscribe(data=>{
    //   this.devName =  data;
    // });

    this.devName$ = this.store.select(getDevName);

  }
  onCustomAdd(){
    this.store.dispatch(customCounterInput({value:this.value}));
  }

  onDevNameChange(){
   this.store.dispatch(devNameChange());
  }
}
