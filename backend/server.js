const WebSocket = require("ws");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const wss = new WebSocket.Server({ noServer: true });

// Handle WebSocket connection
wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send a message to the client
  ws.send("Connected to WebSocket Server");
});

// Integrate WebSocket with HTTP server
app.server = app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

app.server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

// Webhook endpoint
app.post("/webhook", (req, res) => {
  const event = req.body;
  console.log("Webhook event received:", event);

  // Send the webhook data to all connected WebSocket clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(event)); // Send event to the client
    }
  });

  res.status(200).send("Webhook received successfully");
});
