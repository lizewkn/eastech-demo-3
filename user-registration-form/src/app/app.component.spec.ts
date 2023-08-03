// Import necessary modules for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Import FormsModule for ngModel
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should display success message on successful form submission', () => {
    // Set form fields
    component.user.firstName = 'John';
    component.user.lastName = 'Doe';

    // Trigger form submission
    component.submitForm();

    // Check if the success message is displayed
    expect(component.successMessage).toBe('Submission Successful');
    expect(component.errorMessage).toBe('');
  });

  it('should display error message on unsuccessful form submission', () => {
    // Set form fields (one of the fields is empty)
    component.user.firstName = 'John';
    component.user.lastName = '';

    // Trigger form submission
    component.submitForm();

    // Check if the error message is displayed
    expect(component.successMessage).toBe('');
    expect(component.errorMessage).toBe('Please fill in all fields');
  });
});
