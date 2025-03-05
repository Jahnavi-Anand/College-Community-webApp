import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,  // If your project uses standalone components
  imports: [NgFor, FormsModule],  // Import FormsModule here
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  categories = ['Cafes', 'Hostels', 'Doctors', 'Deli Shops', 'Cab Services'];
  facilities: any = {
    Cafes: ['Bunk', 'Swadu', 'Anavarin', 'Chai Sutta Bar', 'Big Little Things'],
    Hostels: ['Girls Scholar', 'Green View', 'Aura', 'Elemento', 'Woodstock'],
    Doctors: ['Doctor A', 'Doctor B', 'Doctor C', 'Doctor D', 'Doctor E'],
    'Deli Shops': ['A', 'B', 'C', 'D', 'E'],
    'Cab Services': ['A', 'B', 'C', 'D', 'E']
  };

  selectedCategory: string = '';
  selectedFacility: string = '';
  rating: number = 0;
  review: string = '';

  submitFeedback() {
    console.log('Feedback Submitted:', {
      category: this.selectedCategory,
      facility: this.selectedFacility,
      rating: this.rating,
      review: this.review
    });
    alert('Feedback submitted successfully!');
    this.selectedCategory = '';
    this.selectedFacility = '';
    this.rating = 0;
    this.review = '';
  }
}
