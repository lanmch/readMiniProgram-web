import { GET_DIRECTORY } from '../actions/directory';

export default function directory(state = {}, action) {
    switch(action.type) {
        case GET_DIRECTORY:
            let newState = action.data
            return {
                ...state,
                directoryList: JSON.parse(JSON.stringify(newState))
            }
        default:
            return state
    }
}