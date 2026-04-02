# WTM Hyderabad: Backend Infrastructure Design

This document details the database schema and API structure for the WTM Hyderabad platform.

## 1. Database Schema (JSON Representation)

The following JSON schema is designed with a document-oriented NoSQL approach (e.g., MongoDB), but conceptually translates easily to relational schemas if preferred.

```json
{
  "Events": {
    "collection": "events",
    "schema": {
      "_id": "ObjectId",
      "title": "String",
      "date": "Date",
      "venue": "String",
      "theme": "String",
      "speakers": ["ObjectId (ref: Speakers)", "String"], 
      "team": ["ObjectId (ref: TeamMembers)"],
      "createdAt": "Date",
      "updatedAt": "Date"
    }
  },
  "Registrations": {
    "collection": "registrations",
    "schema": {
      "_id": "ObjectId",
      "eventId": "ObjectId (ref: Events)",
      "applicant": {
        "firstName": "String",
        "lastName": "String",
        "email": "String",
        "organization": "String",
        "role": "String",
        "linkedInProfile": "String"
      },
      "status": "String (Enum: ['Pending', 'Approved', 'Waitlisted'])",
      "appliedAt": "Date",
      "statusUpdatedAt": "Date"
    }
  },
  "TeamMembers": {
    "collection": "team_members",
    "schema": {
      "_id": "ObjectId",
      "name": "String",
      "role": "String",
      "email": "String",
      "bio": "String",
      "profilePictureUrl": "String",
      "managedEvents": ["ObjectId (ref: Events)"],
      "createdAt": "Date"
    }
  },
  "PartnerInquiries": {
    "collection": "partner_inquiries",
    "schema": {
      "_id": "ObjectId",
      "companyName": "String",
      "contactPerson": "String",
      "email": "String",
      "interestArea": "String",
      "message": "String",
      "submittedAt": "Date"
    }
  }
}
```

## 2. API Documentation

### A. Event Registration API (Invite-Only Logic)

#### **Apply for an Event**
- **Endpoint**: `POST /api/v1/events/:eventId/register`
- **Description**: Captures applicant data for an invite-only event. The backend automatically sets the newly generated registration record's status to `Pending`.
- **Request Body**:
  ```json
  {
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane@example.com",
    "organization": "Tech Corp",
    "role": "Software Engineer",
    "linkedInProfile": "https://linkedin.com/in/janedoe"
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "message": "Application successfully submitted. Your status is Pending.",
    "registration": {
      "id": "65b9c8fba321",
      "status": "Pending"
    }
  }
  ```

#### **Update Registration Status (Admin Only)**
- **Endpoint**: `PATCH /api/v1/registrations/:registrationId/status`
- **Description**: Allows administrators to approve or waitlist an applicant.
- **Request Body**:
  ```json
  {
    "status": "Approved" // or "Waitlisted"
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "message": "Status updated successfully.",
    "registration": {
      "id": "65b9c8fba321",
      "status": "Approved"
    }
  }
  ```

### B. Team Profiles API

#### **Get Team Members**
- **Endpoint**: `GET /api/v1/team`
- **Description**: Retrieves a list of all team members. The response automatically unrolls the `managedEvents` reference to display the details of the events they managed.
- **Success Response (200 OK)**:
  ```json
  {
    "team": [
      {
        "id": "team_member_123",
        "name": "Alice Johnson",
        "role": "Event Coordinator",
        "bio": "Passionate community builder...",
        "managedEvents": [
          {
            "id": "event_456",
            "title": "WTM IWD 2026: Break the Pattern",
            "date": "2026-03-08T10:00:00Z"
          }
        ]
      }
    ]
  }
  ```

### C. Partnerships API

#### **Become a Partner**
- **Endpoint**: `POST /api/v1/partners/contact`
- **Description**: Target endpoint for the 'Become a Partner' contact form. Securely stores the submission in the `PartnerInquiries` collection.
- **Request Body**:
  ```json
  {
    "companyName": "Innovate Ltd",
    "contactPerson": "John Smith",
    "email": "john@innovate.example.com",
    "interestArea": "Financial Sponsorship",
    "message": "Looking to sponsor the upcoming IWD event!"
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Partner inquiry received. Our team will reach out to you shortly."
  }
  ```
