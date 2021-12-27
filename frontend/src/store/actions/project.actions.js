import { projectService } from "../../services/project.service.js";

export function onSaveProject(project) {
  return async (dispatch) => {
    try {
      const savedProject = await projectService.save(project);
      dispatch({
        type: "SAVE_PROJECT",
        project: savedProject,
      });
    } catch (err) {
      console.log("ProjectAction: err in onSaveProject", err);
    }
  };
}

export function loadProjects(filterBy) {
  return async (dispatch) => {
    try {
      const projects = await projectService.query(filterBy);
      dispatch({
        type: "SET_PROJECTS",
        projects,
      });
    } catch (err) {
      console.log("ProjectActions: err in loadProjects", err);
    }
  };
}

export function loadProject(projectId) {
  return async (dispatch) => {
    try {
      const project = await projectService.getById(projectId);
      dispatch({
        type: "SET_PROJECT",
        project,
      });
    } catch (err) {
      console.log("ProjectAction: err in loadProject", err);
    }
  };
}

export function createProject(project) {
  return async (dispatch) => {
    try {
      const savedProject = await projectService.save(project);
      dispatch({
        type: "SET_PROJECT",
        project: savedProject,
      });
    } catch (err) {
      console.log("ProjectActions: err in onSaveProject", err);
    }
  };
}

export function unsetProject() {
  return (dispatch) => {
    dispatch({
      type: "SET_PROJECT",
      project: null,
    });
  };
}

export function setFilter(filterBy) {
  return (dispatch) => {
    dispatch({
      type: "SET_FILTER",
      filterBy,
    });
  };
}

export function loadCr(crId, projectId) {
  return async (dispatch) => {
    try {
      const project = await projectService.getById(projectId);
      const cr = project.codeReview.filter((cr) => cr.id === crId);
      dispatch({
        type: "SET_CR",
        cr,
      });
    } catch (err) {
      console.log("CR-Action: err in setCR", err);
    }
  };
}
