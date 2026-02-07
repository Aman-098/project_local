import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-main',
  imports: [RouterLink,ButtonModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
