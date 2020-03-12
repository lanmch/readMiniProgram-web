export const GET_RANK_LIST = 'GET_RANK_LIST';

export const getRankList = (res) => {
    return {
        data: res,
        type: GET_RANK_LIST 
    }
}
