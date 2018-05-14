import http from './public'
// 文章列表
export const getArticle = (params) => {
  return http.fetchGet('/articles/content', params)
}
// 文章详情
export const getArticleDet = (params) => {
  return http.fetchGet('/articles/ArticleDet', params)
}