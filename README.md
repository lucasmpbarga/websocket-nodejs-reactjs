# websocket-nodejs-reactjs

This project is a simple web application that demonstrates the use of WebSockets with a React frontend and an Express backend.
Here’s the corrected version of your markdown with proper formatting:

# Project Structure

```
.gitignore
backend/
  package.json
  server.js
frontend/
  package.json
  public/
    index.html
    manifest.json
    robots.txt
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    reportWebVitals.js
    setupTests.js
    WebSocketComponent.js
README.md
```

## Install dependencies for both frontend and backend:

```sh
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

## Running the Application

### Start the backend server:

```sh
# Navigate to the backend directory and run the server
cd backend
npm start
```

The backend server will run on [http://localhost:3000](http://localhost:3000).

### Start the frontend application:

```sh
# Navigate to the frontend directory and run the frontend application
cd frontend
npm start
```

The frontend application will run on [http://localhost:3000](http://localhost:3000).

## WebSocket Communication

The WebSocket connection is established between the frontend and backend. The backend sends messages to the frontend, which are displayed in the `WebSocketComponent`.

## License

This project is licensed under the MIT License.
