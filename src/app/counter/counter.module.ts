import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterBtnsComponent } from "./counter-btns/counter-btns.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  }
]

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterBtnsComponent,
    CustomCounterInputComponent
  ],
  imports: [CommonModule,FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature('counter',counterReducer)]
})

export class CounterModule { }
