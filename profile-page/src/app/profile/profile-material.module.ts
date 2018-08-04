import {NgModule} from '@angular/core';
import {
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule, MatListModule,
  MatProgressSpinnerModule, MatSnackBarModule, MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatSnackBarModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatSnackBarModule
  ]
})
export class ProfileMaterialModule {
}
