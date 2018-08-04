import {Component, Input} from '@angular/core';
import {Profile} from '../../models/profile';

@Component({
  selector: 'profile-details',
  styleUrls: ['./profile-details.component.css'],
  template: `
    <div class="details-container">
      <img [src]="profile?.image" class="avatar">
      <span class="details-name">{{profile?.name}}</span>
      <span>{{profile?.birth | date}}</span>
      <a href="mailto:{{profile?.contact?.email}}">{{profile?.contact?.email}}</a>
      <span>{{profile?.contact?.phone}}</span>
    </div>
  `
})
export class ProfileDetailsComponent {
  @Input() profile: Profile;
}
