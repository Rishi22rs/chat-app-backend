const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { operations } = require("./components/operations");

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

httpServer.listen(port, () => console.log("runnning"));

app.get("/", (req, res) => {
  res.send("am working");
});

io.on("connection", (socket) => {
  console.log("Client connected");
  operations(socket);
});
