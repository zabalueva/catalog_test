import { Component } from '@angular/core';



import { FormGroup, FormControl } from '@angular/forms';



interface UserFormGroup {

    name: string;



    lastName: string;



    hobby: string;



    id: string;

}



@Component({

    selector: 'app-user-create',



    templateUrl: './user-create.component.html',



    styleUrls: ['./user-create.component.scss'],

})

export class UserCreateComponent {

    public userFormGroup: FormGroup;



    constructor() {}



    ngOnInit(): void {

        this.initForm();

    }



    public initForm(): void {

        this.userFormGroup = new FormGroup({

            name: new FormControl(''),



            lastName: new FormControl(''),



            hobby: new FormControl(''),

        });

    }

}

