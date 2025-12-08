# Express Notes API (Basic Version)

This project is a basic Node.js + Express application designed as an introductory server structure.
The application includes request logging, error handling middleware, and simple demonstration routes.

## Features

- Environment variables via `dotenv`
- JSON body parsing using `express.json()`
- CORS enabled with `cors`
- HTTP request logging via `pino-http`
- Basic routing structure:
  - `GET /notes`
  - `GET /notes/:noteId`
  - `GET /test-error`
- Custom `404 Not Found` middleware
- Custom `500 Internal Server Error` middleware

## Requirements

- Node.js v18+
- npm or yarn
- `.env` file with environment variables

Example `.env`:
