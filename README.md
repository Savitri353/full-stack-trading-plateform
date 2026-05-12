# Zerodha Clone – MERN Stack Trading Platform

A full-stack Zerodha-inspired trading platform built using the MERN stack.  
This project simulates core trading platform functionalities such as authentication, portfolio management, holdings tracking, funds management, and stock buy/sell operations.

---

# Project Structure

```text
ZERODHA-CLONE/
│
├── frontend/     → Landing page & authentication UI
├── dashboard/    → Trading dashboard (holdings, funds, orders, portfolio)
├── backend/      → REST APIs, authentication & database logic
│
└── README.md
```

---

# Features

## Authentication & Security
- User Signup & Login
- JWT Authentication
- Cookie-based Session Handling
- Protected Routes
- Logout Functionality
- Password Hashing using bcrypt

---

## Trading Features
- Buy Stocks
- Sell Stocks
- Holdings Management
- Funds Management
- User-Specific Dashboard
- Order Validation
- Available Margin Calculation
- Used Margin Tracking
- Order History

---

## Dashboard Features
- Portfolio Summary
- Holdings Table
- Funds Section
- Buy/Sell Modal
- Simulated P&L Calculations
- Interactive Stock Graphs

---

# Tech Stack

## Frontend
- React.js
- Axios
- React Router DOM
- CSS

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JWT (JSON Web Token)
- bcrypt
- cookie-parser

---

# Folder Details

## frontend/
Contains:
- Landing Page
- Login & Signup Pages
- Navbar & UI Components

---

## dashboard/
Contains:
- Holdings
- Funds
- Orders
- Portfolio Summary
- Buy/Sell Windows
- Dashboard Components

---

## backend/
Handles:
- Authentication APIs
- JWT Verification
- Database Operations
- Trading Logic
- Holdings & Funds Management
- Order Processing

---

# Authentication Flow

1. User signs up using email and password.
2. Password is hashed using bcrypt.
3. User logs in.
4. JWT token is generated.
5. Token is stored in HTTP-only cookies.
6. Protected routes verify the token before granting access.

---

# Buy/Sell Logic

## BUY
- Checks available funds
- Deducts balance
- Updates holdings
- Updates average stock price
- Creates order history

## SELL
- Validates stock ownership
- Validates stock quantity
- Updates holdings
- Adds funds back to account
- Updates order history

---

# Screenshots

## Landing Page
_Add screenshot here_

## Login Page
_Add screenshot here_

## Dashboard
_Add screenshot here_

## Holdings
_Add screenshot here_

## Funds Section
_Add screenshot here_

## Buy/Sell Window
_Add screenshot here_

---

# Demo Video

_Add your YouTube demo link here_

Example:

```md
[Watch Project Demo](https://youtu.be/your-video-link)
```

---

# Installation & Setup

## Clone Repository

```bash
git clone <your-repository-link>
```

---

## Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## Install Dashboard Dependencies

```bash
cd dashboard
npm install
```

---

## Install Backend Dependencies

```bash
cd backend
npm install
```

---

# Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=3002
MONGO_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

---

# Run Backend

```bash
cd backend
npm start
```

---

# Run Frontend

```bash
cd frontend
npm start
```

---

# Run Dashboard

```bash
cd dashboard
npm start
```

---

# Key Learnings

Through this project, I learned:

- Full-stack MERN development
- JWT authentication flow
- Cookie-based authentication
- REST API development
- MongoDB Atlas integration
- Trading dashboard logic
- Holdings & funds management
- React state management
- Backend business logic
- Frontend-backend integration
- Protected routes & authorization

---

# Future Improvements

- Live stock market API integration
- Real-time stock price updates
- Fully responsive mobile UI
- Advanced portfolio analytics
- Real-time notifications
- Dark mode support

---

# Author

**Savitri Gamit**  
3rd Year Information Technology Engineering Student  
Passionate about Full-Stack Web Development and Problem Solving.
