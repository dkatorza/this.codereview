import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { projectReducer } from './reducers/project-reducer.js'
import { appReducer } from './reducers/app.reducer.js'


// Combining reducers into one
const rootReducer = combineReducers({
    projectModule: projectReducer,
    appModule: appReducer,
})

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


