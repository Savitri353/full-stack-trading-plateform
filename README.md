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

<img width="1900" height="853" alt="image" src="https://github.com/user-attachments/assets/258231ff-24e6-4f96-9ac2-ddf1793f0514" />

## Login Page

<img width="1919" height="868" alt="image" src="https://github.com/user-attachments/assets/37d234bb-326a-4964-b063-2b4b7466d84c" />

## Dashboard

<img width="1916" height="865" alt="image" src="https://github.com/user-attachments/assets/2dead09e-e2ef-452b-b4b9-0ee9f535bb49" />

<img width="1919" height="871" alt="image" src="https://github.com/user-attachments/assets/21ecb7cb-ec60-4387-a3e7-86f615a352b9" />

## Holdings

<img width="1919" height="869" alt="image" src="https://github.com/user-attachments/assets/702c2cf8-023c-47bf-a683-f1dc7638522d" />

<img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/36b839dc-beb0-47b9-b1c9-d272c2d02366" />

## Funds Section

<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/fa067273-cad3-4b42-8aa9-2d49b9c32048" />

<img width="1919" height="860" alt="image" src="https://github.com/user-attachments/assets/f9dbbde9-2024-4d40-bb68-860853508504" />

<img width="1919" height="871" alt="image" src="https://github.com/user-attachments/assets/9f9ae3c2-64c3-472c-beba-0a78b876a554" />

## Buy/Sell Window

<img width="1895" height="817" alt="image" src="https://github.com/user-attachments/assets/147e033c-bcb7-4f2e-a8ca-f9cabc21219f" />

<img width="1894" height="849" alt="image" src="https://github.com/user-attachments/assets/ef548b86-59fb-47ff-9a8c-6ffcc954247b" />

# Demo Video

https://youtu.be/tAL_nGGQFh8

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
