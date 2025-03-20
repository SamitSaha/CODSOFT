const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Post a new job
router.post("/", async (req, res) => {
  try {
    const { title, company, location, description, salary, postedBy } = req.body;
    const newJob = new Job({ title, company, location, description, salary, postedBy });
    await newJob.save();
    res.json(newJob);
  } catch (error) {
    res.status(400).json({ error: "Invalid job data" });
  }
});

module.exports = router;
