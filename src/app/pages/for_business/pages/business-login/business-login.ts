import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-business-login',
   imports: [ButtonModule,RouterLink],
  templateUrl: './business-login.html',
  styleUrl: './business-login.css',
})
export class BusinessLogin {

}
