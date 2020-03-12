export const GET_ARTICLE_DETAIL = 'GET_ARTICLE_DETAIL';

export const getArticleDetail = (res) => {
    return {
        data: res,
        type:  GET_ARTICLE_DETAIL
    }
}
