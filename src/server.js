const app = require("./index");
const connect = require("./configs/db");

app.listen(process.env.PORT || 1235, async function () {
  try {
    await connect();
    console.log("listening on port 1235");
  } catch (err) {
    console.log(err);
  }
});
