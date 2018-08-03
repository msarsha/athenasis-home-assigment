import {Component, Input} from '@angular/core';
import {Connection} from '../../models/connection';

@Component({
  selector: 'profile-connections',
  styleUrls: ['./profile-connections.css'],
  template: `
    <h4>Top Connections:</h4>
    <div class="connections-container">
      <div class="connection" *ngFor="let con of connections">
        <div class="connection-header">
          <div class="connection-avatar-container">
            <img [src]="con.image" class="connection-avatar">
          </div>
          <div class="connection-name-container">
            <span class="connection-name">{{con.name}}</span>
            <p class="connection-fb">{{con.facebook}}</p>
          </div>
        </div>
      </div>
    </div>
  `
})

export class ProfileConnectionsComponent {
  @Input() connections: Connection[];
}
