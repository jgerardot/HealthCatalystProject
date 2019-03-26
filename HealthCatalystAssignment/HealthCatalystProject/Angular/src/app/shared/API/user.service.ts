import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import User from '../ViewModels/User';

@Injectable()
export default class UserService {
    public API = '/api';
    public USERS_API = `${this.API}/Users`;

    constructor(private http: HttpClient) { }
  
    search(searchString: string): Observable<Array<User>> {
        return this.http.get<Array<User>>(`${this.USERS_API}/${searchString}`);
    }
}
