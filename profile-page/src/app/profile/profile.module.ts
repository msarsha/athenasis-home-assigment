import {NgModule} from '@angular/core';
import {ProfileMaterialModule} from './profile-material.module';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {ProfileAvatarComponent} from './components/profile-avatar/profile-avatar.component';
import {ProfilePostsComponent} from './posts/profile-posts.component';
import {ProfileContactsComponent} from './contacts/profile-contacts';

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
    ProfileContactsComponent
  ],
  providers: [],
})
export class ProfileModule {

}
