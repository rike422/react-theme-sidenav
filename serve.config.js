const chokidar = require("chokidar");
const stringify = require("json-stringify-safe");
const WebSocket = require("ws");
const path = require("path");

module.exports = {
  content: [path.resolve(__dirname, "playground")],
  port: 9000,
  hot: {
    host: "localhost",
    port: 8081
  },
  require: ["babel-register"],
  open: true,
  on: {
    listening: () => {
      console.log("listening");
      const socket = new WebSocket("ws://localhost:8081");
      const watchPath = __dirname;
      const options = {};
      const watcher = chokidar.watch(watchPath, options);
      watcher.on("change", () => {
        const data = {
          type: "broadcast",
          data: {
            type: "window-reload",
            data: {}
          }
        };

        socket.send(stringify(data));
      });
    }
  }
};
