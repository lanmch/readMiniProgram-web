export const GET_BOOK_LIST = 'GET_BOOK_LIST';

export const getBookList = (res) => {
    return {
        data: res,
        type: GET_BOOK_LIST 
    }
}
