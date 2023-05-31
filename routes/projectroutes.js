const express=require('express');
const { createProject } = require('../controller/projectcnt');
const router=express.Router();
router.post('/create',createProject);
module.exports = router;
