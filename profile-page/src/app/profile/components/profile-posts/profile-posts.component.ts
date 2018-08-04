import {Component, Input} from '@angular/core';
import {Post} from '../../models/post';

@Component({
  selector: 'profile-posts',
  styleUrls: ['./profile-posts.component.css'],
  template: `
    <div class="posts-container">
      <div class="post" *ngFor="let post of posts">
        <div class="post-header">
          <span class="post-header__text">{{post.title}}</span>
          <span class="post-header__likes" title="likes">{{post.likes}}</span>
        </div>
        <span>{{post.text}}</span>
      </div>
    </div>
  `
})
export class ProfilePostsComponent {
  @Input() posts: Post[];
}
