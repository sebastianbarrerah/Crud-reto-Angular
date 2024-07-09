import { Routes } from '@angular/router';
import { LoginPageComponent } from './users/pages/login-page/login-page.component';
import { RegisterPageComponent } from './users/pages/register-page/register-page.component';
import { HomeComponent } from './notes/pages/home/home.component';
// import { authGuard } from './users/guards/auth.guard';

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
        component: HomeComponent,
        // canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
