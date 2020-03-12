export const GET_COLLECT_LIST = 'GET_COLLECT_LIST';

export const getCollectList= (res) => {
    return {
        data: res,
        type: GET_COLLECT_LIST
    }
}
