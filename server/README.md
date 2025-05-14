# E-Commerce Backend API

This is the backend API for the e-commerce application built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- User authorization (admin vs regular users)
- Product management (CRUD operations)
- Order processing
- Reviews and ratings
- Database seeding for development

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the server directory
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

### Running the Server

Development mode:
```
npm run dev
```

Production mode:
```
npm start
```

### Seeding the Database

To import sample data:
```
npm run data:import
```

To destroy all data:
```
npm run data:destroy
```

## API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product by ID
- `POST /api/products` - Create a product (Admin only)
- `PUT /api/products/:id` - Update a product (Admin only)
- `DELETE /api/products/:id` - Delete a product (Admin only)
- `POST /api/products/:id/reviews` - Create product review

### Users

- `POST /api/users` - Register a user
- `POST /api/users/login` - Authenticate user & get token
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users` - Get all users (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)
- `GET /api/users/:id` - Get user by ID (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)

### Orders

- `POST /api/orders` - Create new order
- `GET /api/orders/myorders` - Get logged in user orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/pay` - Update order to paid
- `GET /api/orders` - Get all orders (Admin only)
- `PUT /api/orders/:id/deliver` - Update order to delivered (Admin only) 