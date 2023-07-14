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

app.use("/workouts",workOutRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
