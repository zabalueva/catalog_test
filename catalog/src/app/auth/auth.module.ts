import { NgModule } from '@angular/core';



import { CommonModule } from '@angular/common';



import { AuthRoutingModule } from './auth-routing.module';



import { AuthComponent } from './auth.component';



import MaterialsModule from '../shared/materials/materials.module';

import { HeaderComponent } from './header/header.component';



@NgModule({

  declarations: [AuthComponent, HeaderComponent],



  imports: [CommonModule, AuthRoutingModule, MaterialsModule],

  exports: [HeaderComponent],

})

export class AuthModule { }

