import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink,ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
