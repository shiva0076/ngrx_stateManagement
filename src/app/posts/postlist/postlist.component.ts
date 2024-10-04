import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
posts!: Observable<Post[]>;
  constructor(private store: Store<AppState>){}
  ngOnInit(){
    this.posts = this.store.select(getPosts);
  }
}
