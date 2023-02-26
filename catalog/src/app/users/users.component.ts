import { Component, OnInit } from '@angular/core';
import { User, UsersService } from './users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    constructor(public usersService: UsersService) {}

    ngOnInit(): void {
        this.usersService.getUsers().subscribe((result: User[]) => {
            if (!result) {
                return;
            }
        });
    }
}
