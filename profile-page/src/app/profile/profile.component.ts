import {Component} from '@angular/core';
import {ProfileService} from './profile.service';
import {Observable} from 'rxjs';
import {catchError, map, shareReplay} from 'rxjs/operators';
import {Profile} from './models/profile';
import {of} from 'rxjs/internal/observable/of';
import {Post} from './models/post';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'profile',
  styleUrls: ['./profile.component.css'],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  profile$: Observable<Profile>;
  loadingError$ = new Subject();

  constructor(public profileService: ProfileService) {
    this.profile$ = this
      .profileService
      .getProfile()
      .pipe(
        shareReplay(),
        map((profile: Profile) => {
          return {
            ...profile,
            latest_posts: profile
              .latest_posts
              .sort((p1: Post, p2: Post) => {
                if (p1.likes === p2.likes) return 0;
                return p1.likes > p2.likes ? -1 : 1;
              })
              .filter((e, i) => i < 8)
          }
        }),
        catchError((err) => {
          console.log('error loading profile', err);
          this.loadingError$.next(true);
          return of(null)
        })
      );
  }
}
