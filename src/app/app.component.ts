import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  template: '<app-login></app-login>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix-login';
}
