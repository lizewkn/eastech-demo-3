# User Registration Form and Spring Boot Project

This repository contains a user registration form built with Angular and a Spring Boot project to handle user data. Follow the steps below to run the project.

## Prerequisites

Before running the project, make sure you have the following installed on your system:

- Node.js and npm (Node Package Manager) - to run the Angular frontend.
- Java Development Kit (JDK) - to run the Spring Boot backend.
- Maven - to build and run the Spring Boot project.

## How to Run

### 1. Clone the Repository

Clone this repository to your local machine using Git:

git clone git@github.com:lizewkn/eastech-demo-3.git

### 2. Frontend Setup

Open a terminal and navigate to the `user-registration-form` directory:

cd user-registration-form

Install the required dependencies for the Angular frontend:

npm install

### 3. Start the Angular Development Server

Run the Angular development server:

ng serve

The frontend will be available at: http://localhost:4200/

### 4. Backend Setup

Open a new terminal and navigate to the `spring-boot-project` directory:

cd spring-boot-project

### 5. Start the Spring Boot Application

Run the Spring Boot application using Maven:

mvn spring-boot:run

The backend will be available at: http://localhost:8080/

## How to Use

1. Open your web browser and go to http://localhost:4200/

2. Fill in the "First Name" and "Last Name" fields in the user registration form.

3. Click the "Submit" button to send the form data to the backend.

4. The user data will be stored on the backend and displayed on the page: http://localhost:8080/users

5. To fetch a specific user by ID, use the following endpoint: http://localhost:8080/users/{id}

You should have successfully set up and run the user registration form with the Spring Boot backend.