import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'users',

    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'users/create',
    component: UserCreateComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
  },

  {
    path: 'repos',

    loadChildren: () => import('./repos/repos.module').then((m) => m.ReposModule),
  },

  {
    path: '',

    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }
