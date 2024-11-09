import React, { useEffect, useState } from "react";

const WebSocketComponent = () => {
  const [message, setMessage] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Only create a WebSocket connection once
    if (!ws) {
      const socket = new WebSocket("ws://localhost:3000");

      socket.onopen = () => {
        console.log("Connected to WebSocket server");
      };

      socket.onmessage = (event) => {
        // Handle incoming messages
        const newMessage = event.data;
        console.log("Received message:", newMessage);

        // Check if the message is already in the state to prevent duplication
        setMessage((prev) => {
          if (prev.some((msg) => msg.message === newMessage)) {
            return prev; // Do not add the message if it already exists
          }
          return [...prev, { message: newMessage }]; // Add new message
        });
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed");
      };

      // Store the WebSocket instance in a ref (no re-rendering)
      setWs(socket);
    }

    // Cleanup WebSocket connection when the component unmounts
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [ws]); // Ensure WebSocket is only initialized once

  return (
    <div>
      <h1>WebSocketComponent:</h1>
      <p>Messages from server:</p>
      <ul>
        {message.map((msg, index) => (
          <li key={index}>{msg.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketComponent;
