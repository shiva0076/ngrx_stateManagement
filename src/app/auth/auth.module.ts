import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch:"full",
        redirectTo: 'login'
      },
      {
        path: 'login',
        pathMatch:"full",
        component: LoginComponent
      }
    ]
  }
]

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})

export class AuthModule { }
