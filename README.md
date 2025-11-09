

# CRUD API Assignment

## Description
This project is a simple CRUD API built using Node.js with an **in-memory database**. The API allows you to create, read, update, and delete user records. This project was implemented as part of the RS School Node.js course.

## Technical Requirements
- Implemented in **JavaScript** (or TypeScript)
- Only allowed dependencies: `nodemon`, `dotenv`, `cross-env`, `typescript`, `ts-node`, `ts-node-dev`, linter and plugins, bundler and plugins/loaders, `uuid`, `@types/*`
- Node.js version: `24.x.x` or higher
- Prefer asynchronous API wherever possible

## Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/nodejs-assignments.git
cd nodejs-assignments/assignments/crud-api
````

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

* Create a `.env` file in the root of the project or copy from `.env.example`:

```bash
cp .env.example .env
```

* Open `.env` and set the desired port:

```
PORT=4000
```

4. **Run the application**

* **Development mode (with auto-reload):**

```bash
npm run start:dev
```

* **Production mode (bundled build):**

```bash
npm run start:prod
```

## API Endpoints

### Users Endpoint: `/api/users`

* **GET /api/users**
  Get all users.
  **Response:** 200 OK + array of users

* **GET /api/users/{userId}**
  Get a user by ID.
  **Response:**

    * 200 OK + user object (if exists)
    * 400 Bad Request (invalid UUID)
    * 404 Not Found (user not found)

* **POST /api/users**
  Create a new user.
  **Required fields:** `username`, `age`, `hobbies`
  **Response:**

    * 201 Created + newly created user
    * 400 Bad Request (if required fields are missing)
   You can use script from testPost.js and change it before use to test different scenarios:

```bash
node testPost
```
* **PUT /api/users/{userId}**
  Update an existing user.
  **Response:**

    * 200 OK + updated user
    * 400 Bad Request (invalid UUID)
    * 404 Not Found (user not found)
      You can use script from testPut.js and change it before use to test different scenarios:

```bash
node testPut
```
* **DELETE /api/users/{userId}**
  Delete a user by ID.
  **Response:**

    * 204 No Content (if deleted)
    * 400 Bad Request (invalid UUID)
    * 404 Not Found (user not found)
      You can use script from testDelete.js and change it before use to test different scenarios:

```bash
node testDelete
```
### User Object Structure

```json
{
  "id": "uuid",
  "username": "string",
  "age": 0,
  "hobbies": ["string"]
}
```

## Error Handling

* Requests to non-existing endpoints return `404 Not Found` with a human-friendly message.
* Server-side errors return `500 Internal Server Error` with a human-friendly message.

## Current Status

* CRUD API endpoints implemented (GET, POST, PUT, DELETE)
* Error handling for invalid requests and server errors
* Environment variables configured
