import { GET_BOOK_LIST } from '../actions/bookList';

export default function bookList(state = {}, action) {
    switch(action.type) {
        case GET_BOOK_LIST:
            let newState = action.data
            return {
                ...state,
                booklist: JSON.parse(JSON.stringify(newState))
            }
        default:
            return state
    }
}