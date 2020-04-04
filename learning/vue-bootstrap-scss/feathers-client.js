import io from "socket.io-client";
import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";

const socket = io("http://localhost:3030", {
  transports: ["websocket"],
  forceNew: true
});

const client = feathers()
  .configure(socketio(socket));

const userService = client.service("users");

userService.on("created", user => console.log("A user created", user));

// Use the users service from the server
userService.create({
  email: "test2@y.com",
  password: "156"
});
