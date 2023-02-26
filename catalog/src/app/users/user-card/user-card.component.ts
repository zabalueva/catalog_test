import { Input, OnInit, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, UsersService } from '../users.service';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit, OnDestroy {
    @Input() user: User = {} as User;
    public imageUrl: string;
    public pictureSubscribe: Subscription;

    constructor(public usersService: UsersService) {}

    ngOnInit(): void {
        this.pictureSubscribe = this.usersService
            .getPic()
            .subscribe({ next: (response: any) => (this.imageUrl = response.file) });
    }

    ngOnDestroy(): void {
        this.pictureSubscribe.unsubscribe();
    }
}
