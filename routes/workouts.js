// const Workout = require("../models/Workout");
const {
  createWorkout,
  getAll,
  getOneWorkout,
  deleteOneWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const express = require("express");

const router = express.Router();

router.get("/", getAll);

router.post("/", createWorkout);

router.get("/:id", getOneWorkout);

router.delete("/:id", deleteOneWorkout);

router.patch("/:id",updateWorkout);

module.exports = router;
