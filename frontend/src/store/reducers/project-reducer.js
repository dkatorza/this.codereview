const initialState = {
    projects: [],
    project: null,
    filterBy: {
        members: [],
        labels: [],
        txt: '',
    }
}

export function projectReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PROJECTS':
            return { ...state, projects: action.projects }
        case 'SET_PROJECT':
            return { ...state, project: action.project, isLoading: false }
        case 'SAVE_PROJECT':
            return { ...state, project: { ...action.project } }
        case 'SET_FILTER':
            return { ...state, filterBy: action.filterBy }
        default:
            return state
    }
}



