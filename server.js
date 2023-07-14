const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const workOutRoutes = require("./routes/workouts")
const corsOptions = require("./config/corsOption")

require("dotenv").config();

const app = express();

app.use(cors(corsOptions))
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection
connection.once('open',() => {
    console.log("MongoDB connection established successfully!")
})

app.get("/",(req,res) => {
  res.send("Hello!!!")
})
app.use("/workouts",workOutRoutes)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
