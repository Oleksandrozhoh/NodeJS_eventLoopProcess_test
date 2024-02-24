const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // entire file will be loaded into a memory
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // using streams to read the file piece by piece => not overloading the memory
  // the issue here is that data comes much faster from file that what we are able to send back to the cliet
  // const readable = fs.ReadStream("./tedfasst-file.txt");
  // readable.on("data", (chunk) => res.write(chunk));
  // readable.on("end", () => res.end());
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found!");
  // });
  const readable = fs.ReadStream("./test-file.txt");
  readable.pipe(res);
});

server.listen("8000", "127.0.0.1", () => {
  console.log("waiting for requests...");
});
