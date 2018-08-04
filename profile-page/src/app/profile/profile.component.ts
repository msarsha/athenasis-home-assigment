import {Component} from '@angular/core';
import {ProfileService} from './profile.service';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Profile} from './models/profile';

@Component({
  selector: 'profile',
  styleUrls: ['./profile.component.css'],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  profile$: Observable<Profile>;

  constructor(public profileService: ProfileService) {
    this.profile$ = this
      .profileService
      .getProfile()
      .pipe(
        shareReplay(),
        map((profile: Profile) => {
          return {
            ...profile,
            latest_posts: profile.latest_posts.filter((e, i) => i < 8)
          }
        })
      );
  }
}
