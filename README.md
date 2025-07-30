# Backend API

This is the backend server for the project, built with Node.js, Express, and MongoDB.

## Features

- RESTful API for managing clients and projects
- MongoDB database integration using Mongoose
- CORS and JSON middleware setup

## Getting Started

### 1. Install dependencies

`bash
npm install

2. Start the server

npm run dev

3. Environment Variables

Create a .env file with:

PORT=5000
MONGO_URI=your_mongodb_connection_string

4. Base URL

http://localhost:5000/api

API Endpoints

POST /api/clients — Create a new client

GET /api/clients — Get all clients
