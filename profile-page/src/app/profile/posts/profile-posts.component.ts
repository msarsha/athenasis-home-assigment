import {Component, Input} from '@angular/core';
import {Post} from '../models/post';

@Component({
  selector: 'profile-posts',
  styleUrls: ['./profile-posts.component.css'],
  template: `
    <h3>Recent Posts:</h3>
    <div class="posts-container">
      <div class="post" *ngFor="let post of posts">
        <div class="post-header">
          <span class="post-header__text">{{post.title}}</span>
          <span class="post-header__likes" title="likes">{{post.likes}}</span>
        </div>
        <div class="post-content">
          <span>{{post.text}}</span>
        </div>
      </div>
    </div>
  `
})
export class ProfilePostsComponent {
  @Input() posts: Post[];
}
