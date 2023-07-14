const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    reps: {
      type: Number,
      required: true,
      min: 1,
    },
    load: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
