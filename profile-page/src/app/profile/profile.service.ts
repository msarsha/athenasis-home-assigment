import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from './models/profile';
import {Observable} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly PROFILE_URL = 'http://localhost:3000/users';

  constructor(public http: HttpClient, public matSnackBar: MatSnackBar) {
  }

  getProfile(): Observable<Profile> {
    return this
      .http
      .get<Profile>(this.PROFILE_URL)
      .pipe(
        delay(1300), // simulate remote api
        catchError((e) => {
          this.matSnackBar.open('Error loading profile', 'CLOSE');
          return throwError(e);
        })
      );
  }
}
