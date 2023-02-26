import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import MaterialsModule from '../shared/materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { UserCreateComponent } from './user-create/user-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UsersComponent, UserCardComponent, UserDetailsComponent, UserCreateComponent],
    imports: [CommonModule, UsersRoutingModule, MaterialsModule, HttpClientModule, ReactiveFormsModule],
    providers: [],
})
export class UsersModule {}
