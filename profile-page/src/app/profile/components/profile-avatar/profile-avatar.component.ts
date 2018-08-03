import {Component, Input} from '@angular/core';
import {Profile} from '../../models/profile';

@Component({
  selector: 'profile-avatar',
  styleUrls: ['./profile-avatar.component.css'],
  template: `
    <div class="avatar-container">
      <img [src]="profile.image" class="avatar">
      <span>{{profile.name}}</span>
      <span>{{profile.birth | date}}</span>
    </div>
  `
})
export class ProfileAvatarComponent {
  @Input() profile: Profile;
}
