import {NgModule} from '@angular/core';
import {
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatProgressSpinnerModule, MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class ProfileMaterialModule {
}
