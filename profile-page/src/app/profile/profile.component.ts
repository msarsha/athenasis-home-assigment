import {Component} from '@angular/core';
import {ProfileService} from './profile.service';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';
import {Profile} from './models/profile';

@Component({
  selector: 'profile',
  styleUrls: ['./profile.component.css'],
  template: `
    <div class="profile-container">
      <div *ngIf="!(profile$ | async) as profile; else profileTemplate">
        <mat-spinner color="accent"></mat-spinner>
      </div>
      <ng-template #profileTemplate>
        <ng-container *ngIf="profile$ | async as profile">
          <mat-card class="profile-card">
            <mat-card-title class="profile-card-title">
              <mat-card-title>
                Your profile
              </mat-card-title>
              <mat-card-subtitle>Home for everything related to YOU.</mat-card-subtitle>
              <mat-divider></mat-divider>
            </mat-card-title>
            <mat-card-content class="profile-card-content">
              <div class="profile-card-content__first-section">
                <profile-avatar [profile]="profile" class="profile-avatar"></profile-avatar>
                <profile-posts [posts]="profile.latest_posts" class="profile-posts"></profile-posts>
              </div>
              <profile-connections [connections]="profile.top_connections"></profile-connections>
            </mat-card-content>
            <mat-card-footer class="profile-card-footer">
              <mat-divider></mat-divider>
              <span class="profile-card-footer__copy">Athenasis 2018</span>
            </mat-card-footer>
          </mat-card>
        </ng-container>
      </ng-template>
    </div>
  `
})
export class ProfileComponent {
  profile$: Observable<Profile>;

  constructor(public profileService: ProfileService) {
    this.profile$ = this
      .profileService
      .getProfile()
      .pipe(
        share()
      );
  }
}
