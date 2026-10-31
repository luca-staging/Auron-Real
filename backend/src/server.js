const { createApp } = require("./app");

const port = Number(process.env.API_PORT || 8080);
const app = createApp();

if (require.main === module) {
  app.listen(port, function listening() {
    console.log("HELDNAV API http://localhost:" + port + "/api/v1");
  });
}

module.exports = app;
