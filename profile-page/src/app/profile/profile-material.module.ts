import {NgModule} from '@angular/core';
import {
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule, MatListModule,
  MatProgressSpinnerModule, MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatListModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatListModule
  ]
})
export class ProfileMaterialModule {
}
