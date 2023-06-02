const winston = require("winston");
const config = require("config");
const app = require("./startup/app");

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

console.log(process.env.NODE_ENV);

module.exports = server;
