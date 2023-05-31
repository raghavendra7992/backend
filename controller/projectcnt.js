const Project = require('../model/projectModel');
const asynchandler=require("express-async-handler")

// Create a new project
exports.createProject = asynchandler(async (req, res) => {
    try {
      const project = await Project.create(req.body);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create project' });
    }
  })

// Validate start and end dates
exports.startDateEndDateValidation = (req, res, next) => {
  const { startDate, endDate } = req.body;
  if (startDate && endDate && startDate > endDate) {
    return res.status(400).json({ error: 'End date must be greater than start date' });
  }
  next();
};

// Search projects
exports.search = async (req, res) => {
  const { keyword } = req.query;
  try {
    const projects = await Project.find({ projectname: { $regex: keyword, $options: 'i' } });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search projects' });
  }
};

// Filter projects
exports.filter = async (req, res) => {
  const { division, category } = req.query;
  try {
    const projects = await Project.find({ division, category });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to filter projects' });
  }
};

// Sort projects
exports.sort = async (req, res) => {
  const { sortBy } = req.query;
  try {
    const projects = await Project.find().sort(sortBy);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to sort projects' });
  }
};

// Paginate projects
exports.paginate = async (req, res) => {
  const { page, limit } = req.query;
  try {
    const projects = await Project.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to paginate projects' });
  }
};
