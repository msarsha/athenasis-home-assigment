import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from './models/profile';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly PROFILE_URL = 'http://localhost:3000/user';

  constructor(public http: HttpClient) {
  }

  getProfile(): Observable<Profile> {
    return this
      .http
      .get<Profile>(this.PROFILE_URL)
      .pipe(
        delay(1000) // simulate remote api
      );
  }
}
