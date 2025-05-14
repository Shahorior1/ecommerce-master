# Backend Setup Guide

This guide will help you set up and run the backend API server for the e-commerce application.

## Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Setup Steps

### 1. Install MongoDB

If using a local MongoDB installation:
- Download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
- Start the MongoDB service

If using MongoDB Atlas:
- Create a free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Create a new cluster
- Get your connection string

### 2. Setup Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_for_jwt
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

For local MongoDB, it would look like: `mongodb://localhost:27017/ecommerce`

### 3. Install Dependencies

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

### 4. Seed the Database (Optional)

To populate the database with sample data:

```bash
npm run data:import
```

### 5. Start the Backend Server

Development mode (with nodemon):
```bash
npm run dev
```

## Running the Full Stack Application

### Method 1: Run Frontend and Backend Separately

Terminal 1 (Backend):
```bash
cd server
npm run dev
```

Terminal 2 (Frontend):
```bash
npm run dev
```

### Method 2: Using Concurrently (Alternative Setup)

You can install `concurrently` to run both servers with one command:

1. Add to the root package.json:

```json
"scripts": {
  "dev": "vite",
  "server": "cd server && npm run dev",
  "dev:full": "concurrently \"npm run dev\" \"npm run server\""
}
```

2. Install concurrently:
```bash
npm install --save-dev concurrently
```

3. Run both with one command:
```bash
npm run dev:full
```

## API Endpoints

The backend API will be available at: `http://localhost:5000`

Frontend development server will proxy API requests to the backend. 