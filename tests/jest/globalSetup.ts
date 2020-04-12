const server = require("../../src/server").default;

module.exports = async () => {
  global.localServer = await server.start({ port: 4000 });
};
