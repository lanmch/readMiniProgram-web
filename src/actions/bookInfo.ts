export const GET_BOOK_INFO = 'GET_BOOK_INFO';

export const getBookInfo= (res) => {
    return {
        data: res,
        type: GET_BOOK_INFO
    }
}
