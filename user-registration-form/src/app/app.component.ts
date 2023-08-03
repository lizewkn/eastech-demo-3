import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: { firstName: string; lastName: string } = { firstName: '', lastName: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    // Your form submission logic here
    if (this.user.firstName && this.user.lastName) {
      // Form is valid, submit the data
      const url = 'http://localhost:8080/users';
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      // Create the user object with first name and last name
      const userData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
      };

      // Make the HTTP POST request to the backend
      this.http.post(url, userData, { headers }).subscribe(
        (response) => {
          // Request was successful, display success message
          this.successMessage = 'Submission Successful';
          this.errorMessage = '';
        },
        (error) => {
          // Request failed, display error message
          this.successMessage = '';
          this.errorMessage = 'Failed to submit the form data';
        }
      );
    } else {
      // Form is invalid, show error message
      this.successMessage = '';
      this.errorMessage = 'Please fill in all fields';
    }
  }
}
