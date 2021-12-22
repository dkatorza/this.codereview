import { userService } from '../../services/user.service.js'

const initialState = {
    projectspace: [],
    loggedInUser: userService.getLoggedinUser(),
    loginErr: null,
    currPopover: {
        name: ''
    },
    isOverlayOpen: false
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, loggedInUser: action.user, loginErr: null }
        case 'LOGIN_ERR':
            return { ...state, loginErr: action.err }
        case 'SET_POPOVER':
            return { ...state, currPopover: { name: action.popoverName}, isOverlayOpen: true}
        case 'CLOSE_POPOVER':
            return { ...state, currPopover: { name: ''}, isOverlayOpen: false}
        default:
            return state
    }
}