const { info } = require("./data");
const { doesExist } = require("./helper");

exports.operations = (socket) => {
  socket.emit("connectUser", { rooms: info.rooms });
  socket.on("addRoom", (data) => {
    socket.join(data);
    if (!doesExist(info.rooms, data)) {
      info.rooms.push({ name: data });
      socket.broadcast.emit("rooms", data);
    }
  });
  socket.on("chat", (data) => {
    console.log(data);
    socket.to(data.room).emit("chat", data.msg);
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("disconnectUser", { newUser: false });
    console.log("Client disconnected");
  });
};
