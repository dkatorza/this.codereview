const initialState = {
  projects: [],
  project: null,
  cr: null,
  filterBy: {
    members: [],
    labels: [],
    txt: "",
  },
};

export function projectReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PROJECTS":
      return { ...state, projects: action.projects };
    case "SET_PROJECT":
      return { ...state, project: action.project };
    case "SAVE_PROJECT":
      return { ...state, projects: [...state.projects, action.project] };
    case "SET_CR":
      return { ...state, cr: action.cr };
    case "SET_FILTER":
      return { ...state, filterBy: action.filterBy };
    default:
      return state;
  }
}
