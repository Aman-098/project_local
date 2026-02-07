import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,
    ButtonModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
