const express = require('express')
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getProjects, getProject, addProject, updateProject, deleteProject } = require('./project.controller')
const router = express.Router()

router.get('/', log, getProjects)
router.get('/:id', log, getProject)
router.post('/', log, addProject)
router.put('/:id', log, updateProject)
router.delete('/:id', log, deleteProject)

module.exports = router