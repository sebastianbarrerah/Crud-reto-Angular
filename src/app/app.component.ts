import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './users/pages/login-page/login-page.component';
import { RegisterPageComponent } from './users/pages/register-page/register-page.component';
import { HomeComponent } from './notes/pages/home/home.component';
import { UserNotesComponent } from './notes/components/user-notes/user-notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent, RegisterPageComponent, HomeComponent, UserNotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontReto';
}
