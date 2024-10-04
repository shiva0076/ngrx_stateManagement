import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { PostState } from '../state/post.store';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit{
  addPostForm! : FormGroup;

  constructor(private store : Store<PostState>){}
  ngOnInit(){
    this.addPostForm = new FormGroup({
      title : new FormControl(null, [Validators.required]),
      description : new FormControl(null,[Validators.required])
    })
  }

  onAddPost(){
    if(!this.addPostForm.valid){
      return;
    }
    else{
      const postData : Post =  {
        title:this.addPostForm.value.title,
        desc : this.addPostForm.value.description
      }

      this.store.dispatch(addPost({postData}));
    }
  }
}
