
import { GET_BOOK_INFO } from '../actions/bookInfo';

export default function bookInfo(state = {}, action) {
    switch(action.type) {
        case GET_BOOK_INFO:
            let newState = action.data
            return {
                ...state,
                book: JSON.parse(JSON.stringify(newState))
            }
        default:
            return state
    }
}