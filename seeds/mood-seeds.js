const { Mood } = require("../models");

const moodData = [
  {
    title: "productive, energetic, active",
    color: "green",
  },
  {
    title: "sad, lonely, depressed",
    color: "blue",
  },
  {
    title: "sick, tired, lazy",
    color: "yellow",
  },
  {
    title: "average, normal, good",
    color: "orange",
  },
  {
    title: "angry, anxious, frustrated",
    color: "red",
  },
];

const seedMood = () => Mood.bulkCreate(moodData);

module.exports = seedMood;
