import { Component } from '@angular/core';
import { WriteReview } from '../write-review/write-review';

@Component({
  selector: 'app-review',
  imports: [WriteReview],
  templateUrl: './review.html',
  styleUrl: './review.css',
})
export class Review {

}
