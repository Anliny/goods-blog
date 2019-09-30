import axios from 'axios'

export const getTableData = () => {
    return axios.request({
        url: 'get_table_data',
        method: 'get'
    })
}

export const getDragList = () => {
    return axios.request({
        url: 'get_drag_list',
        method: 'get'
    })
}

export const errorReq = () => {
    return axios.request({
        url: 'error_url',
        method: 'post'
    })
}

export const saveErrorLogger = info => {
    return axios.request({
        url: 'save_error_logger',
        data: info,
        method: 'post'
    })
}

export const uploadImg = formData => {
    return axios.request({
        url: 'image/upload',
        data: formData
    })
}

export const getOrgData = () => {
    return axios.request({
        url: 'get_org_data',
        method: 'get'
    })
}

export const getTreeSelectData = () => {
    return axios.request({
        url: 'get_tree_select_data',
        method: 'get'
    })
}
// 获取文章列表
export const apiPostBlogArticleList = (data) => {
    return axios.request({
        url: '/common',
        data: data,
        method: 'post'
    })
}
// 文章详情
export const apiGetArticleInfo = (path) => {
    return axios.request({
        url: '/common/getArticleInfo',
        params: path,
        method: 'get'
    })
}