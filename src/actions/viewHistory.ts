export const GET_VIEW_HISTORY = 'GET_VIEW_HISTORY';

export const getViewHistory = (res) => {
    return {
        data: res,
        type: GET_VIEW_HISTORY
    }
}
