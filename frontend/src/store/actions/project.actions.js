import { projectService } from "../../services/project.service.js";


export function onSaveProject(project) {
    console.log('project',project);
    return async dispatch => {
        try {
            const savedProject = await projectService.save(project)
            console.log('savedProject',savedProject);
            dispatch({
                type: 'SAVE_PROJECT',
                project: savedProject
            })
        } catch (err) {
            console.log('ProjectAction: err in onSaveProject', err)
        }
    }
}

export function loadProjects(filterBy) {
    return async dispatch => {
        try {
            dispatch({
                type: 'SET_LOADING'
            })
            const projects = await projectService.query(filterBy)
            dispatch({
                type: 'SET_PROJECTS',
                projects
            })
        } catch (err) {
            console.log('ProjectActions: err in loadProjects', err)
        }
    }
}

export function loadProject(projectId) {
    return async dispatch => {
        try {
            const project = await projectService.getById(projectId)
            dispatch({
                type: 'SET_PROJECT',
                project: project
            })
        } catch (err) {
            console.log('ProjectAction: err in loadProject', err)
        }
    }
}

export function createProject(project) {
    return async dispatch => {
        try {
            const savedProject = await projectService.save(project)
            dispatch({
                type: 'SET_PROJECT',
                project: savedProject
            })
        } catch (err) {
            console.log('ProjectActions: err in onSaveProject', err)
        }
    }
}

export function unsetProject() {
    return dispatch => {
        dispatch({
            type: 'SET_PROJECT',
            project: null
        })
    }
}


export function setFilter(filterBy) {
    return dispatch => {
        dispatch({
            type: 'SET_FILTER',
            filterBy
        })
    }
}

