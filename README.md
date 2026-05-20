# HireSense AI 🤖

An AI-powered recruitment platform built with a **microservices architecture** using Node.js.
It automates resume analysis, candidate matching, and recruitment workflows
through 5 independent, loosely-coupled services.

## Architecture Overview

```
Client Request
      ↓
 [API Gateway]  ← single entry point, routes all traffic
      ↓
 ┌────────────────────────────────────────┐
 │  [Auth Service]   → JWT authentication │
 │  [Resume Service] → resume parsing     │
 │  [Analysis Service] → AI scoring       │
 │  [User Service]   → user management    │
 └────────────────────────────────────────┘
      ↓
  [MongoDB]
```

## Services

| Service | Port | Responsibility |
|---------|------|----------------|
| api-gateway | 3000 | Routes requests to correct service |
| auth-service | 3001 | Registration, login, JWT issuance |
| resume-service | 3002 | Resume upload and parsing |
| analysis-service | 3003 | AI-powered resume scoring |
| user-service | 3004 | User profile management |

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Auth:** JWT (JSON Web Tokens)
- **Architecture:** Microservices with REST API communication
- **Language:** JavaScript (ES6+)

## Key Features

- 🔐 Secure JWT authentication with token verification across services
- 📄 Resume upload and structured data extraction
- 🤖 AI-powered candidate analysis and scoring
- 🌐 Centralised API Gateway handling routing and load distribution
- 👤 Independent user management service
- 🔒 Each service is independently deployable and scalable

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Neha-004/HireSense-AI-clean.git
cd HireSense-AI-clean

# Install dependencies for each service
cd api-gateway && npm install && cd ..
cd auth-service && npm install && cd ..
cd resume-service && npm install && cd ..
cd analysis-service && npm install && cd ..
cd user-service && npm install && cd ..

# Set up environment variables
# Create .env file in each service with:
# PORT=300X
# MONGODB_URI=your_mongodb_uri
# JWT_SECRET=your_secret_key

# Run each service in a separate terminal
cd api-gateway && npm start
cd auth-service && npm start
cd resume-service && npm start
cd analysis-service && npm start
cd user-service && npm start
```

## API Endpoints

All requests go through the API Gateway at `http://localhost:3000`

```
POST   /auth/register     → Register new user
POST   /auth/login        → Login, returns JWT
POST   /resume/upload     → Upload and parse resume
GET    /analysis/:id      → Get AI analysis for a resume
GET    /user/profile      → Get user profile (auth required)
PUT    /user/profile      → Update user profile (auth required)
```

## Why Microservices?

Each service can be:
- **Scaled independently** based on load
- **Deployed separately** without affecting other services
- **Maintained by different teams** in a production environment
- **Tested in isolation** for better reliability

## Author

**Neha Tomar** — Full Stack Developer (MERN) | AI Integration
- GitHub: [@Neha-004](https://github.com/Neha-004)
- LinkedIn: [linkedin.com/in/neha-tomar-580146224](https://linkedin.com/in/neha-tomar-580146224)
