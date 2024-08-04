require('dotenv').config()
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')

const router = require('./route')
const app = express();

app.use(express. json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: "*"
}));
app.use('/', router);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  socket.on("join", ({ name, room }) => {
    socket.join(room);

    socket.emit("message", {
      data: { user: { name: "Admin" }, message: `Hey! How are u, ${name}` }
    });
  });

  io.on('disconnect', () => {
    console.log('disconnect');
  })
})

const PORT = process.env.PORT || 5001;

server.listen(5000, () => {
  console.log("Server is running!")
})