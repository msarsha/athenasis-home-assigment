import {Component, Input} from '@angular/core';
import {Post} from '../models/post';

@Component({
  selector: 'profile-posts',
  styleUrls: ['./profile-posts.component.css'],
  template: `
    <div class="posts-container">
      <h4>Recent Posts:</h4>
      <mat-accordion>
        <mat-expansion-panel *ngFor="let post of posts">
          <mat-expansion-panel-header>
            <mat-panel-title>
              {{post.title}}
            </mat-panel-title>
            <mat-panel-description>
              <span>{{post.likes}}</span>
              <mat-icon>thumb_up</mat-icon>
            </mat-panel-description>
          </mat-expansion-panel-header>
          <p>{{post.text}}</p>
        </mat-expansion-panel>
      </mat-accordion>
    </div>
  `
})
export class ProfilePostsComponent {
  @Input() posts: Post[];
}
