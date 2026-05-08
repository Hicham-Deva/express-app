Express Users API

A simple and clean RESTful API for managing users, built with Node.js and Express.js. This project demonstrates a proper MVC structure, custom middleware for validation and error handling, and full CRUD capabilities.
🚀 Features

    CRUD Operations: Create, Read, Update, and Delete users.
    Validation: Middleware to ensure name and email are provided.
    Error Handling: Centralized error handling and 404 responses.
    Logging: Request logging middleware.
    Structured Code: Organized into separate controllers and routes directories.
    Git Version Control: Fully integrated with GitHub.

🛠 Tech Stack

    Node.js - Runtime environment
    Express.js - Web framework
    Git & GitHub - Version control

📋 Prerequisites

Before running this project, make sure you have installed:

    Node.js (Recommended LTS version)
    pnpm or npm

📦 Installation

    Clone the repository:

    git clone https://github.com/YOUR_USERNAME/express-app.gitcd express-app

 

    Install dependencies:
    pnpm install
    # or
    npm install

🏃 Usage 
To start the server: 
    pnpm start
The server will start on http://localhost:3000. 
📡 API Endpoints 
1. Get All Users 

Returns a list of all users. 

     URL: /users
     Method: GET
     Response: 200 OK (Array of user objects)
     

2. Create User 

Creates a new user. 

     URL: /users
     Method: POST
     Body (JSON):
    {
        "name": "John Doe",
        "email": "john@example.com"
    }

     Success Response: 200 OK
     Error Response: 404 Not Found (if user ID doesn't exist)
     

4. Delete User 

Deletes a user by ID. 

     URL: /users/:id
     Method: DELETE
     Success Response: 200 OK
     Error Response: 404 Not Found (if user ID doesn't exist)
     

📂 Project Structure 
express-app/
    └── src
        ├── controllers
        │   └── userController.js
        ├── middleware/           # Custom Middleware
        │   └── validateUser.js
        ├── routes/               # API Routes
            └── userRoutes.js
    ├── node_modules/         # Dependencies
    ├── .gitignore           # Files ignored by Git
    ├── index.js             # Entry point (Server setup)
    ├── package.json         # Project metadata
    ├── pnpm-lock.yaml       # Dependency lock file
    └── README.md            # This file

📝 Example Usage (cURL) 
    Get Users: curl http://localhost:3000/users
    Create User:  
            curl -X POST http://localhost:3000/users \
            -H "Content-Type: application/json" \
            -d '{"name": "Alice", "email": "alice@example.com"}'
    Delete User: curl -X DELETE http://localhost:3000/users/1

 Contributing 

This is a learning project. Feel free to fork it and submit pull requests for improvements. 
📄 License 

This project is open source and available under the MIT License. 


