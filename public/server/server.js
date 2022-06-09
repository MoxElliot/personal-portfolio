const express = require("express");
const cors = require("cors");
const mongoose = require{"mongoose"}

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());


//Routes to use
const usersRouter = require("./routes/users");
app.use(require("/users"), usersRouter);

 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

const uri = "mongodb+srv://eric0952:Eric5042@mongoatlascluster.5nkuq.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected")
})
.catch(err => console.log(err))