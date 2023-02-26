import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '../users.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
    public panelOpenState = false;
    public currentUser: User = {} as User;

    constructor(public usersService: UsersService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = String(this.route.snapshot.paramMap.get('id'));
        this.usersService.getUser(id).subscribe((user: User) => (this.currentUser = user));
    }
}
