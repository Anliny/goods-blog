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

// 获取当前用户文章列表
export const apiGetArtileList = (data) => {
    return axios.request({
        url: '/article',
        data: data,
        method: 'post'
    })
}

//  暂存 和 发布 文章
export const apiPutArtileRelease = (data) => {
    return axios.request({
        url: '/article/updateArticleStutas',
        data: data,
        method: 'put'
    })
}

//  修改查看文章详情
export const apiGetArticleInfoUpdate = (path) => {
    return axios.request({
        url: '/article/getArticleInfoUpdate',
        params: path,
        method: 'get'
    })
}


//  修改文章
export const apiPostUpdate = (data) => {
    return axios.request({
        url: '/article/update',
        data: data,
        method: 'post'
    })
}


