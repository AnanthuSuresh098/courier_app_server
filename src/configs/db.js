
const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://AnanthuSuresh:9061739040@cluster0.ig5oc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

