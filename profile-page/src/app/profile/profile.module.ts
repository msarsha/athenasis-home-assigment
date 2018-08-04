import {NgModule} from '@angular/core';
import {ProfileMaterialModule} from './profile-material.module';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {ProfileDetailsComponent} from './components/profile-details/profile-details.component';
import {ProfilePostsComponent} from './components/profile-posts/profile-posts.component';
import {ProfileConnectionsComponent} from './components/profile-connections/profile-connections';
import {ProfileItemListComponent} from './components/profile-item-list/profile-item-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileMaterialModule
  ],
  exports: [
    ProfileComponent
  ],
  declarations: [
    ProfileComponent,
    ProfileDetailsComponent,
    ProfilePostsComponent,
    ProfileConnectionsComponent,
    ProfileItemListComponent
  ]
})
export class ProfileModule {

}
