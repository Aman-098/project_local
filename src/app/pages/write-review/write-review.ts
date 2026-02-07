import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-write-review',
  imports: [ButtonModule,RouterLink],
  templateUrl: './write-review.html',
  styleUrl: './write-review.css',
})
export class WriteReview {

}
