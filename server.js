const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const workOutRoutes = require("./routes/workouts")
const corsOptions = require("./config/corsOption")
const path = require("path")

require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, "..",'frontend','build')));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection
connection.once('open',() => {
    console.log("MongoDB connection established successfully!")
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.use("/workouts",workOutRoutes)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
