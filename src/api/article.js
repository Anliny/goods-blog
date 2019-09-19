import axios from 'axios'


// 获取文章类型列表
export const apiGetBlogList = () => {
    return axios.request({
        url: "/common/blogs",
        method: 'get'
    })
}

// 添加文章
export const apiPostAddArticle = (data) => {
    return axios.request({
        url: "/article/add_article",
        data: data,
        method: 'post'
    })
}

// 文章详情
export const apiGetArticleInfo = (path) => {
    return axios.request({
        url: '/article/getArticleInfo',
        params: path,
        method: 'get'
    })
}