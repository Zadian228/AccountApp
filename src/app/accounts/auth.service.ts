import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface  AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  isAuthenticated = false;

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnUFsPFz47M-RaGyAVUENyQsL1JMaVLpw',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
      );
  }
}
