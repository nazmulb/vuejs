const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
const auth = require("@feathersjs/authentication-client");

const socket = io("http://localhost:3030");
const client = feathers();

// Setup the transport (Rest, Socket, etc.) here
client.configure(socketio(socket));

// Available options are listed in the "Options" section
client.configure(
  auth({
    storageKey: "auth"
  })
);

const userService = client.service("users");
const todosService = client.service("todos");

todosService.on("created", todo => console.log("A todo created", todo));
userService.on("created", user => console.log("A user created", user));

const addTodo = () => {
  // Use the todo service from the server
  todosService.create({
    title: "Go outside",
    completed: false
  });
};

const adduser = () => {
  // Use the users service from the server
  userService.create({
    email: "nazmul@gmail.com",
    password: "123"
  });
};

client
  .reAuthenticate()
  .then(() => {
    // show application page
  })
  .catch(async () => {
    // show login page
    login();
  });

const login = async () => {
  // Authenticate with the local email/password strategy
  client
    .authenticate({
      strategy: "local",
      email: "nazmul@gmail.com",
      password: "123"
    })
    .then(async () => {
      // Logged in

      // Returns the authenticated user and authenticated accessToken (JWT)
      const { user, accessToken } = await client.get("authentication");

      console.log("Successfuly loged in", user, accessToken);

      addTodo();
    })
    .catch(e => {
      // Show login page (potentially with `e.message`)
      console.error("Authentication error", e);
      adduser();
    });
};
