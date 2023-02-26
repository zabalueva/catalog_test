import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class UsersService {
    public allUsers: any[] = [];
    constructor(private http: HttpClient) { }

    public getUsers(): Observable<any> {
        return this.http.get(`https://api.github.com/users`).pipe(map((data: any) => (this.allUsers = data)));
    }
}
