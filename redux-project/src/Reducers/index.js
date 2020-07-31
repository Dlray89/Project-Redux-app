import ProjectReducer from './projectReducer'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    projects: ProjectReducer
})

export default rootReducer