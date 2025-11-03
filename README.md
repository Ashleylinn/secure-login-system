# Secure Login System
A minimal full-stack authentication system built with Node.js, Express, and PostgreSQL.
This project demonstrates secure login and registration workflows using password hashing, token-based authentication, and input validation, aligning with core cybersecurity principles of confidentiality, integrity, and trust.

## Features

- Secure user registration and login with email and password

- Password hashing using bcrypt

- JWT-based authentication for stateless session management

- Input validation and error handling to prevent injection attacks

- Protected routes accessible only with valid tokens

- Environment variables for secret key management (.env)

- Optional role-based access control (user/admin)

## Tech Stack

| Layer           | Technology                        |
|-----------------|------------------------------------|
| **Backend**     | Node.js, Express.js                |
| **Database**    | PostgreSQL                         |
| **Authentication** | bcrypt, JSON Web Tokens (JWT)   |
| **Validation**  | express-validator                  |
| **Environment** | dotenv                             |


## Database Setup

1. Create a new database in PostgreSQL (e.g., securelogindb).

2. Run the following SQL to create the users table:

```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user'
);
```

## Getting Started
1. Clone the Repository

```bash
git clone https://github.com/ashleyylin/secure-login-system.git
cd secure-login-system
```

2. Install Dependencies

```bash
npm install
```

3. Create a .env File

```bash
PORT=5000
PGUSER=postgres
PGPASSWORD=yourpassword
PGDATABASE=securelogindb
PGHOST=localhost
JWT_SECRET=your_jwt_secret
```

4. Start the Server

```bash
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/register` | Register a new user (stores hashed password) |
| **POST** | `/login` | Authenticate user and return JWT token |
| **GET** | `/profile` | Access protected route (requires JWT) |


## Example Login Request

```bash
POST /login
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response: 

```json
{
  "message": "Login successful",
  "token": "<jwt_token_here>"
}
```

## Learning Outcomes

This project deepened my understanding of secure authentication workflows, encryption, and access control in web applications.
It reinforced how small architectural choices, from hashing algorithms to token expiry, play a critical role in maintaining data confidentiality and user trust.
