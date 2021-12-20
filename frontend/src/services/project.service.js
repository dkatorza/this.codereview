import { utilsService } from './utils.service'
import { httpService } from './http.service'
import { userService } from './user.service'

export const projectService = {
    query,
    save,
    getById,
    remove,
}

async function query(filterBy = { ctg: '' }) {
    try {
        return await httpService.get('project', filterBy)
    } catch (err) {
        throw err
    }
}

async function getById(projectId) {
    try {
        return await httpService.get(`project/${projectId}`)
    } catch (err) {
        throw err
    }
}

async function save(project) {
    if (project._id) {
        try {
            return await httpService.put(`project/${project._id}`, project)
        } catch (err) {
            throw err
        }
    } else {
        try {
            return await httpService.post('project', project)
        } catch (err) {
            throw err
        }
    }
}

async function remove(projectId) {
    try {
        await httpService.delete(`project/${projectId}`)
    } catch (err) {
        throw err
    }
}




