import {NgModule} from '@angular/core';
import {
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class ProfileMaterialModule {
}
