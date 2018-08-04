import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'profile-item-list',
  styleUrls: ['./profile-item-list.component.css'],
  template: `
    <mat-list>
      <mat-list-item *ngFor="let item of items">
        <ng-container *ngTemplateOutlet="template; context: {$implicit: item}"></ng-container>
      </mat-list-item>
    </mat-list>
  `
})
export class ProfileItemListComponent {
  @Input() items: string[];
  @Input() template: TemplateRef<any>;
}
