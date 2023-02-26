import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface User {
    id: string;
    name: string;
    lastName: string;
    hobby: string;
}

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    public allUsers: User[] = [];
    constructor(private http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        return this.http
            .get(`https://my-json-server.typicode.com/zabalueva/catalog_test/users`)
            .pipe(map((data: any) => (this.allUsers = data)));
    }

    public getUser(id: string): Observable<any> {
        return this.http.get(`https://my-json-server.typicode.com/zabalueva/catalog_test/users/${id}`);
    }
}
