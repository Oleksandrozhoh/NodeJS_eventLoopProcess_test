const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

setTimeout(() => console.log("timer 1 finished"), 0);
setImmediate(() => console.log("immediate timer finished"));
console.log("top level console.log");

fs.readFile("./test-file.txt", "utf-8", () => {
  console.log("IO finished");
  console.log("===============================");
  setTimeout(() => console.log("timer 2 finished"), 0);
  setImmediate(() => console.log("immediate timer 2 finished"));
  setTimeout(() => console.log("timer 3 finished"), 3);

  process.nextTick(() => console.log("process.nextTick"));
  // process.env.UV_THREADPOOL_SIZE = 2;

  // event loop will delegete the execution of this heavy tasks to the event pool where we have 4 threads by default ready
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
    console.log(Date.now() - start, "password encrypted")
  );
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
    console.log(Date.now() - start, "password encrypted")
  );
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
    console.log(Date.now() - start, "password encrypted")
  );
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
    console.log(Date.now() - start, "password encrypted")
  );
});

console.log("top level code finished");
