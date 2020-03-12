export const GET_DIRECTORY = 'GET_DIRECTORY';

export const getDirectory= (res) => {
    return {
        data: res,
        type: GET_DIRECTORY
    }
}
