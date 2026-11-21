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

5. Visit `http://localhost:3000` to use the website and API together.

## Deploy as a live website

The app is configured for Render as one Node web service: it serves the HTML pages and the `/auth` API from the same public URL. The included `render.yaml` creates the service configuration, but you must provide a MongoDB connection string as the `MONGODB_URI` secret during setup.

1. Sign in to Render and choose **New > Blueprint**.
2. Connect this GitHub repository. Render reads `render.yaml` and asks for `MONGODB_URI`; enter the connection string for a MongoDB database you control. Keep it private and do not put it in GitHub.
3. Create the Blueprint and wait for the deploy to finish. Render displays the public `onrender.com` URL for the website.

Pushes to the connected GitHub branch trigger new deployments. The service uses Render's assigned `PORT` and exposes `/health` for deployment checks.

## API routes

- `GET /health` - deployment health check
- `POST /auth/register` - create a user from `username`, `email`, and `password`
- `POST /auth/login` - check the submitted email and password

## Project status and security note

This is a student learning prototype, not a production authentication system. Passwords are currently stored as plain text, login responses are not session-based, and the coding page executes user-entered JavaScript in the browser. Do not use real passwords or sensitive personal data. Authentication, input validation, safer code execution, responsive UI, and automated tests are possible next improvements.

Progress and saved code are stored in browser `localStorage`; the dashboard's sample statistics are static. The repository does not include a real MongoDB URI or database credentials.