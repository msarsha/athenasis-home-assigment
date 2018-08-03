import {NgModule} from '@angular/core';
import {ProfileMaterialModule} from './profile-material.module';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {ProfileAvatarComponent} from './components/profile-avatar/profile-avatar.component';
import {ProfilePostsComponent} from './components/posts/profile-posts.component';
import {ProfileConnectionsComponent} from './components/connections/profile-connections';

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
    ProfileAvatarComponent,
    ProfilePostsComponent,
    ProfileConnectionsComponent
  ],
  providers: [],
})
export class ProfileModule {

}
