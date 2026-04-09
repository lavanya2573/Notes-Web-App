# NotesApp

A full-stack notes application built with React, Node.js, Express, and MongoDB.

## Features

- User Registration and Login
- Create, Read, Update, and Delete (CRUD) notes
- Secure authentication with JWT
- Responsive design

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- bcryptjs for password hashing
- Cookie-parser

### Frontend
- React.js
- Redux Toolkit
- React Router
- Vite

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```
   cd Backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd Frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd Backend
   npm start
   ```

2. Start the frontend:
   ```
   cd Frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Environment Variables

### Backend (.env)
```
PORT=5000
SecriteKey=your_secret_key
```

## API Endpoints

### Auth Routes
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user
- `GET /auth/islogin` - Check if user is logged in

### Notes Routes
- `POST /notes/create` - Create a new note
- `GET /notes/getnotes` - Get all notes
- `PUT /notes/update/:id` - Update a note
- `DELETE /notes/delete/:id` - Delete a note

## License

ISC

