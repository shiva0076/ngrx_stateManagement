import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostlistComponent } from "./postlist/postlist.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { postReducer } from "./state/post.reducer";

const routes: Routes = [
  {
    path: '',
    component: PostlistComponent,
    children: [{
      path: 'add',
      component: AddPostComponent
    },
    {
      path: 'edit/:id',
      component: EditPostComponent
    }]
  }
]

@NgModule({
  declarations: [
    PostlistComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature('posts',postReducer)
  ]
})

export class PostModule { }
