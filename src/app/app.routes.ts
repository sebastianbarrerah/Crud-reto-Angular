import { Routes } from '@angular/router';
import { LoginPageComponent } from './users/pages/login-page/login-page.component';
import { RegisterPageComponent } from './users/pages/register-page/register-page.component';
import { HomeComponent } from './notes/pages/home/home.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent,
    },
    {
        path: 'register',
        component: RegisterPageComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
