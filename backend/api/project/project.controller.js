
const logger = require('../../services/logger.service')
const projectService = require('../project/project.service')

async function getProjects(req, res) {
    try {
        const filterBy = req.query
        const projects = await projectService.query(filterBy)
        res.send(projects)
    } catch (err) {
        logger.error('Failed to get projects', err)
        res.status(500).send({ err: 'Failed to get projects' })
    }
}

async function getProject(req, res) {
    try {
        const project = await projectService.getById(req.params.id)
        res.send(project)
    } catch (err) {
        logger.error('Failed to get project', err)
        res.status(500).send({ err: 'Failed to get project' })
    }
}

async function addProject(req, res) {
    try {
        const project = req.body
       const  savedProject = await projectService.save(project)
        res.send(savedProject)
    } catch (err) {
        console.log(err)
        logger.error('Failed to add project', err)
        res.status(500).send({ err: 'Failed to add project' })
    }
}

async function updateProject(req, res) {
    try {
        const project = req.body
        savedProject = await projectService.save(project)
        res.send(savedProject)
    } catch (err) {
        console.log(err)
        logger.error('Failed to update project', err)
        res.status(500).send({ err: 'Failed to update project' })
    }
}

async function deleteProject(req, res) {
    try {
        await projectService.remove(req.params.id)
        res.send({ msg: 'Project deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete project', err)
        res.status(500).send({ err: 'Failed to delete project' })
    }
}

module.exports = {
    getProjects,
    getProject,
    addProject,
    updateProject,
    deleteProject
}
