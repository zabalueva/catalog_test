import { NgModule } from '@angular/core';



import { CommonModule } from '@angular/common';



import { UsersRoutingModule } from './users-routing.module';



import { UsersComponent } from './users.component';



import { UserCardComponent } from './user-card/user-card.component';



import { UserDetailsComponent } from './user-details/user-details.component';

import MaterialsModule from '../shared/materials/materials.module';



@NgModule({

  declarations: [UsersComponent, UserCardComponent, UserDetailsComponent],



  imports: [CommonModule, UsersRoutingModule, MaterialsModule],

})

export class UsersModule { }

