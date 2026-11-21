# Interview Prep Pro

A learning project for interview preparation. The app pairs a dashboard with a small coding-practice area and an Express/MongoDB registration and login API.

## Current features

- Dashboard UI with sample interview topics and progress indicators
- Registration and login routes backed by MongoDB
- Coding exercises with sample cases, a browser-side code runner, saved code, and local progress

## Technology

- HTML, CSS, JavaScript, Bootstrap
- Node.js, Express, Mongoose
- MongoDB

## Run locally

Requirements: Node.js and a MongoDB instance.

1. Clone this repository and enter the project folder.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a local `.env` from the example and set `MONGODB_URI` to a database you control:

   ```sh
   cp .env.example .env
   ```

4. Start the API:

   ```sh
   npm start
   ```

5. Open `index.html` in a browser. The page currently calls the API at `http://localhost:3000`.

## API routes

- `GET /` - simple server status
- `POST /auth/register` - create a user from `username`, `email`, and `password`
- `POST /auth/login` - check the submitted email and password

## Project status and security note

This is a student learning prototype, not a production authentication system. Passwords are currently stored as plain text, login responses are not session-based, and the coding page executes user-entered JavaScript in the browser. Do not use real passwords or sensitive personal data. Authentication, input validation, safer code execution, responsive UI, and automated tests are possible next improvements.

Progress and saved code are stored in browser `localStorage`; the dashboard's sample statistics are static. The repository does not include a real MongoDB URI or database credentials.
