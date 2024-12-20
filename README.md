URL Shortener API
A simple and efficient URL Shortener API built with Node.js and Express.js. This API allows users to create shortened URLs, manage them, and track their usage. It also supports user authentication, URL creation, retrieval, updating, and deletion, along with analytics on URL usage.

Features
User Authentication with JWT (JSON Web Tokens)
Create, Retrieve, Update, Delete shortened URLs
Analytics on URL usage (clicks count, etc.)
URL Aliases are automatically generated and collision-resistant
Token-based Authentication for secured API endpoints
Tech Stack
Backend Framework: Node.js with Express.js
Database: MongoDB (or any other NoSQL database of your choice)
Authentication: JWT (JSON Web Tokens)
Version Control: Git (hosted on GitHub)
Environment Variables: For configuration like JWT Secret, Database URL, etc.
API Endpoints
1. POST /api/auth/register
Register a new user.

Request Body:
json
Copy code
{
  "username": "user1",
  "email": "user1@example.com",
  "password": "password123"
}
Response:
json
Copy code
{
  "msg": "User registered successfully"
}
2. POST /api/auth/login
Login and get a JWT token.

Request Body:
json
Copy code
{
  "email": "user1@example.com",
  "password": "password123"
}
Response:
json
Copy code
{
  "token": "your-jwt-token"
}
3. POST /api/urls/shorten
Create a new shortened URL (requires authentication).

Request Body:
json
Copy code
{
  "url": "https://www.example.com"
}
Response:
json
Copy code
{
  "shortenedUrl": "http://localhost:5000/abc123"
}
4. GET /api/urls/:alias
Retrieve the original URL by alias.

Response:
json
Copy code
{
  "originalUrl": "https://www.example.com"
}
5. DELETE /api/urls/:alias
Delete a shortened URL (requires authentication).

Response:
json
Copy code
{
  "msg": "Shortened URL deleted successfully"
}
Environment Variables
Make sure to create a .env file in the root of your project and include the following variables:

makefile
Copy code
JWT_SECRET=your_jwt_secret_key
DB_URI=mongodb://localhost:27017/urlshortener
PORT=5000
Installation
Clone the repository.
bash
Copy code
git clone https://github.com/sonu-kumar121/url-shortener-api.git
Navigate to the project directory.
bash
Copy code
cd url-shortener-api
Install dependencies.
bash
Copy code
npm install
Set up environment variables in a .env file.

Start the application.

bash
Copy code
npm start
The server will run on http://localhost:5000.

Running Tests
To run tests for your API, use the following command:

bash
Copy code
npm test
#   U R L - S h o r t e n e r - A P I  
 