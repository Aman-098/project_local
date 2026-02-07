import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-business-signup',
    imports: [RouterLink,ButtonModule],
  templateUrl: './business-signup.html',
  styleUrl: './business-signup.css',
})
export class BusinessSignup {

}
