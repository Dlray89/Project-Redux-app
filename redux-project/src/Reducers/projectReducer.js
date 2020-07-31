import * as ACTION_TYPES from '../Action/action_types'



const projectState = {
    projects: [
        {id: 1, name: 'Get up Redux project'},
        {id: 2, name: 'Test Redux project'},
        {id: 3, name: 'Deploy Redux project'}
    ]
}

const projectReducer = (state = projectState, action) => {
    switch(action.type){
        case ACTION_TYPES.GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
            default:
                return state
    }
}

export default projectReducer