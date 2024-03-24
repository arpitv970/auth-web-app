# Auth Web App - Next.js 14

This project is dedicated to implementing Authentication using various strategies by leveraging the power combo of Next.js 14 & Auth.js. We aim to provide seamless user authentication experiences through the following strategies:

- User `Email` & `Password`
- O-Auth for Social Media providers:
  - `Google`
  - `GitHub`

# Tech Stack

| Technology         | Description     |
| ------------------ | --------------- |
| **Frontend**       | React / Next.js |
| **Backend**        | Next.js         |
| **UI**             | Shadcn UI       |
| **Styling**        | Tailwind CSS    |
| **Authentication** | Auth.js         |
| **Email Service**  | Resend          |

# Local Setup

Follow these steps to set up the project locally:

1. **Fork the Project Repo**

   - Fork the project repository from GitHub to your account.

2. **Clone the Project**

   - Clone the forked repository to your local machine:
     ```
     git clone https://github.com/your-username/auth-web-app.git
     ```

3. **Navigate to the Project Directory**

   - Change your current directory to the project directory:
     ```
     cd auth-web-app
     ```

4. **Install Dependencies**

   - Install all the project dependencies using npm:
     ```
     npm install
     ```

5. **Run the Project Locally**
   - Start the development server to run the project locally:
     ```
     npm run dev
     ```

# Implementation Details

## Authentication Strategies

### User Email & Password

This strategy involves users signing in using their email addresses and passwords. We utilize Auth.js to handle authentication securely.

### O-Auth for Social Media Providers

We support O-Auth authentication for two popular social media platforms:

- `Google`
- `GitHub`

## React Server Component

We utilize the `React Server Component` provided by `Next.js 14` for efficient `server-side rendering` of React components.

# Deployment

This project is deployed at `Vercel`, click [here](https://auth-web-app-xi.vercel.app) to use the live Web Application
