import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { getPostById } from '../state/posts.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/post.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post!: Post;
  updatePostForm!: FormGroup;
  postSub!: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) { }
  ngOnDestroy(): void {
    if (this.postSub) {
      this.postSub.unsubscribe();
    }
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.postSub = this.store.select(getPostById, { id: id }).subscribe(data => {
        this.post = data

        this.createForm();
      });
    });
  }

  createForm(){
    this.updatePostForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required]),
      description: new FormControl(this.post.desc, [Validators.required]),

    });
  }

  onUpdatePost(){
    if(!this.updatePostForm.valid){
      return
    }
    else{
      //dispatch the action
      const title = this.updatePostForm.value.title;
      const desc = this.updatePostForm.value.description;

      const updatePostData : Post={
        id:this.post.id,
        title,
        desc
      }

      this.store.dispatch(updatePost({updatePostData}));
      this.router.navigate(['posts']);
    }
  }

}
