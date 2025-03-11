# Mentorled-Frontend Task

A basic authentication UI built with Next.js, TypeScript, Zod, and React Hook Form, optimized with Turbopack for fast development.

## Overview

This project demonstrates a frontend setup for a Login and Signup system, with a homepage as the entry point. It focuses on UI components, form validation, and performance optimization using Next.js with the experimental Turbopack bundler.

### Features
- **Homepage**: Welcomes users with links to Login and Signup pages.
- **Login Page**: Form with email and password fields, validated using Zod.
- **Signup Page**: Form with name, email, password, and confirm-password fields, including password match validation.
- **Form Validation**: Powered by Zod and React Hook Form for robust, type-safe validation.
- **Styling**: Tailwind CSS for responsive and modern UI design.
- **Performance**: Uses Turbopack for faster compilation and hot module replacement (HMR).

## Tech Stack
- **Next.js**: React framework with App Router (version 15.2.1).
- **Turbopack**: Experimental bundler for improved performance.
- **TypeScript**: Static typing for better code reliability.
- **Zod**: Schema validation library for form data.
- **React Hook Form**: Efficient form handling with minimal re-renders.
- **Tailwind CSS**: Utility-first CSS framework for styling.


### Component Architecture
- **Schemas (`/app/schemas/`)**: 
  - `loginSchema.ts`: Defines validation rules for email (valid email format, required) and password (min 6 characters, required).
  - `signupSchema.ts`: Extends login schema with name (required) and confirmPassword (must match password).
- **Pages (`/app/[route]/page.tsx`)**:
  - `page.tsx`: Homepage with a welcome message and links to `/login` and `/signup`.
  - `login/page.tsx`: Renders a form with email and password inputs, linked to signup.
  - `signup/page.tsx`: Renders a form with name, email, password, and confirm-password inputs, linked to login.
- **Root Layout (`/app/layout.tsx`)**: Applies global styles and metadata for the app.
- **Form Submission**: 
  - Login form sends a mock POST request to `/api/auth/login` with email and password data.
  - Signup form sends a mock POST request to `/api/auth/signup` with name, email, and password data.
  - Both log responses or errors to the console. Replace with real API integration for production.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ismailinux/mentorled-frontend-task1.git
   cd mentorled-frontend-task1


2. **Install Dependencies**:
   ```bash
   npm install

3. **Run the Development Server**:
   ```bash
   npm run dev



