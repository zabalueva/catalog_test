import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { Validators } from '@angular/forms';

import { UsersService } from '../users.service';

import { mergeMap } from 'rxjs/operators';

import * as uuid from 'uuid';

import { Router } from '@angular/router';



interface UserFormGroup {

    name: FormControl<string | null>;



    lastName: FormControl<string | null>;



    hobby: FormControl<string | null>;

}



@Component({

    selector: 'app-user-create',



    templateUrl: './user-create.component.html',



    styleUrls: ['./user-create.component.scss'],

})

export class UserCreateComponent {

    public userFormGroup: FormGroup<UserFormGroup>;



    constructor(public usersService: UsersService, private readonly router: Router) {}



    ngOnInit(): void {

        this.initForm();

    }



    public initForm(): void {

        this.userFormGroup = new FormGroup({

            name: new FormControl('', [Validators.required, Validators.maxLength(10)]),



            lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),



            hobby: new FormControl('', [Validators.required, Validators.maxLength(40)]),

        });

    }



    public addUser(): void {

        if (!this.userFormGroup.valid) {

            return;

        }



        const myId = uuid.v4();



        const payload = Object.assign(this.userFormGroup.value, { id: myId });



        this.usersService



            .postUser(payload)



            .pipe(

                mergeMap(() => {

                    return this.usersService.getUsers();

                })

            )



            .subscribe(() => {

                this.router.navigate(['/users']);

            });

    }

}

