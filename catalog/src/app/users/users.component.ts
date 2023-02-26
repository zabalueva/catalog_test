import { Component } from '@angular/core';



import { UsersService } from './users.service';



@Component({

  selector: 'app-users',



  templateUrl: './users.component.html',



  styleUrls: ['./users.component.scss'],

})

export class UsersComponent {

  constructor(public usersService: UsersService) { }



  ngOnInit(): void {

    this.usersService.getUsers().subscribe((data: any[]) => console.log(data));

  }

}

