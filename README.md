# College Community WebApp

## Overview
The **College Community WebApp** is a MEAN stack-based platform that provides students with essential information about services and facilities available around their university. The platform fosters a supportive, community-driven space where senior students share their experiences, helping newcomers settle in more easily.

## Objective
The objective of this web application is to:
- Create a **ranked database of local services** based on cost and quality.
- Enable students to contribute **reviews and recommendations** for cafes, hostels, barbers, grocery stores, and other local businesses.
- Support **shy and introverted students** by making it easier for them to access relevant services.

## Features
### **Home Page**
- Welcomes users with a **personalized message** based on their login credentials.
- Displays a **dynamically listed collection of local services**, ranked by user feedback.
- Provides a search and filter functionality to help users find specific services.

### **Service Listings**
- Categorized services such as **cafes, hostels, grocery stores, barbers**, etc.
- **Community-driven ratings and reviews** for each service.
- Sorting options by **cost, quality, and popularity**.

### **User Authentication**
- Secure **login/signup system** using JWT authentication.
- Profile management for users to update their **preferences and contributions**.

### **Review & Feedback System**
- Users can **add reviews** with ratings and descriptions.
- Reviews are displayed with timestamps and author details.
- Users can edit or delete their own reviews.

### **Admin Dashboard**
- Manage user-generated content and moderate inappropriate reviews.
- Update or remove outdated service listings.

## Tech Stack
- **Frontend:** Angular
- **Backend:** Node.js & Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT
- **Deployment:** AWS

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Jahnavi-Anand/College-Community-webApp.git
   cd college-community-webapp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. Navigate to the frontend folder and start the Angular app:
   ```bash
   cd frontend
   ng serve
   ```
5. Open `http://localhost:4200/` in your browser.

## Contribution
We welcome contributions from developers and students! If you’d like to add features or fix bugs, feel free to submit a pull request.
