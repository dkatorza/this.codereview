
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy = { ctg: '' }) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('project')
        const projects = await collection.find(criteria).toArray()
        return projects
    } catch (err) {
        logger.error('cannot find projects', err)
        throw err
    }
}

async function save(project) {
    const { title, createdBy, labels, members,
        codeReview, activities, importance,
        startDate, endDate, lastChanged } = project
    let savedProject
    if (project._id) {
        //UPDATE
        try {
            savedProject = {
                _id: ObjectId(project._id),
                title,
                createdBy,
                labels,
                members,
                codeReview,
                activities: activities.slice(0, 20),
                importance,
                startDate,
                endDate,
                lastChanged
            }
            const collection = await dbService.getCollection('project')
            await collection.updateOne({ _id: savedProject._id }, { $set: savedProject })
            return savedProject


        } catch (err) {
            logger.error('cannot update project', err)
            throw err
        }
    } else {
        // CREATE
        try {
            savedProject = {
                createdAt: ObjectId(project._id).getTimestamp(),
                title: project.title,
                createdBy: project.createdBy,
                labels: [],
                members: [project.createdBy],
                codeReview: [],
                activities: [],
                importance: {},
                startDate: {},
                endDate: {},
                lastChanged: {}
            }
            const collection = await dbService.getCollection('project')
            await collection.insertOne(savedProject)
            return savedProject
        } catch (err) {
            logger.error('cannot add project', err)
            throw err
        }
    }
}

async function getById(projectId) {
    try {
        const collection = await dbService.getCollection('project')
        const project = await collection.findOne({ '_id': ObjectId(projectId) })
        return project
    } catch (err) {
        logger.error(`while finding project ${projectId}`, err)
        throw err
    }
}

async function remove(projectId) {
    try {
        const collection = await dbService.getCollection('project')
        await collection.deleteOne({ '_id': ObjectId(projectId) })
    } catch (err) {
        logger.error(`cannot remove project ${projectId}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    const { ctg } = filterBy
    if (ctg === 'favorite') {
        criteria.isFavorite = { $eq: true }
    }
    return criteria
}

module.exports = {
    query,
    save,
    getById,
    remove
}