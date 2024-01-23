import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LayoutComponent } from './layout/layout.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'layout/home', pathMatch: 'full' },
  { path: 'list', redirectTo: 'layout/list', pathMatch: 'full' },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'register', component: UserFormComponent },
    ],
  },
];
