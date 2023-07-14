const Workout = require("../models/workout.model");
const mongoose = require("mongoose");

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  let emptyFields = []

  if (!title){
    emptyFields.push('title')
  }
  if (!load){
    emptyFields.push('load')
  }
  if (!reps){
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0){
    return res.status(400).json({error: "Please fill in all fields",emptyFields})
  }

  try {
    const newWorkout = await Workout.create({ title, reps, load });
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout!" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    res.status(400).json({ error: "No such workout!" });
  }
  res.status(200).json(workout);
};

const deleteOneWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout!" });
  }

  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    res.status(400).json({ error: "No such workout!" });
  }
  res.status(200).json(workout);
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout!" });
  }

  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    res.status(400).json({ error: "No such workout!" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getAll,
  getOneWorkout,
  deleteOneWorkout,
  updateWorkout,
};
