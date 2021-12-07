const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;
const host = process.env.HOSTNAME;

app.get("/", (req, res) => {
  res.send(`Request received at ${host}`);
  console.log(`Receive at:${host} and starting the loop `);
  calculation(1000000);
  append();
});

function append() {
  fs.appendFile(
    "~/log/log.txt",
    `${new Date()} on host ${host} \n`,
    function (err) {
      if (err) throw err;
      console.log("Appended!");
    }
  );
}

async function calculation(n) {
  let x = 0.0001;
  for (let i = 0; i <= n; i++) {
    x += Math.sqrt(x);
  }
}

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
  console.log("Running On: ", host, "\n");
});
