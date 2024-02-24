const EventEmitter = require("events");
const http = require("http");

// const emitter = new EventEmitter();

// emitter.on("newSale", () => console.log("There was a new sale"));
// emitter.on("newSale", () => console.log("Customer name Alex"));
// emitter.on("newSale", (qty) => console.log(`We sold ${qty} items`));
// emitter.emit("newSale", 9);

const server = http.createServer();
server.on("request", (req, res) => {
  console.log(req.url);
  console.log("request recieved");
  res.end("request recieved");
});
server.on("request", (req, res) => console.log("request recieved again"));
server.on("close", (req, res) => console.log("server closed"));

server.listen("8000", "127.0.0.1", () =>
  console.log("waiting for requests...")
);
